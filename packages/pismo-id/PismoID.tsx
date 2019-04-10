import { colors, styled } from '@pismo/bolt-core'
import { Loader } from '@pismo/bolt-loader'
import * as React from 'react'
import { Modes } from './constants/Modes'
import { LoginForm } from './LoginForm'
import { RecoveryForm } from './RecoveryForm'
import { RecoverySuccess } from './RecoverySuccess'

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  color: ${colors.grey800};
  background-color: rgba(0, 0, 0, 0.7);
  font-family: Helvetica, Arial, sans-serif;
  position: fixed;
  display: table;
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

export const PismoID = (props: PismoIDProps) => {
  const { children, auth } = props

  const [isValid, setIsValid] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const [mode, setMode] = React.useState(Modes.LOGIN)
  const [email, setEmail] = React.useState('')
  const [tokenRefresher, setTokenRefresher] = React.useState(null)

  React.useEffect(() => {
    auth
      .ensure()
      .then(data => {
        auth
          .setSession(data)
          .then(() => {
            setLoading(false)
            setIsValid(true)
            return auth.onUpdateProxy()
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
  }, [])

  if (loading) {
    return (
      <LoaderWrapper>
        <Loader color={'#FFF'} />
      </LoaderWrapper>
    )
  }

  if (isValid) {
    return children
  }

  return (
    <Wrapper>
      {mode === Modes.LOGIN && (
        <LoginForm
          setIsValid={setIsValid}
          setTokenRefresher={setTokenRefresher}
          auth={auth}
          goToRecovery={() => setMode(Modes.RECOVERY)}
        />
      )}
      {mode === Modes.RECOVERY && (
        <RecoveryForm
          auth={auth}
          goToRecoverySuccess={userEmail => {
            setEmail(userEmail)
            setMode(Modes.RECOVERY_SUCCESS)
          }}
          goToLogin={() => {
            setEmail('')
            setMode(Modes.LOGIN)
          }}
        />
      )}
      {mode === Modes.RECOVERY_SUCCESS && <RecoverySuccess email={email} />}
    </Wrapper>
  )
}
