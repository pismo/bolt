import * as React from 'react'

import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Box from '@material-ui/core/Box'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import { BoltTheme, Context } from '@pismo/bolt-core'

import {
  ApplicationToolbar,
  maxWidth,
  ApplicationToolbarProps
} from './components/ApplicationToolbar'

const { Fragment, useState } = React

const useStyles = makeStyles((theme: BoltTheme) => {
  const colors = theme.palette.colors
  return {
    drawer: {
      maxWidth,
      height: '100vh'
    },
    drawerPaper: {
      maxWidth,
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.default,
      color: colors.text['0'],
      boxShadow: 'unset'
    },
    darken: {
      backgroundColor: colors.background['0']
    },
    lighten: {
      backgroundColor: colors.background['100']
    }
  }
})

interface PismoUserBarProps extends ApplicationToolbarProps {
  children?: React.ReactNode
}

const PismoUserBar: React.FC<PismoUserBarProps> = ({
  contract,
  children,
  full,
  ...toolbarProps
}: PismoUserBarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const classes = useStyles({})
  const matches = useMediaQuery((theme: BoltTheme) =>
    theme.breakpoints.down('xs')
  )

  const toOpen = () => {
    setIsOpen(!isOpen)
  }

  const toClose = () => {
    setIsOpen(false)
  }

  const { currentTheme } = React.useContext(Context)

  return (
    <Fragment>
      <ApplicationToolbar
        {...toolbarProps}
        contract={contract}
        full={full}
        onClick={toOpen}
      />
      <Drawer
        classes={{ root: classes.drawer, paper: `${classes.drawerPaper}` }}
        anchor={(matches || contract) && !full ? 'left' : 'bottom'}
        open={isOpen}
        onClose={toClose}
        ModalProps={{ hideBackdrop: true }}
        data-testid='drawer'
      >
        <ClickAwayListener onClickAway={toClose}>
          <Box
            width={1}
            height={1}
            className={
              currentTheme === 'clean' ? classes.darken : classes.lighten
            }
          >
            <ApplicationToolbar
              {...toolbarProps}
              onClick={toOpen}
              full
              fullAnimation
            />
            <Box
              mt='15px'
              width={1}
              display='flex'
              flexDirection='column'
              height={1}
            >
              {children}
            </Box>
          </Box>
        </ClickAwayListener>
      </Drawer>
    </Fragment>
  )
}

export { PismoUserBar }
