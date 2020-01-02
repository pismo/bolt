import * as React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles, Theme } from '@material-ui/core/styles'

import { Avatar } from './Avatar'

const useStyles = makeStyles((theme: Theme) => {
  const extra: any = (theme.palette as any).extra
  return {
    appBar: {
      backgroundColor: extra ? extra.background.special : null
    }
  }
})

const ApplicationToolbar: React.FC = () => {
  const classes = useStyles()
  return (
    <AppBar position='relative' className={classes.appBar}>
      <Toolbar>
        <Avatar>Abraão Bueno</Avatar>
      </Toolbar>
    </AppBar>
  )
}

export { ApplicationToolbar }
