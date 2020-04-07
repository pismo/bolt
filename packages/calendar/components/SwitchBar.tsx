import * as React from 'react'

import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

import { BoltTheme } from '@pismo/bolt-core'

const useStyles = makeStyles((theme: BoltTheme) => {
  const colors = theme.palette.colors
  return {
    iconButton: {
      padding: '5px'
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
  onBack?: () => void
  onFoward?: () => void
  onMonth?: () => void
  onYear?: () => void
}

const SwitchBar: React.FC<SwitchBarProps> = ({
  currentMonth,
  currentYear,
  onBack,
  onFoward,
  onMonth,
  onYear
}: SwitchBarProps) => {
  const classes = useStyles()

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
    <Box
      display='flex'
      p='10px'
      justifyContent='space-between'
      alignItems='center'
    >
      <Box>
        <IconButton className={classes.iconButton} onClick={clicked('back')}>
          <ArrowForwardIosIcon className={classes.arrowBack} />
        </IconButton>
      </Box>
      <Box display='flex'>
        <Box mr='15px'>
          <ButtonBase onClick={clicked('month')}>
            <Typography className={classes.text} variant='body1'>
              {currentMonth}
            </Typography>
          </ButtonBase>
        </Box>
        <Box>
          <ButtonBase onClick={clicked('year')}>
            <Typography className={classes.text} variant='body1'>
              {currentYear}
            </Typography>
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
