import * as React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import ArrowBack from '@material-ui/icons/ArrowBack'

import { FormControl } from '@pismo/bolt-form-control'
import { TextField } from '@pismo/bolt-text-field'

import { getTranslation } from './getTranslation'

const lang = getTranslation()

interface RecoveryFormProps {
  auth: any
  goToLogin(): void
  goToRecoverySuccess(email: string): void
  setErrorMessage(message: string): void
  setMessageOpen(val: boolean): void
}

const RecoveryForm: React.FC<RecoveryFormProps> = ({
  auth,
  goToLogin,
  goToRecoverySuccess,
  setErrorMessage,
  setMessageOpen
}: RecoveryFormProps) => {
  const schema: any = {
    emailOrCPF: {
      email: {
        message: lang['login.invalidEmail']
      }
    }
  }

  const submit = async ({ emailOrCPF }) => {
    try {
      await auth.recoverPassword(emailOrCPF)
    } catch (err) {
      setErrorMessage(lang['recoveryForm.error'])
      setMessageOpen(true)
      return
    }

    goToRecoverySuccess(emailOrCPF)
  }
  return (
    <Box maxWidth='436px'>
      <Card>
        <CardContent>
          <Box width={1}>
            <Typography variant='h5'>{lang['recoveryForm.title']}</Typography>
          </Box>
          <FormControl
            initialValue={{ emailOrCPF: '' }}
            validationSchema={schema}
            onSubmit={submit}
          >
            {({ values: { emailOrCPF }, errors, handleChange }) => {
              return (
                <>
                  <Box width={1} mt='50px'>
                    <TextField
                      placeholder={lang['recoveryForm.emailField']}
                      name='emailOrCPF'
                      value={emailOrCPF}
                      onChange={handleChange}
                      error={Boolean(errors.emailOrCPF)}
                      helperText={errors.emailOrCPF}
                    />
                  </Box>
                  <Box
                    width={1}
                    mt='20px'
                    justifyContent='center'
                    display='flex'
                  >
                    <Button type='submit' color='primary' variant='contained'>
                      {lang['recoveryForm.send']}
                    </Button>
                  </Box>
                  <Box width={1} mt='20px' display='flex'>
                    <Button color='primary' onClick={goToLogin}>
                      <ArrowBack />
                      {lang['recoveryForm.remembered']}
                    </Button>
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

export { RecoveryForm }
