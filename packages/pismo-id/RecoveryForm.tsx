import { colors, styled } from '@pismo/bolt-core'
import { FastField as FormikField, Formik } from 'formik'
import * as React from 'react'
import { FormCard } from './components/FormCard'
import { Input } from './components/Input'
import { Link } from './components/Link'
import { SubmitButton } from './components/SubmitButton'
import { Title } from './components/Title'
import { Wrapper } from './components/Wrapper'
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
  email: Yup.string()
    .email()
    .required(),
})

interface RecoveryFormProps {
  auth: any
  goToLogin(): void
  goToRecoverySuccess(email: string): void
}

export const RecoveryForm = (props: RecoveryFormProps) => {
  const { goToLogin, goToRecoverySuccess, auth } = props
  return (
    <Wrapper>
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
            const [error] = await auth.recoverPassword(values.email)

            if (error) {
              setSubmitting(false)
              return null
            }

            setSubmitting(false)
            return goToRecoverySuccess(values.email)
          }}
          render={({ handleChange, isSubmitting, submitForm, isValid }) => (
            <div>
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
              <SubmitButton onClick={() => submitForm()} disabled={!isValid}>
                ENVIAR
              </SubmitButton>
              <LinkWrapper>
                <ArrowBack>&larr;</ArrowBack>
                <Link onClick={() => goToLogin()}>Lembrou?</Link>
              </LinkWrapper>
            </div>
          )}
        />
      </FormCard>
    </Wrapper>
  )
}
