import * as React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { makeStyles, Theme } from '@material-ui/core/styles'

import { MenuIcon } from '@pismo/bolt-core'
import { ApplicationToolbarProps, maxWidth } from './interfaces'

const useStyles = makeStyles((theme: Theme) => {
  const { extra } = theme.palette as any
  return {
    bar: {
      maxWidth,
      backgroundColor: extra['background'].special
    },
    title: {
      '&>span': {
        fontWeight: 'bold'
      }
    }
  }
})

const ApplicationToolbar: React.FC<ApplicationToolbarProps> = ({
  AppBarProps,
  ToolbarProps,
  current,
  onClick,
  applications
}: ApplicationToolbarProps) => {
  const classes = useStyles()

  return (
    <AppBar className={classes.bar} {...AppBarProps}>
      <Toolbar {...ToolbarProps}>
        <IconButton onClick={onClick}>
          <MenuIcon />
        </IconButton>
        <Box ml='5px'>
          <Typography className={classes.title} variant='body1'>
            Pismo<span>{applications[current].name}</span>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export { ApplicationToolbar }
