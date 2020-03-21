import * as React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'

import { FormControl } from '@pismo/bolt-form-control'
import { TextField } from '@pismo/bolt-text-field'

import { getTranslation } from './getTranslation'

const { useState, useEffect } = React

const lang = getTranslation()

interface LoginFormProps {
  auth: any
  tokenRefresh: any
  setTokenRefresh(refresher: any): void
  setIsValid(valid: boolean): void
  setErrorMessage(message: string): void
  setMessageOpen(val: boolean): void
  goToRecovery(): void
}

const LoginForm: React.FC<LoginFormProps> = ({
  auth,
  tokenRefresh,
  setTokenRefresh,
  setIsValid,
  setErrorMessage,
  setMessageOpen,
  goToRecovery
}: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [rememberMe, setRememberMe] = useState<boolean>(false)
  const [identificationState, setIdentification] = useState<string>('')

  const schema: any = {
    emailOrCPF: {
      email: {
        message: lang['login.invalidEmail']
      }
    },
    password: {
      length: {
        minimum: 6,
        message: lang['login.minimumChar']
      }
    }
  }

  useEffect(() => {
    auth
      .getPreferences()
      .then(({ identification = '', rememberMe = false }) => {
        setIdentification(identification)
        setRememberMe(rememberMe)
      })
  }, [])

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const toggleRememberMe = handleChange => (
    e: React.ChangeEvent<HTMLInputElement>,
    val: boolean
  ) => {
    setRememberMe(val)
    ;(e.target as any).value = val
    handleChange(e)
  }

  const submit = async ({ emailOrCPF, password, remember: rememberMe }) => {
    let result

    try {
      await auth.login({ emailOrCPF, password, rememberMe })
    } catch (err) {
      console.log(err)
      setErrorMessage(lang['login.error.invalidUser'])
      setMessageOpen(true)
      return auth.resetSession()
    }

    try {
      result = await auth.onUpdateProxy(tokenRefresh)
    } catch (err) {
      console.log(err)
      setErrorMessage(lang['login.error.server'])
      setMessageOpen(true)
      return auth.resetSession()
    }

    setTokenRefresh(result)
    return setIsValid(true)
  }

  return (
    <Box maxWidth='436px'>
      <Card elevation={6}>
        <CardContent>
          <Box width={1}>
            <Typography variant='h5'>{lang['login.title']}</Typography>
          </Box>
          <FormControl
            initialValue={{
              emailOrCPF: identificationState,
              password: '',
              remember: rememberMe
            }}
            validationSchema={schema}
            onSubmit={submit}
          >
            {({
              values: { emailOrCPF, password, remember },
              errors,
              handleChange
            }) => {
              return (
                <>
                  <Box width={1} mt='50px'>
                    <TextField
                      id='emailOrCPF'
                      placeholder={lang['login.emailField']}
                      name='emailOrCPF'
                      value={emailOrCPF}
                      onChange={handleChange}
                      error={Boolean(errors.emailOrCPF)}
                      helperText={errors.emailOrCPF}
                    />
                  </Box>
                  <Box width={1} mt='20px'>
                    <TextField
                      id='password'
                      type={showPassword ? 'text' : 'password'}
                      placeholder={lang['login.passwordField']}
                      name='password'
                      value={password}
                      onChange={handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton onClick={toggleShowPassword}>
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                      error={Boolean(errors.password)}
                      helperText={errors.password}
                    />
                  </Box>
                  <Box
                    width={1}
                    mt='20px'
                    justifyContent='center'
                    display='flex'
                  >
                    <Button type='submit' color='primary' variant='contained'>
                      {lang['login.submit']}
                    </Button>
                  </Box>
                  <Box width={1} mt='20px' display='flex'>
                    <Box display='flex' width={1 / 2}>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={rememberMe}
                            name='remember'
                            color='primary'
                            value={remember}
                            onChange={toggleRememberMe(handleChange)}
                          />
                        }
                        label={lang['login.remember']}
                      />
                    </Box>
                    <Box display='flex' width={1 / 2} justifyContent='flex-end'>
                      <Button color='primary' onClick={goToRecovery}>
                        {lang['login.forgot']}
                      </Button>
                    </Box>
                  </Box>
                </>
              )
            }}
          </FormControl>
        </CardContent>
      </Card>
    </Box>
  )
}

export { LoginForm }
