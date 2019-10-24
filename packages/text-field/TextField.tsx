import * as React from 'react'
import MuiTextField, {
  StandardTextFieldProps
} from '@material-ui/core/TextField'
import * as InputMask from 'inputmask'

const { useRef, useEffect } = React
interface Props extends StandardTextFieldProps {
  mask?: boolean
  maskOptions?: any
  onChange?: (event: {
    target: { value: string; name?: string; id?: string }
  }) => void
}

function TextField (props: Props) {
  const inputRef = useRef()
  let _props: Props = { ...props }

  delete _props.onChange
  delete _props.mask
  delete _props.maskOptions

  useEffect(() => {
    if (props.mask && !props.select) {
      InputMask(props.maskOptions).mask(inputRef.current)
    }
  }, [inputRef.current])

  const changeValue = e => {
    if (props.onChange) {
      if (props.mask) {
        let val: string = e.target.inputmask.unmaskedvalue()
        props.onChange({
          target: { value: val, name: e.target.name, id: e.target.id }
        })
      } else {
        props.onChange(e)
      }
    }
  }

  return (
    <MuiTextField
      {..._props}
      InputLabelProps={{ shrink: true }}
      InputProps={{ disableUnderline: true, inputRef, ..._props.InputProps }}
      onChange={changeValue}
    />
  )
}

export { TextField }
