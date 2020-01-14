export enum Countrys {
    BRAZIL = 'brazil',
    CHILE = 'chile'
}

export interface Format {
    documentNumber: string
    documentNumberIsValid: (value: string) => boolean
}

type WTFormat = {
    [key in Countrys]: Format
}

export const WorldFormat: WTFormat = {
    [Countrys.BRAZIL]: {
        documentNumber: '\\d{2}\\.\\d{3}\\.\\d{3}\/\\d{4}-\\d{2}',
        documentNumberIsValid: (value: string) => {
            const pattern = /\d{2}\.?\d{3}\.?\d{3}\/?\d{4}\-?\d{2}/g

            return Boolean(value.match(pattern))
        }
    },
    [Countrys.CHILE]: {
        documentNumber: '\\d{2}\\.\\d{3}\\.\\d{3}-[a-z A-Z 0-9]',
        documentNumberIsValid: (value: string) => {
            const pattern = /\d{2}\.?\d{3}\.?\d{3}\-?[a-z A-Z 0-9]/g

            return Boolean(value.match(pattern))
        }
    }
}