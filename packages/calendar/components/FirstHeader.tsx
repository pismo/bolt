import * as React from 'react'

import DateRangeIcon from '@material-ui/icons/DateRange'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'

import { BoltTheme } from '@pismo/bolt-core'
import { TextField } from '@pismo/bolt-text-field'
import { InputProps } from '@material-ui/core'

const useStyles = makeStyles((theme: BoltTheme) => {
  return {
    textField: ({ w }: any) => ({
      width: `${w + 2}ch`,
      cursor: 'pointer',
      color: theme.palette.colors.background['50'],
      fontWeight: 'normal',
      fontStyle: 'italic',
      fontSize: '1rem',
      '&.Mui-disabled': {
        color: theme.palette.colors.background['50']
      },
      paddingRight: 0
    })
  }
})

export interface FirstHeaderProps {
  value: string
  InputProps?: InputProps
  onClick?: () => void
  innerRef: any
  label?: string
}

const FirstHeader: React.FC<FirstHeaderProps> = ({
  value = '',
  InputProps,
  onClick,
  innerRef,
  label
}) => {
  const classes = useStyles({ w: value.replace(/\s/g, '').length })

  return (
    <TextField
      label={label}
      value={value}
      InputProps={{
        classes: { input: classes.textField },
        startAdornment: (
          <InputAdornment position='start'>
            <IconButton>
              <DateRangeIcon />
            </IconButton>
          </InputAdornment>
        ),
        ...InputProps,
        inputRef: innerRef,
        inputProps: {
          'data-testid': 'FirstHeader-input'
        }
      }}
      disabled
      onClick={onClick}
    />
  )
}

export { FirstHeader }
