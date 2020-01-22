import * as React from 'react'
import MuiTextField, {
  StandardTextFieldProps
} from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

import * as InputMask from 'inputmask'

const { useRef, useEffect } = React
interface Props extends StandardTextFieldProps {
  mask?: boolean
  maskOptions?: any
  disablecheck?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const useStyle = makeStyles(() => {
  return {
    check: {
      '&>.Mui-selected': {
        '&:after': {
          content: '""',
          background:
            "url(\"data:image/svg+xml;utf8,<svg width='18' height='14' viewBox='0 0 18 14' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.59 10.875L1.42 6.70498L0 8.11498L5.59 13.705L17.59 1.70498L16.18 0.294983L5.59 10.875Z' fill='white'/></svg>\")  no-repeat;",
          backgroundSize: 'contain',
          width: '20px',
          height: '20px',
          marginLeft: 'auto'
        }
      }
    }
  }
})

function TextField (props: Props) {
  const classes = useStyle({})
  const inputRef = useRef()
  let _props: Props = { ...props }

  delete _props.onChange
  delete _props.mask
  delete _props.maskOptions

  useEffect(() => {
    if (props.mask && !props.select) {
      InputMask(props.maskOptions).mask(inputRef.current)
    }
  }, [inputRef.current, props.maskOptions])

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      if (props.mask) {
        let val: string = e.target['inputmask'].unmaskedvalue()
        props.onChange({
          ...e,
          target: { ...e.target, name: e.target.name, value: val }
        })
      } else {
        props.onChange(e)
      }
    }
  }

  return (
    <MuiTextField
      SelectProps={{
        MenuProps: {
          classes: {
            list:
              _props.select && !Boolean(_props.disablecheck)
                ? classes.check
                : ''
          },
          getContentAnchorEl: null,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center'
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'center'
          }
        }
      }}
      {..._props}
      InputLabelProps={{ shrink: true }}
      InputProps={{ disableUnderline: true, inputRef, ..._props.InputProps }}
      onChange={changeValue}
    />
  )
}

export { TextField }
