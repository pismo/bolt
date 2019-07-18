import * as React from 'react'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'

import { paletteExtra } from '@pismo/bolt-core/themes'
import { Snackbar } from '@pismo/bolt-snackbar'
import { LoginForm } from './LoginForm'

const { useState, useEffect, createContext, useContext } = React

interface PismoIDProps {
  children: React.ReactNode
  auth: any
}

enum Modes {
  LOGIN,
  RECOVERY,
  RECOVERY_SUCCESS
}

const PismoIDContext = createContext(null)

const PismoID: React.FC<PismoIDProps> = ({ children, auth }) => {
  const [isValid, setIsValid] = useState<boolean>(false)

  const [loading, setLoading] = useState<boolean>(true)
  const [mode, setMode] = useState<Modes>(Modes.LOGIN)

  const [variant] = useState<'info' | 'warning' | 'error' | 'success'>('error')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [messageOpen, setMessageOpen] = useState<boolean>(false)

  const [tokenRefresher, setTokenRefresher] = useState<any>(null)

  useEffect(() => {
    console.log('passei aqui')

    initializeAuth()

    return () => {
      if (tokenRefresher) {
        tokenRefresher.stop()
      }
    }
  }, [])

  const initializeAuth = async () => {
    try {
      const data = await auth.ensure()

      await auth.setSession(data)

      setLoading(false)
      setIsValid(true)

      return auth.onUpdateProxy(tokenRefresher)
    } catch (err) {
      setLoading(false)
      setIsValid(false)

      return auth.resetSession()
    }
  }

  const closeMessage = () => {
    setMessageOpen(false)
  }

  console.log(loading)
  if (loading) {
    return (
      <Box
        width={1}
        height='100%'
        bgcolor={paletteExtra.background.special}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <CircularProgress color='primary' />
      </Box>
    )
  }

  if (isValid) {
    return (
      <PismoIDContext.Provider
        value={{ setIsLoggedIn: setIsValid, isLoggedIn: isValid }}
      >
        {children}
      </PismoIDContext.Provider>
    )
  }

  return (
    <React.Fragment>
      <Box
        width={1}
        height='100%'
        bgcolor={paletteExtra.background.special}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        {mode === Modes.LOGIN && (
          <LoginForm
            auth={auth}
            tokenRefresh={tokenRefresher}
            setTokenRefresh={setTokenRefresher}
            setIsValid={setIsValid}
            setErrorMessage={setErrorMessage}
            setMessageOpen={setMessageOpen}
          />
        )}
      </Box>
      <Snackbar
        open={messageOpen}
        variant={variant}
        message={errorMessage}
        onClose={closeMessage}
      />
    </React.Fragment>
  )
}

export const usePismoID = () => useContext(PismoIDContext)
export { PismoID }
