import * as React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'

import { BoltTheme } from '@pismo/bolt-core'

const useStyles = makeStyles((theme: BoltTheme) => {
  return {
    button: ({ selected }: any) => {
      const _default = {
        width: '100%',
        padding: '8px 0px',
        flexDirection: 'column',
        position: 'relative',
        borderRadius: '4px 4px 0px 0px',
        '&::after': {
          all: 'unset'
        }
      }

      let sel = {}

      if (selected) {
        sel = {
          border: `2px solid ${theme.palette.colors.background['50']}`,
          borderBottom: 'none',

          '&::after': {
            content: '" "',
            display: 'block',
            width: '100%',
            height: '4px',
            position: 'absolute',
            backgroundColor: theme.palette.background.paper,
            bottom: '-3px'
          }
        }
      }

      return { ..._default, ...sel }
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
