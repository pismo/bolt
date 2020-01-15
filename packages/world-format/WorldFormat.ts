export enum Countrys {
    BRAZIL = 'brazil',
    CHILE = 'chile'
}

export interface Format {
    documentNumber: string
    documentNumberIsValid: (value: string) => boolean,
    phoneNumber: string
    phoneNumberIsValid: (value: string) => boolean,
    postalCode: string,
    postalCodeIsValid: (value: string) => boolean
}

type WTFormat = {
    [key in Countrys]: Format
}

export const WorldFormat: WTFormat = {
    [Countrys.BRAZIL]: {
        documentNumber: String.raw`\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}`,
        documentNumberIsValid: (value: string) => Boolean(value.match(/\d{2}\.?\d{3}\.?\d{3}\/?\d{4}\-?\d{2}/g)),
        phoneNumber: String.raw`\(\d{2}\)\d{4,5}\-\d{4}`,
        phoneNumberIsValid: (value: string) => Boolean(value.match(/\(?\d{2}\)?\d{4,5}\-?\d{4}/g)),
        postalCode: String.raw`\d{5}-\d{3}`,
        postalCodeIsValid: (value: string) => Boolean(value.match(/\d{5}\-?\d{3}/g))
    },
    [Countrys.CHILE]: {
        documentNumber: String.raw`\d{2}\.\d{3}\.\d{3}-[a-z A-Z 0-9]`,
        documentNumberIsValid: (value: string) => Boolean(value.match(/\d{2}\.?\d{3}\.?\d{3}\-?[a-z A-Z 0-9]/g)),
        phoneNumber: String.raw`\d{3}\-\d{3}\-\d{3}`,
        phoneNumberIsValid: (value: string) => Boolean(value.match(/\d{3}\-?\d{3}\-?\d{3}/g)),
        postalCode: String.raw`\d{7}`,
        postalCodeIsValid: (value: string) => Boolean(value.match(/\d{7}/g))
    }
}