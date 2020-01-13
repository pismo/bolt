export enum Countrys {
    BRAZIL = 'brazil',
    CHILE = 'chile'
}

interface Format {
    documentNumber: string
}

type WTFormat = {
    [key in Countrys]: Format
}

export const WorldFormat: WTFormat = {
    [Countrys.BRAZIL]: {
        documentNumber: '99.999.999/9999-99'
    },
    [Countrys.CHILE]: {
        documentNumber: '99.999.999-(a|9)'
    }
}