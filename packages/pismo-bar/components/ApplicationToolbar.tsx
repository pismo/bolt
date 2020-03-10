import * as React from 'react'

import { useSpring, useTransition, animated } from 'react-spring'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'

import MenuIcon from '@material-ui/icons/Apps'
import { PismoMarketplace } from '@pismo/bolt-core'
import { ApplicationToolbarProps, maxWidth, mobileMaxWidth } from './interfaces'

import { BoltTheme } from '@pismo/bolt-core'

const AAppBar = animated(AppBar)
const AToolbar = animated(Toolbar)

const Logo = ({ name, ...props }) => {
  switch (name) {
    case 'marketplace':
      return <PismoMarketplace {...props} />
    default:
      return <PismoMarketplace {...props} />
  }
}

const useStyles = makeStyles((theme: BoltTheme) => {
  const colors = theme.palette.colors
  return {
    bar: {
      backgroundColor: '#fff',
      boxShadow: 'unset',
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
                  justifyContent: 'center',
                  minHeight: '56px'
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
    },
    iconButton: {
      padding: 0
    },
    icon: {
      fontSize: '2.5rem'
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

  const barState = useSpring({
    width: Boolean(contract) ? mobileMaxWidth : maxWidth
  })
  const animatedContent = useTransition(Boolean(contract), null, {
    enter: { opacity: 1 },
    from: { opacity: 0 },
    unique: true,
    reset: true,
    config: { duration: 500 }
  })

  return (
    <AAppBar
      className={`${classes.bar} Bolt-PismoBar-bar`}
      {...AppBarProps}
      style={barState}
    >
      {animatedContent.map(
        ({ item, key, props }) =>
          item === Boolean(contract) && (
            <AToolbar
              key={key}
              className={`${classes.toolbar} Bolt-PismoBar-toolbar`}
              {...ToolbarProps}
              style={props}
            >
              <IconButton
                className={`${classes.iconButton} Bolt-PismoBar-iconButton`}
                onClick={onClick}
                data-testid='mainButton'
              >
                <MenuIcon
                  className={`${classes.icon} Bolt-PismoBar-icon`}
                  data-testid={applications[current].name}
                />
              </IconButton>
              {contract ? null : (
                <Hidden xsDown={full ? false : true}>
                  <Box ml='5px'>
                    {/* <Typography className={classes.title} variant='body1'>
                      Pismo<span>{applications[current].name}</span>
                    </Typography> */}
                    <Logo
                      name={applications[current].name}
                      style={{ width: '100%', height: '40px' }}
                    />
                  </Box>
                </Hidden>
              )}
            </AToolbar>
          )
      )}
    </AAppBar>
  )
}

export { ApplicationToolbar }
