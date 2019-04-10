import { Checkbox } from '@pismo/bolt-checkbox'
import { styled } from '@pismo/bolt-core'
import * as eres from 'eres'
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
  justify-content: space-between;
  width: 100%;
`
const InputWrapper = styled.div`
  margin-bottom: 4rem;
`

const validationSchema = Yup.object().shape({
  emailOrCPF: Yup.string().required(),
  password: Yup.string().required(),
  rememberMe: Yup.boolean(),
})

interface LoginFormProps {
  auth: any
  goToRecovery(): void
  setIsValid(valid: boolean): void
  setTokenRefresher(refresher: any): void
}

export const LoginForm = (props: LoginFormProps) => {
  const { goToRecovery, setIsValid, setTokenRefresher, auth } = props

  return (
    <Wrapper>
      <FormCard>
        <Title>Olá informe seus dados para continuar</Title>
        <Formik
          initialValues={{
            emailOrCPF: '',
            password: '',
            rememberMe: false,
          }}
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true)
            const [error] = await eres(auth.login(values))

            if (error) {
              setSubmitting(false)
              return auth.resetSession()
            }

            const [errorUpdate, result] = await eres(auth.onUpdateProxy())

            if (errorUpdate) {
              setSubmitting(false)
              return auth.resetSession()
            }

            setSubmitting(false)
            setTokenRefresher(result)
            return setIsValid(true)
          }}
          render={({ values, setFieldValue, isSubmitting, submitForm, isValid }) => (
            <div>
              <InputWrapper>
                <FormikField
                  name={'emailOrCPF'}
                  placeholder={'E-mail'}
                  flex={'0.49'}
                  component={Input}
                  disabled={isSubmitting}
                />
                <FormikField
                  name={'password'}
                  placeholder={'Senha'}
                  flex={'0.49'}
                  component={Input}
                  disabled={isSubmitting}
                  type={'password'}
                />
              </InputWrapper>
              <SubmitButton onClick={submitForm} disabled={!isValid}>
                ENTRAR
              </SubmitButton>
              <LinkWrapper>
                <Checkbox
                  name={'rememberMe'}
                  onChange={evt => {
                    return setFieldValue('rememberMe', evt.target.checked)
                  }}
                  checked={values.rememberMe}
                >
                  Lembrar
                </Checkbox>
                <Link onClick={() => goToRecovery()}>Esqueceu a senha?</Link>
              </LinkWrapper>
            </div>
          )}
        />
      </FormCard>
    </Wrapper>
  )
}
