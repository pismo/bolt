export enum Countrys {
  BRAZIL = 'brazil',
  CHILE = 'chile'
}

export enum CurrencyCode {
  BRAZIL = 'BRL',
  CHILE = 'CLP',
  US = 'USD'
}

export interface AddressFormat {
  postalCode: string
  addressLine1: string
  addressLine2: string
  neighborhood: string
  city: string
  state: string
}

export interface StateResult {
  id: number
  sigla: string
  name: string
}

export interface CitiesResult {
  id: number
  name: string
  state: StateResult
}

export interface Error {
  error: { message: string }
}

export interface Format {
  documentNumber: string
  documentNumberIsValid: (value: string) => boolean
  phoneNumber: string
  phoneNumberIsValid: (value: string) => boolean
  postalCode: string
  postalCodeIsValid: (value: string) => boolean
  getAddressByPostalCode: (postalCode: string) => Promise<AddressFormat | Error>
  getStatesList: () => Promise<StateResult[] | Error>
  getCitiesList: (state: StateResult) => Promise<CitiesResult[] | Error>
}

type WTFormat = { [key in Countrys]: Format }

export const WorldFormat: WTFormat = {
  [Countrys.BRAZIL]: {
    documentNumber: String.raw`\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}`,
    documentNumberIsValid: (value: string) =>
      Boolean(value.match(/\d{2}\.?\d{3}\.?\d{3}\/?\d{4}\-?\d{2}/g)),
    phoneNumber: String.raw`\(\d{2}\)\d{4,5}\-\d{4}`,
    phoneNumberIsValid: (value: string) =>
      Boolean(value.match(/\(?\d{2}\)?\d{4,5}\-?\d{4}/g)),
    postalCode: String.raw`\d{5}-\d{3}`,
    postalCodeIsValid: (value: string) =>
      Boolean(value.match(/\d{5}\-?\d{3}/g)) &&
      value.replace('-', '').length === 8,
    async getAddressByPostalCode (postalCode: string) {
      if (!this.postalCodeIsValid(postalCode)) {
        return { error: { message: 'Inválid Postal Code' } }
      }

      const formated = postalCode.replace(/\D/g, '')

      try {
        const {
          logradouro,
          complemento,
          bairro,
          localidade,
          uf,
          erro
        } = await fetch(`https://viacep.com.br/ws/${formated}/json/`).then(
          res =>
            res.json().then(data => {
              console.log(data)
              return data
            })
        )

        if (erro) {
          return { error: { message: 'Postal Code Not Found' } }
        }

        return {
          postalCode: formated,
          addressLine1: logradouro,
          addressLine2: complemento,
          neighborhood: bairro,
          city: localidade,
          state: uf
        }
      } catch (err) {
        return { error: { message: err.message } }
      }
    },
    getStatesList: async () => {
      try {
        let response = []
        const key = `@pismo/bolt-world-format/stateList/${Countrys.BRAZIL}`
        const local = localStorage.getItem(key)

        if (!local) {
          const res = await fetch(
            'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
          ).then(res => res.json().then(data => data))

          response = res.map(({ nome, id, sigla }) => ({
            name: nome,
            id,
            sigla
          }))

          localStorage.setItem(key, JSON.stringify(response))
        } else {
          response = JSON.parse(local)
        }

        return response
      } catch (err) {
        return { error: { message: err.message } }
      }
    },
    getCitiesList: async (state: StateResult) => {
      try {
        const key = `@pismo/bolt-world-format/citieslist/${Countrys.BRAZIL}/${
          state.id
        }`
        const local = localStorage.getItem(key)
        let response = []

        if (!local) {
          const res = await fetch(
            `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${
              state.id
            }/municipios`
          )
            .then(res => res.json())
            .then(data => data)

          if (res.message) {
            return { error: { message: 'Invalid State' } }
          }

          response = res.map(({ id, nome }) => ({ id, name: nome, state }))

          localStorage.setItem(key, JSON.stringify(response))
        } else {
          response = JSON.parse(local)
        }

        return response
      } catch (err) {
        return { error: { message: err.message } }
      }
    }
  },
  [Countrys.CHILE]: {
    documentNumber: String.raw`\d{2}\.\d{3}\.\d{3}-[a-z A-Z 0-9]`,
    documentNumberIsValid: (value: string) =>
      Boolean(value.match(/\d{2}\.?\d{3}\.?\d{3}\-?[a-z A-Z 0-9]/g)),
    phoneNumber: String.raw`\d{3}\-\d{3}\-\d{3}`,
    phoneNumberIsValid: (value: string) =>
      Boolean(value.match(/\d{3}\-?\d{3}\-?\d{3}/g)),
    postalCode: String.raw`\d{7}`,
    postalCodeIsValid: (value: string) => Boolean(value.match(/\d{7}/g)),
    getAddressByPostalCode: (postalCode: string) =>
      Promise.resolve({
        postalCode,
        addressLine1: '',
        addressLine2: '',
        neighborhood: '',
        city: '',
        state: ''
      }),
    getStatesList: async () => Promise.resolve([]),
    getCitiesList: async (state: StateResult) =>
      Promise.resolve([{ name: state.name, id: state.id, state }])
  }
}
