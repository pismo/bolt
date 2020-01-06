import * as React from 'react'

import Drawer from '@material-ui/core/Drawer'
import { makeStyles, Theme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Box from '@material-ui/core/Box'

import {
  ApplicationToolbar,
  maxWidth,
  ApplicationToolbarProps
} from './components/ApplicationToolbar'

const { Fragment, useState } = React

const useStyles = makeStyles((theme: Theme) => {
  const extra = (theme.palette as any).extra
  return {
    drawer: {
      maxWidth,
      height: '100vh'
    },
    drawerPaper: {
      maxWidth,
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: extra ? extra['background'].main : 'transparent',
      color: extra
        ? theme.palette.getContrastText(extra['background'].special)
        : '#fff'
    }
  }
})

interface PismoUserBarProps extends ApplicationToolbarProps {
  children?: React.ReactNode
}

const PismoUserBar: React.FC<PismoUserBarProps> = ({
  contract,
  children,
  ...toolbarProps
}: PismoUserBarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const classes = useStyles({})
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down('xs'))

  const toOpen = () => {
    setIsOpen(!isOpen)
  }

  const toClose = () => {}

  return (
    <Fragment>
      <ApplicationToolbar
        {...toolbarProps}
        contract={contract}
        onClick={toOpen}
      />
      <Drawer
        classes={{ root: classes.drawer, paper: `${classes.drawerPaper}` }}
        anchor={matches || contract ? 'left' : 'bottom'}
        open={isOpen}
        onClose={toClose}
        ModalProps={{ hideBackdrop: true }}
        data-testid='drawer'
      >
        <ApplicationToolbar {...toolbarProps} onClick={toOpen} full />
        <Box
          mt='15px'
          width={1}
          display='flex'
          flexDirection='column'
          height={1}
        >
          {children}
        </Box>
      </Drawer>
    </Fragment>
  )
}

export { PismoUserBar }