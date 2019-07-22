import isValidCNPJ from '@brazilian-utils/is-valid-cnpj'
import isValidCPF from '@brazilian-utils/is-valid-cpf'

export const isValidDocument = (documentNumber: string): boolean =>
  isValidCPF(documentNumber) || isValidCNPJ(documentNumber)
