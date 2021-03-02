import * as React from 'react'

import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

import { BoltTheme } from '@pismo/bolt-core'

const useStyles = makeStyles((theme: BoltTheme) => {
  const colors = theme.palette.colors
  return {
    container: {
      display: 'flex',
      padding: '0px 10px',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: ({ noRange }: any) =>
        !noRange ? `2px solid ${colors.background['50']}` : 'none'
    },
    iconButton: {
      padding: '5px'
    },
    buttons: {
      display: 'flex',
      alignItems: 'center'
    },
    monthButton: {
      marginRight: '10px',
      paddingRight: '5px',
      borderRight: `1px solid ${colors.background['20']}`
    },
    arrowBack: {
      transform: 'rotate(180deg)'
    },
    text: {
      color: colors.background['50'],
      textAlign: 'center'
    }
  }
})

export interface SwitchBarProps {
  currentMonth: string
  currentYear: string
  currentView: string
  noRange: boolean
  onBack?: () => void
  onFoward?: () => void
  onMonth?: () => void
  onYear?: () => void
}

const SwitchBar: React.FC<SwitchBarProps> = ({
  currentMonth,
  currentYear,
  currentView,
  onBack,
  onFoward,
  onMonth,
  onYear,
  noRange
}: SwitchBarProps) => {
  const classes = useStyles({ noRange })

  const clicked = (name: string) => () => {
    switch (name) {
      case 'back':
        if (onBack) onBack()
        break
      case 'foward':
        if (onFoward) onFoward()
        break
      case 'month':
        if (onMonth) onMonth()
        break
      case 'year':
        if (onYear) onYear()
        break
    }
  }

  return (
    <Box className={classes.container}>
      <Box>
        <IconButton className={classes.iconButton} onClick={clicked('back')}>
          <ArrowForwardIosIcon className={classes.arrowBack} />
        </IconButton>
      </Box>
      <Box display='flex'>
        <Box className={`${classes.buttons} ${classes.monthButton}`}>
          <ButtonBase onClick={clicked('month')}>
            <Typography className={classes.text} variant='body1'>
              {currentMonth}
            </Typography>
            <Box>
              {currentView === 'months' ? <ExpandLess /> : <ExpandMore />}
            </Box>
          </ButtonBase>
        </Box>
        <Box>
          <ButtonBase onClick={clicked('year')}>
            <Typography className={classes.text} variant='body1'>
              {currentYear}
            </Typography>
            <Box>
              {currentView === 'years' ? <ExpandLess /> : <ExpandMore />}
            </Box>
          </ButtonBase>
        </Box>
      </Box>
      <Box>
        <IconButton className={classes.iconButton} onClick={clicked('foward')}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export { SwitchBar }
