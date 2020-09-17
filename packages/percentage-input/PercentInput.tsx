import * as React from 'react'

import { StandardTextFieldProps } from '@material-ui/core/TextField'

import { TextField } from '@pismo/bolt-text-field'

const { useEffect, useState } = React

const translation = {
  en: 'en-US',
  es: 'es-ES',
  pt: 'pt-BR'
}

export type Translation = 'en' | 'pt' | 'es'

export interface PercentageInputProps {
  lang?: Translation
  initialValue?: number
  maxInteger?: number
  minInteger?: number
  useGroup?: boolean
  toggleScore?: boolean
  onChange?: (value: number) => void
  TextfieldProps?: StandardTextFieldProps
}

const PercentInput: React.FC<PercentageInputProps> = ({
  onChange,
  lang = 'en',
  initialValue = 0,
  TextfieldProps,
  maxInteger = 0,
  minInteger = 0,
  useGroup = false,
  toggleScore = false
}: any) => {
  const [value, setValue] = useState(initialValue)

  const intergerValue = item => {
    if (onChange) onChange(item)
    setValue(format(item, true))
  }

  useEffect(() => {
    if (maxInteger >= 1 && initialValue > maxInteger) {
      intergerValue(maxInteger)
      return
    }

    if (minInteger >= 1 && initialValue < minInteger) {
      intergerValue(minInteger)
      return
    }

    setValue(format(value, false))
  }, [])

  const changeValue = e => {
    let v = e.target.value
    v = v.replace(/[^\d\,\.]/g, '')

    const v_clear = v.replace(/\D/g, '')
    v =
      v_clear.slice(0, v_clear.length - 2) +
      '.' +
      v_clear.slice(v_clear.length - 2)

    if (maxInteger >= 1 && v > maxInteger) {
      intergerValue(maxInteger)
      return
    }

    if (minInteger >= 1 && v < minInteger) {
      intergerValue(minInteger)
      return
    }

    if (onChange) onChange(v)
    setValue(format(v, true))
  }

  const focusHandler = e => {
    cursorToRight(e.target)
  }

  function format (num: number, numChange?: boolean) {
    let _percent, num_str, literal

    literal = numChange ? num / 100 : num

    num_str = new Intl.NumberFormat(translation[lang], {
      style: 'percent',
      minimumFractionDigits: 2,
      minimumIntegerDigits: 1,
      useGrouping: useGroup
    })
      .formatToParts(literal)
      .map(p => {
        switch (p.type) {
          case 'percentSign':
            _percent = p.value
            break
          default:
            return p.value
        }
      })
      .join('')

    if (toggleScore && !useGroup) {
      return num_str.replace(',', '.') + _percent
    }

    return num_str + _percent
  }

  function cursorToRight (target) {
    if (target.createTextRange) {
      const range = target.createTextRange()
      range.move('character', target.value.length - 1)
      range.select()
    } else if (
      target.selectionStart !== null ||
      target.selectionStart !== undefined
    ) {
      target.focus()
      target.setSelectionRange(0, target.value.length - 1)
      target.selectionStart = target.selectionEnd = target.value.length - 1

      setTimeout(
        () =>
          (target.selectionStart = target.selectionEnd =
            target.value.length - 1),
        0
      )
    }
  }

  return (
    <TextField
      {...TextfieldProps}
      value={value}
      onChange={changeValue}
      onFocus={focusHandler}
    />
  )
}

export { PercentInput }
