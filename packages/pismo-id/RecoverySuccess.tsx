import * as React from 'react'
import { FormCard } from './components/FormCard'
import { Title } from './components/Title'
import { Wrapper } from './components/Wrapper'

interface RecoverySuccessProps {
  email: string
}

export const RecoverySuccess = (props: RecoverySuccessProps) => {
  const { email } = props
  return (
    <Wrapper>
      <FormCard>
        <Title>{`As instruções para redefinição de senha foram enviadas para ${email}`}</Title>
      </FormCard>
    </Wrapper>
  )
}
