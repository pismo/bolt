import * as React from 'react'

import Box from '@material-ui/core/Box'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Fab from '@material-ui/core/Fab'

import CloseIcon from '@material-ui/icons/Close'

import {
  PismoBarProps,
  ApplicationsType,
  maxWidth
} from './components/interfaces'
import { ApplicationToolbar } from './components/ApplicationToolbar'
import { ApplicationButton } from './components/ApplicationButton'

import { Context } from '@pismo/bolt-core'

const { Fragment, useState } = React

const applications: ApplicationsType = {
  marketplace: {
    name: 'Marketplace',
    url: ''
  },
  adjustments: {
    name: 'Adjustments',
    url: ''
  },
  customer: {
    name: 'Customer',
    url: ''
  },
  backoffice: {
    name: 'Backoffice',
    url: ''
  },
  webpos: {
    name: 'WebPOS',
    url: ''
  }
}

const useStyles = makeStyles((theme: any) => {
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
      color: colors.text['50'],
      boxShadow: 'unset'
    },
    appButtonContainer: {
      padding: '10px',
      height: 'calc(100vh - 44px)'
    },

    closeButton: {
      minHeight: '0px',
      width: '36px',
      height: '36px',
      '&:hover': {
        backgroundColor: colors.background['60']
      },
      '& svg': {
        color: '#fff'
      }
    },
    darken: {
      backgroundColor: theme.palette.colors.background['0']
    },
    lighten: {
      backgroundColor: theme.palette.colors.background['100']
    }
  }
})

const PismoBar: React.FC<PismoBarProps> = ({
  AppBarProps,
  ToolbarProps,
  current,
  appSelected,
  contract,
  full,
  statusApp = false,
  onClick
}: PismoBarProps) => {
  const classes = useStyles({})
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down('xs'))

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [countClick, setCountClick] = useState<number>(0)

  const toOpen = () => {
    if (onClick && countClick === 0) {
      setCountClick(1)
      onClick()
    } else {
      setCountClick(0)
      setIsOpen(true)
    }
  }

  const toClose = () => {
    setIsOpen(false)
  }

  const appSelectedHandler = ({ url }) => {
    if (appSelected) {
      appSelected({ url })
    }
  }

  const { currentTheme } = React.useContext(Context)

  return (
    <Fragment>
      <ApplicationToolbar
        applications={applications}
        AppBarProps={AppBarProps}
        ToolbarProps={ToolbarProps}
        current={current}
        onClick={toOpen}
        contract={contract}
        app={statusApp}
        full={full}
      />
      <Drawer
        className={`Bolt-PismoBar-drawer`}
        classes={{ root: classes.drawer, paper: `${classes.drawerPaper}` }}
        anchor={matches || contract ? 'left' : 'top'}
        open={isOpen}
        onClose={toClose}
        ModalProps={{ hideBackdrop: true }}
        data-testid='drawer'
      >
        <Box
          textAlign='center'
          py='15px'
          className={
            currentTheme === 'clean' ? classes.darken : classes.lighten
          }
        >
          <Fab
            variant='round'
            color='secondary'
            className={classes.closeButton}
            onClick={toClose}
          >
            <CloseIcon />
          </Fab>
        </Box>
        <Box
          className={`${classes.appButtonContainer} ${
            currentTheme === 'clean' ? classes.darken : classes.lighten
          } Bolt-PismoBar-appButtonContainer`}
        >
          <Grid container spacing={2}>
            {Object.keys(applications).map((k, index) => (
              <ApplicationButton
                data={applications[k]}
                isSelected={k === current}
                key={`${k}-${index}`}
                onClick={appSelectedHandler}
              />
            ))}
          </Grid>
        </Box>

        <Box>
          <ApplicationToolbar
            applications={applications}
            AppBarProps={AppBarProps}
            ToolbarProps={ToolbarProps}
            current={current}
            onClick={toClose}
            full
          />
        </Box>
      </Drawer>
    </Fragment>
  )
}

export { PismoBar }
