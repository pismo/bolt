import * as React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme } from '@material-ui/core/styles'

import { Avatar, AvatarProps } from './Avatar'

const maxWidth = '250px'
const mobileMaxWidth = '68px'

const useStyles = makeStyles((theme: Theme) => {
  const extra: any = (theme.palette as any).extra
  return {
    appBar: {
      width: maxWidth,
      backgroundColor: extra ? extra.background.special : null
    }
  }
})

export interface ApplicationToolbarProps extends AvatarProps {
  email: string
}

const ApplicationToolbar: React.FC<ApplicationToolbarProps> = ({
  name,
  notification,
  src,
  email
}: ApplicationToolbarProps) => {
  const classes = useStyles()
  return (
    <AppBar position='relative' className={classes.appBar}>
      <Toolbar>
        <Avatar name={name} notification={notification} src={src} />
        <Box>
          <Typography variant='body1'>{name}</Typography>
          <Typography variant='body1'>{email}</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export { ApplicationToolbar }
