import * as React from 'react'

import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Fab from '@material-ui/core/Fab'
import { makeStyles } from '@material-ui/core/styles'

import Close from '@material-ui/icons/Close'

import { BoltTheme } from '@pismo/bolt-core'

const { useRef, useEffect } = React

const useStyles = makeStyles((theme: BoltTheme) => {
  const colors = theme.palette.colors
  return {
    container: {
      overflowX: 'hidden',
      overflowY: 'auto'
    },
    nav: {
      width: '100%'
    },
    textAlign: {
      textAlign: 'center'
    },
    selected: {
      color: colors.main['50'],
      fontSize: '1.5rem'
    },
    close: {
      minWidth: 0,
      minHeight: 0,
      width: '24px',
      height: '24px'
    }
  }
})

export interface YearContainerProps {
  yearList: { [key: string]: string }
  currentYear: number
  onChange?: (year: number) => void
  onClose?: () => void
}

const YearContainer: React.FC<YearContainerProps> = ({
  yearList,
  currentYear,
  onChange,
  onClose
}: YearContainerProps) => {
  const classes = useStyles()

  const scroll = useRef<any>()

  useEffect(() => {
    const el = document.querySelector('#pismo-bolt-calendar-year-list')
    if (el) {
      const selected = document.getElementById(
        `Bolt-Calendar-YearContainer-${currentYear}`
      )
      const _ref =
        document.getElementById(
          `Bolt-Calendar-YearContainer-${currentYear + 1}`
        ) ||
        document.getElementById(
          `Bolt-Calendar-YearContainer-${currentYear - 1}`
        )
      el.parentElement.scroll(0, selected.offsetTop - _ref.clientHeight * 2)
    }
  }, [scroll.current, currentYear])

  const clicked = (year: string) => () => {
    if (onChange) onChange(Number(year))
  }
  const handleClose = () => {
    if (onClose) onClose()
  }

  return (
    <>
      <Box
        py='5px'
        px='10px'
        width={1}
        display='flex'
        justifyContent='flex-end'
      >
        <Fab
          variant='round'
          size='small'
          className={classes.close}
          onClick={handleClose}
        >
          <Close />
        </Fab>
      </Box>
      <Box
        className={classes.container}
        display='flex'
        width={1}
        height='300px'
      >
        <List
          id='pismo-bolt-calendar-year-list'
          className={classes.nav}
          component='nav'
        >
          {Object.keys(yearList).map((el, index) => (
            <ListItem
              onClick={clicked(el)}
              key={`${el}-${index}`}
              button
              id={`Bolt-Calendar-YearContainer-${el}`}
            >
              <ListItemText
                classes={{
                  primary: `${classes.textAlign} ${
                    Number(el) === currentYear ? classes.selected : ''
                  }`
                }}
                primary={el}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  )
}

export { YearContainer }
