import { Checkbox } from '@pismo/bolt-checkbox'
import { styled } from '@pismo/bolt-core'
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
  justify-content: space-between;
  width: 100%;
`
const InputWrapper = styled.div`
  margin-bottom: 4rem;
  @media (min-width: 481px) and (max-width: 767px) {
    margin-bottom: 0;
  }
`

const validationSchema = Yup.object().shape({
  emailOrCPF: Yup.string().required(),
  password: Yup.string().required(),
  rememberMe: Yup.boolean(),
})

interface LoginFormProps {
  auth: any
  tokenRefresher: any
  goToRecovery(): void
  setIsValid(valid: boolean): void
  setTokenRefresher(refresher: any): void
}

export const LoginForm = (props: LoginFormProps) => {
  const [rememberMeState, setRememberMe] = React.useState<boolean>(false)
  const [identificationState, setIdentification] = React.useState<string>('')

  const { toast } = useToast()

  const { goToRecovery, setIsValid, setTokenRefresher, auth, tokenRefresher } = props

  React.useEffect(() => {
    auth.getPreferences().then(({ identification = '', rememberMe = false }) => {
      setIdentification(identification)
      setRememberMe(rememberMe)
    })
  }, [])

  return (
    <FormCard>
      <Title>Olá informe seus dados para continuar</Title>
      <Formik
        initialValues={{
          emailOrCPF: identificationState,
          password: '',
          rememberMe: rememberMeState,
        }}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true)
          const [error] = await eres(auth.login(values))

          if (error) {
            setSubmitting(false)
            toast.error('Erro: usuário ou senha ínvalidos')
            return auth.resetSession()
          }

          const [errorUpdate, result] = await eres(auth.onUpdateProxy(tokenRefresher))

          if (errorUpdate) {
            setSubmitting(false)
            toast.error('Erro: algo inesperado ocorreu, por favor tente novamente')
            return auth.resetSession()
          }

          setSubmitting(false)
          setTokenRefresher(result)
          return setIsValid(true)
        }}
        render={({ values, handleSubmit, setFieldValue, isSubmitting, isValid }) => {
          const setCheckboxValue = (name: string) => evt => setFieldValue(name, evt.target.checked)

          return (
            <form onSubmit={handleSubmit}>
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
              <SubmitButton type="submit" disabled={!isValid}>
                ENTRAR
              </SubmitButton>
              <LinkWrapper>
                <Checkbox name={'rememberMe'} onChange={setCheckboxValue('rememberMe')} checked={values.rememberMe}>
                  Lembrar
                </Checkbox>
                <Link onClick={goToRecovery}>Esqueceu a senha?</Link>
              </LinkWrapper>
            </form>
          )
        }}
      />
    </FormCard>
  )
}
