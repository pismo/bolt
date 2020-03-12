import * as React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'

import { BoltTheme } from '@pismo/bolt-core'

const useStyles = makeStyles((theme: BoltTheme) => {
  return {
    button: {
      width: '100%',
      padding: '15px 0px',
      flexDirection: 'column',
      boxShadow: ({ selected }: any) => (selected ? theme.shadows[4] : 'unset')
    },
    label: {
      color: theme.palette.colors.background['50'],
      marginBottom: '10px'
    },
    date: {
      fontWeight: 'bold'
    }
  }
})

export interface RangeBarButtonProps {
  label: string
  date: string
  selected?: boolean
  onClick?: () => void
}

const RangeBarButton: React.FC<RangeBarButtonProps> = ({
  label,
  date,
  onClick,
  selected = false
}: RangeBarButtonProps) => {
  const classes = useStyles({ selected })
  return (
    <ButtonBase className={classes.button} onClick={onClick}>
      <Typography className={classes.label} variant='caption'>
        {label}
      </Typography>
      <Typography className={classes.date}>{date}</Typography>
    </ButtonBase>
  )
}

export { RangeBarButton }
