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

const { useState, useEffect } = React

interface LoginFormProps {
  auth: any
  tokenRefresh: any
  setTokenRefresh(refresher: any): void
  setIsValid(valid: boolean): void
}

const LoginForm: React.FC<LoginFormProps> = ({
  auth,
  tokenRefresh,
  setTokenRefresh,
  setIsValid
}: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [rememberMe, setRememberMe] = useState<boolean>(false)
  const [identificationState, setIdentification] = useState<string>('')

  const schema: any = {
    emailOrCPF: {
      email: {
        message: 'E-mail inválido.'
      }
    },
    password: {
      length: {
        minimum: 6,
        message: 'A senha deve ter no mínimo 6 caracteres'
      }
    }
  }
  console.log(auth)

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
      return auth.resetSession()
    }

    try {
      console.log(tokenRefresh)
      result = await auth.onUpdateProxy(tokenRefresh)

      console.log(result)
    } catch (err) {
      console.log(err)
      return auth.resetSession()
    }

    setTokenRefresh(result)
    return setIsValid(true)
  }

  return (
    <Card>
      <CardContent>
        <Box width={1}>
          <Typography variant='h5'>
            Olá informe seus dados para continuar
          </Typography>
        </Box>
        <FormControl
          initialValue={{ emailOrCPF: '', password: '', remember: false }}
          validationSchema={schema}
          onSubmit={submit}
        >
          {({
            values: { emailOrCPF, password, remember },
            errors,
            handleChange
          }) => {
            console.log(errors)
            return (
              <>
                <Box width={1} mt='50px'>
                  <TextField
                    placeholder='E-mail ou CPF'
                    name='emailOrCPF'
                    value={emailOrCPF}
                    onChange={handleChange}
                    error={Boolean(errors.emailOrCPF)}
                    helperText={errors.emailOrCPF}
                  />
                </Box>
                <Box width={1} mt='20px'>
                  <TextField
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Senha'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton onClick={toggleShowPassword}>
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                    error={Boolean(errors.password)}
                    helperText={errors.password}
                  />
                </Box>
                <Box width={1} mt='20px' justifyContent='center' display='flex'>
                  <Button type='submit' color='primary' variant='contained'>
                    ENTRAR
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
                      label='Lembrar'
                    />
                  </Box>
                  <Box display='flex' width={1 / 2} justifyContent='flex-end'>
                    <Button color='primary'>Esqueceu a senha?</Button>
                  </Box>
                </Box>
              </>
            )
          }}
        </FormControl>
      </CardContent>
    </Card>
  )
}

export { LoginForm }
