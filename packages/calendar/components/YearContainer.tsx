import * as React from 'react'

import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'

import PerfectScrollbar from 'react-perfect-scrollbar'

import { BoltTheme } from '@pismo/bolt-core'

const { useRef, useEffect } = React

const useStyles = makeStyles((theme: BoltTheme) => {
  const colors = theme.palette.colors
  return {
    '@global': {
      '.ps': {
        overflow: 'hidden !important',
        overflowAnchor: 'none',
        '-ms-overflow-style': 'none',
        touchAction: 'auto',
        '-ms-touch-action': 'auto'
      },
      '.ps__rail-x': { display: 'none' },
      '.ps__rail-y': {
        display: 'none',
        opacity: 0,
        transition: 'background-color .2s linear, opacity .2s linear',
        '-webkit-transition': 'background-color .2s linear, opacity .2s linear',
        width: '15px',
        right: 0,
        position: 'absolute'
      },
      '.ps--active-x > .ps__rail-x,.ps--active-y > .ps__rail-y': {
        display: 'block',
        backgroundColor: 'transparent'
      },
      '.ps:hover > .ps__rail-x,.ps:hover > .ps__rail-y,.ps--focus > .ps__rail-x,.ps--focus > .ps__rail-y,.ps--scrolling-x > .ps__rail-x,.ps--scrolling-y > .ps__rail-y': {
        opacity: 0.6
      },
      '.ps .ps__rail-x:hover,.ps .ps__rail-y:hover,.ps .ps__rail-x:focus,.ps .ps__rail-y:focus,.ps .ps__rail-x.ps--clicking,.ps .ps__rail-y.ps--clicking': {
        backgroundColor: '#eee',
        opacity: 0.9
      },

      '.ps__thumb-y': {
        backgroundColor: '#aaa',
        borderRadius: '6px',
        transition: 'background-color .2s linear, width .2s ease-in-out',
        '-webkit-transition':
          'background-color .2s linear, width .2s ease-in-out',
        width: '6px',
        right: '2px',
        position: 'absolute'
      },

      '.ps__rail-y:hover > .ps__thumb-y,.ps__rail-y:focus > .ps__thumb-y,.ps__rail-y.ps--clicking .ps__thumb-y': {
        backgroundColor: '#999',
        width: '11px'
      },

      '.scrollbar-container': {
        position: 'relative',
        height: '100%'
      }
    },
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
    }
  }
})

export interface YearContainerProps {
  yearList: { [key: string]: string }
  currentYear: number
  onChange?: (year: number) => void
}

const YearContainer: React.FC<YearContainerProps> = ({
  yearList,
  currentYear,
  onChange
}: YearContainerProps) => {
  const classes = useStyles()

  const scroll = useRef<any>()

  useEffect(() => {
    if (scroll.current) {
      const ps = scroll.current

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

      ps._container.scrollTop = selected.offsetTop - _ref.clientHeight * 2
    }
  }, [scroll.current, currentYear])

  const clicked = (year: string) => () => {
    if (onChange) onChange(Number(year))
  }

  return (
    <Box className={classes.container} display='flex' width={1} height='300px'>
      <List className={classes.nav} component='nav'>
        <PerfectScrollbar ref={scroll}>
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
        </PerfectScrollbar>
      </List>
    </Box>
  )
}

export { YearContainer }
