import { colors, styled } from '@pismo/bolt-core'
import { Loader } from '@pismo/bolt-loader'
import { ToastProvider } from '@pismo/bolt-toast'
import * as React from 'react'
import { Modes } from './constants/Modes'
import { LoginForm } from './LoginForm'
import { RecoveryForm } from './RecoveryForm'
import { RecoverySuccess } from './RecoverySuccess'

const Wrapper = styled.div`
  height: 100vh;
  color: ${colors.grey800}´;
  background-color: rgba(0, 0, 0, 0.7);
  font-family: Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.15s ease-in-out;
  overflow: hidden;
`

const LoaderWrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  color: ${colors.grey800};
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

interface PismoIDProps {
  children: React.ReactNode
  auth: any
}

const PismoIDContext = React.createContext(null)

export const PismoID = (props: PismoIDProps) => {
  const { children, auth } = props

  const [isValid, setIsValid] = React.useState<boolean>(false)
  const [loading, setLoading] = React.useState<boolean>(true)
  const [mode, setMode] = React.useState<Modes>(Modes.LOGIN)
  const [email, setEmail] = React.useState<string>('')
  const [tokenRefresher, setTokenRefresher] = React.useState<any>(null)

  const setValid = valid => setIsValid(valid)

  React.useEffect(() => {
    auth
      .ensure()
      .then(data => {
        auth
          .setSession(data)
          .then(() => {
            setLoading(false)
            setIsValid(true)
            return auth.onUpdateProxy(tokenRefresher)
          })
          .catch(() => {
            setLoading(false)
            setIsValid(false)
            return auth.resetSession()
          })
      })
      .catch(() => {
        setLoading(false)
        setIsValid(false)
      })
    return () => {
      if (tokenRefresher) {
        tokenRefresher.stop()
      }
    }
  }, [isValid])

  if (loading) {
    return (
      <LoaderWrapper>
        <Loader color={'#FFF'} />
      </LoaderWrapper>
    )
  }

  if (isValid) {
    return (
      <PismoIDContext.Provider value={{ setIsLoggedIn: setValid, isLoggedIn: isValid }}>
        {children}
      </PismoIDContext.Provider>
    )
  }

  const goToLogin = () => {
    setEmail('')
    return setMode(Modes.LOGIN)
  }

  return (
    <ToastProvider>
      <Wrapper>
        {mode === Modes.LOGIN && (
          <LoginForm
            setIsValid={setIsValid}
            setTokenRefresher={setTokenRefresher}
            tokenRefresher={tokenRefresher}
            auth={auth}
            goToRecovery={() => setMode(Modes.RECOVERY)}
          />
        )}
        {mode === Modes.RECOVERY && (
          <RecoveryForm
            auth={auth}
            goToRecoverySuccess={userEmail => {
              setEmail(userEmail)
              return setMode(Modes.RECOVERY_SUCCESS)
            }}
            goToLogin={goToLogin}
          />
        )}
        {mode === Modes.RECOVERY_SUCCESS && <RecoverySuccess email={email} goToLogin={goToLogin} />}
      </Wrapper>
    </ToastProvider>
  )
}

export const usePismoID = () => React.useContext(PismoIDContext)
