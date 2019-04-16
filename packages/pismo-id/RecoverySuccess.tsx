import { colors, styled } from '@pismo/bolt-core'
import * as React from 'react'
import { FormCard } from './components/FormCard'
import { Link } from './components/Link'
import { Title } from './components/Title'

const ArrowBack = styled.span`
  font-size: 1.25rem;
  color: ${colors.grey800};
`

interface RecoverySuccessProps {
  email: string
  goToLogin(): void
}

export const RecoverySuccess = ({ email, goToLogin }: RecoverySuccessProps) => {
  return (
    <FormCard>
      <Title>{`As instruções para redefinição de senha foram enviadas para ${email}`}</Title>
      <ArrowBack>&larr;</ArrowBack>
      <Link onClick={goToLogin}>Voltar ao login</Link>
    </FormCard>
  )
}
