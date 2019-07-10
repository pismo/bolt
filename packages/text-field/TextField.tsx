import * as React from 'react'
import MuiTextField from '@material-ui/core/TextField'

function TextField () {
  return (
    <MuiTextField
      label='Error'
      error
      helperText='teste 123'
      InputLabelProps={{ shrink: true }}
      InputProps={{ disableUnderline: true }}
    />
  )
}

export { TextField }
