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

  const intergerValue = (item: any, numChange?: boolean) => {
    if (onChange) onChange(item / 100)
    setValue(format(item, numChange))
  }

  useEffect(() => {
    const valueInit = hiddenDecimal ? Math.round(initialValue) : initialValue
    if (maxInteger >= 0.1 && valueInit > maxInteger) {
      intergerValue(maxInteger, true)
      return
    }

    if (minInteger >= 0.1 && minInteger > valueInit) {
      intergerValue(minInteger, true)
      return
    }

    setValue(format(valueInit, true))
  }, [])

  const changeValue = e => {
    let v = e.target.value,
      integerMax = maxInteger * 100,
      integerMin = minInteger * 100,
      validNumber

    v = v.replace(/[^\d\,\.]/g, '')

    const v_clear = v.replace(/\D/g, '')

    if (!hiddenDecimal) {
      v =
        v_clear.slice(0, v_clear.length - 2) +
        '.' +
        v_clear.slice(v_clear.length - 2)
    }

    validNumber = v.split('.')[0] === '' ? Number(v) : v

    if (integerMax > 0.0 && validNumber > integerMax) {
      intergerValue(integerMax)
      return
    }

    if (integerMin > 0.0 && validNumber < integerMin) {
      intergerValue(Number(integerMin))
      return
    }

    if (onChange) onChange(validNumber / 100)

    setValue(format(validNumber, false, e))
  }

  function format (num: number, numInit?: boolean, changeEvent?: any) {
    let _percent = '%',
      literal

    if (numInit) {
      literal = hiddenDecimal ? (num * 100).toFixed() : (num * 100).toFixed(2)
    } else {
      literal = num
    }

    if (toggleScore && !hiddenDecimal) {
      return literal.toString().replace('.', ',') + _percent
    }

    if (!numInit) {
      changeEvent.target.setSelectionRange(literal.length, literal.length)
    }

    return literal + _percent
  }

  return <TextField {...TextfieldProps} value={value} onChange={changeValue} />
}

export { PercentInput }
