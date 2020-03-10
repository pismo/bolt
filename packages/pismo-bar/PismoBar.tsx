import * as React from 'react'

import Box from '@material-ui/core/Box'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { BoltTheme } from '@pismo/bolt-core'

import {
  PismoBarProps,
  ApplicationsType,
  maxWidth
} from './components/interfaces'
import { ApplicationToolbar } from './components/ApplicationToolbar'
import { ApplicationButton } from './components/ApplicationButton'

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
      backgroundColor: '#fff',
      color: colors.text['50'],
      boxShadow: 'unset'
    },

    appButtonContainer: {
      padding: '10px'
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

  return (
    <Fragment>
      <ApplicationToolbar
        applications={applications}
        AppBarProps={AppBarProps}
        ToolbarProps={ToolbarProps}
        current={current}
        onClick={toOpen}
        contract={contract}
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
        <Grid
          container
          spacing={2}
          className={`${
            classes.appButtonContainer
          } Bolt-PismoBar-appButtonContainer`}
        >
          {Object.keys(applications).map((k, index) => (
            <ApplicationButton
              data={applications[k]}
              isSelected={k === current}
              key={`${k}-${index}`}
              onClick={appSelectedHandler}
            />
          ))}
        </Grid>
        <Box mt='auto'>
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
