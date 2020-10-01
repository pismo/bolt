import * as React from 'react'

import { StandardTextFieldProps } from '@material-ui/core/TextField'

import { TextField } from '@pismo/bolt-text-field'

const { useEffect, useState } = React

export interface PercentageInputProps {
  initialValue?: number
  maxInteger?: number
  minInteger?: number
  toggleScore?: boolean
  hiddenDecimal?: boolean
  onChange?: (value: number) => void
  TextfieldProps?: StandardTextFieldProps
}

const PercentInput: React.FC<PercentageInputProps> = ({
  onChange,
  initialValue = 0,
  TextfieldProps,
  maxInteger = 0,
  minInteger = 0,
  toggleScore = false,
  hiddenDecimal = false
}: any) => {
  const [value, setValue] = useState(initialValue)
  const integerMax = maxInteger * 100
  const integerMin = minInteger * 100

  const intergerValue = (item: any) => {
    if (onChange) onChange(item / 100)
    setValue(format(item))
  }

  useEffect(() => {
    const valueInit = initialValue * 100

    if (integerMax > 0.0 && valueInit > integerMax) {
      intergerValue(integerMax)
      return
    }

    if (integerMin > 0.1 && integerMin > valueInit) {
      intergerValue(integerMin)
      return
    }

    setValue(format(valueInit))
  }, [])

  const handleKeyPress = e => {
    if (e.keyCode === 8 && e.target.selectionEnd === e.target.value.length) {
      e.target.setSelectionRange(
        e.target.value.length - 1,
        e.target.value.length - 1
      )
    }
  }

  const changeValue = e => {
    let v = e.target.value,
      validNumber

    v = v.replace(/[^\d\,\.]/g, '')
    const v_clear = v.replace(/\D/g, '')
    const match = toggleScore ? v.indexOf(',') : v.indexOf('.')

    if (match > -1 && !hiddenDecimal) {
      v =
        v_clear.slice(0, v_clear.length - 2) +
        '.' +
        v_clear.slice(v_clear.length - 2)
    } else {
      v = v_clear
    }

    validNumber = Number(v)

    if (integerMax > 0.0 && validNumber > integerMax) {
      intergerValue(integerMax)
      return
    }

    if (integerMin > 0.0 && validNumber < integerMin) {
      intergerValue(Number(integerMin))
      return
    }

    if (onChange) onChange(validNumber / 100)

    setValue(format(validNumber))
  }

  function format (num: number) {
    let _percent = '%',
      literal = hiddenDecimal ? Math.round(num) : num.toFixed(2)

    if (toggleScore && !hiddenDecimal) {
      return num.toFixed(2).replace('.', ',') + _percent
    }

    return literal + _percent
  }

  return (
    <TextField
      {...TextfieldProps}
      value={value}
      onChange={changeValue}
      onKeyDown={handleKeyPress}
    />
  )
}

export { PercentInput }
