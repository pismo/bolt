import { colors, styled } from '@pismo/bolt-core'
import { useToast } from '@pismo/bolt-toast'
import * as eres from 'eres'
import { FastField as FormikField, Formik } from 'formik'
import * as React from 'react'
import { FormCard } from './components/FormCard'
import { Input } from './components/Input'
import { Link } from './components/Link'
import { SubmitButton } from './components/SubmitButton'
import { Title } from './components/Title'
import { Yup } from './fns/Yup'

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`

const ArrowBack = styled.span`
  font-size: 1.25rem;
  color: ${colors.grey800};
`

const InputWrapper = styled.div`
  margin-bottom: 4rem;
`

const validationSchema = Yup.object().shape({
  email: Yup.string().required(),
})

interface RecoveryFormProps {
  auth: any
  goToLogin(): void
  goToRecoverySuccess(email: string): void
}

export const RecoveryForm = (props: RecoveryFormProps) => {
  const { toast } = useToast()
  const { goToLogin, goToRecoverySuccess, auth } = props
  return (
    <FormCard>
      <Title>{`Esqueceu a senha? Informe seu e-mail para continuar`}</Title>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true)
          const [error] = await eres(auth.recoverPassword(values.email))

          if (error) {
            setSubmitting(false)
            toast.error('Erro: usuário não encontrado')
            return null
          }

          setSubmitting(false)
          return goToRecoverySuccess(values.email)
        }}
        render={({ handleChange, handleSubmit, isSubmitting, isValid }) => (
          <form onSubmit={handleSubmit}>
            <InputWrapper>
              <FormikField
                name={'email'}
                placeholder={'E-mail ou CPF'}
                flex={'0.49'}
                component={Input}
                disabled={isSubmitting}
                onChange={handleChange}
              />
            </InputWrapper>
            <SubmitButton type={'Submit'} disabled={!isValid}>
              ENVIAR
            </SubmitButton>
            <LinkWrapper>
              <ArrowBack>&larr;</ArrowBack>
              <Link onClick={() => goToLogin()}>Lembrou?</Link>
            </LinkWrapper>
          </form>
        )}
      />
    </FormCard>
  )
}
