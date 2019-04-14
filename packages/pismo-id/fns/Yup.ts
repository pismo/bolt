import * as Yup from 'yup'
import { setLocale } from 'yup'

setLocale({
  mixed: {
    required: 'Este é um campo obrigatório',
    notType: 'Este é um valor inválido',
  },
  string: {
    matches: 'Este é um valor inválido',
    email: 'Este é um email inválido',
    // eslint-disable-next-line no-template-curly-in-string
    min: 'Este campo deve ter no mínimo ${min} caracteres',
    typeError: 'O valor deve ser alphanumérico',
  },
  number: {
    // eslint-disable-next-line no-template-curly-in-string
    min: 'O valor deve ser maior ou igual a ${min}',
    // eslint-disable-next-line no-template-curly-in-string
    max: 'O valor deve ser menor ou igual a ${max}',
  },
})

export { Yup }
