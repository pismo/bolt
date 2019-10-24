import * as React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import ArrowBack from '@material-ui/icons/ArrowBack'

import { getTranslation } from './getTranslation'

const lang = getTranslation()

interface RecoverySuccessProps {
  email: string
  goToLogin(): void
}

const RecoverySuccess: React.FC<RecoverySuccessProps> = ({
  email,
  goToLogin
}: RecoverySuccessProps) => {
  return (
    <Box maxWidth='436px'>
      <Card>
        <CardContent>
          <Box width={1}>
            <Typography variant='h5'>
              {`${lang['recoverySuccess.title']} ${email}`}
            </Typography>
          </Box>
          <Box width={1} mt='20px' display='flex'>
            <Button color='primary' onClick={goToLogin}>
              <ArrowBack />
              {lang['recoverySuccess.back']}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export { RecoverySuccess }
