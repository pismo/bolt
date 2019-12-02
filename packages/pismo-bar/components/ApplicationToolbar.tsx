import * as React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'

import { MenuIcon } from '@pismo/bolt-core'
import { ApplicationToolbarProps, maxWidth, mobileMaxWidth } from './interfaces'

const useStyles = makeStyles((theme: Theme) => {
  const { extra } = theme.palette as any
  return {
    bar: {
      maxWidth: ({ contract }: any) => (contract ? mobileMaxWidth : maxWidth),
      backgroundColor: extra ? extra['background'].special : 'transparent',
      [theme.breakpoints.down('xs')]: {
        maxWidth: ({ full }: any) => (!full ? mobileMaxWidth : maxWidth)
      }
    },
    toolbar: ({ full, contract }: any) =>
      !full
        ? {
            ...(contract
              ? {
                  padding: 0,
                  justifyContent: 'center'
                }
              : {}),
            [theme.breakpoints.down('xs')]: {
              padding: 0,
              justifyContent: 'center'
            }
          }
        : {},
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
  applications,
  full,
  contract
}: ApplicationToolbarProps) => {
  const classes = useStyles({ full, contract })

  return (
    <AppBar className={classes.bar} {...AppBarProps}>
      <Toolbar className={classes.toolbar} {...ToolbarProps}>
        <IconButton onClick={onClick} data-testid='mainButton'>
          <MenuIcon data-testid={applications[current].name} />
        </IconButton>
        {contract ? null : (
          <Hidden xsDown={full ? false : true}>
            <Box ml='5px'>
              <Typography className={classes.title} variant='body1'>
                Pismo<span>{applications[current].name}</span>
              </Typography>
            </Box>
          </Hidden>
        )}
      </Toolbar>
    </AppBar>
  )
}

export { ApplicationToolbar }
