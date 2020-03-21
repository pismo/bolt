import * as React from 'React'

import Box from '@material-ui/core/Box'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import { BoltTheme } from '@pismo/bolt-core'

const useStyles = makeStyles((theme: BoltTheme) => {
  const colors = theme.palette.colors
  return {
    button: {
      width: '100%',
      padding: '20px 0px',
      '&:hover': {
        backgroundColor: colors.background['10']
      },
      zIndex: 0
    },
    text: {
      fontWeight: 'bold'
    },
    selected: {
      boxShadow: theme.shadows[4],
      zIndex: 1,
      '&:hover': {
        backgroundColor: '#fff'
      }
    }
  }
})

export interface MonthContainerProps {
  monthList: string[]
  currentMonth: number
  onChange?: (selected: number) => void
}

const MonthContainer: React.FC<MonthContainerProps> = ({
  monthList,
  currentMonth,
  onChange
}: MonthContainerProps) => {
  const classes = useStyles()

  const clicked = (selected: number) => () => {
    if (onChange) onChange(selected)
  }

  return (
    <Box width={1} display='flex' flexWrap='wrap' p='10px'>
      {monthList.map((el, index) => (
        <Box
          key={`${el}-${index}`}
          width={1 / 4}
          display='flex'
          justifyContent='center'
        >
          <ButtonBase
            onClick={clicked(index)}
            className={`${classes.button} ${
              currentMonth === index ? classes.selected : ''
            }`}
          >
            <Typography variant='h5'>{el.substr(0, 3)}</Typography>
          </ButtonBase>
        </Box>
      ))}
    </Box>
  )
}

export { MonthContainer }
