import * as React from 'react'

import { StandardTextFieldProps } from '@material-ui/core/TextField'

import { TextField } from '@pismo/bolt-text-field'
import { CurrencyCode } from '@pismo/bolt-world-format'

const { useEffect, useState } = React

const translation = {
  en: 'en-US',
  es: 'es-ES',
  pt: 'pt-BR'
}

export type Translation = 'en' | 'pt' | 'es'

export interface CurrencyInputProps {
  currency?: CurrencyCode
  lang?: Translation
  initialValue?: number
  onChange?: (value: number) => void
  TextfieldProps?: StandardTextFieldProps
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  onChange,
  lang = 'en',
  currency = CurrencyCode.US,
  initialValue = 0,
  TextfieldProps
}: any) => {
  const [value, setValue] = useState('')
  const [init, setInit] = useState(false)
  const [decimal, setDecimal] = useState('.')

  useEffect(() => {
    setValue(format(initialValue))
    setInit(true)
  }, [])

  useEffect(() => {
    let _dec
    new Intl.NumberFormat(translation[lang], { currency, style: 'currency' })
      .formatToParts(1000.1)
      .some(p => {
        if (p.type === 'decimal') {
          _dec = p.value
          return true
        }
        return false
      })

    setDecimal(_dec)
  }, [lang, currency])

  useEffect(() => {
    if (init) changeValue({ target: { value } })
  }, [decimal, value, init, lang, currency])

  const changeValue = e => {
    let v = e.target.value

    v = v.replace(/[^\d\,\.]/g, '')

    const match = v.indexOf(decimal)
    const v_clear = v.replace(/\D/g, '')
    if (match > -1) {
      v =
        v_clear.slice(0, v_clear.length - 2) +
        '.' +
        v_clear.slice(v_clear.length - 2)
    } else {
      v = v_clear
    }

    const num = Number(v)

    if (onChange) onChange(num)

    setValue(format(num))
  }

  const focusHandler = e => {
    cursorToRight(e.target)
  }

  function format (num: number) {
    let literal = '',
      _currency
    const num_str = new Intl.NumberFormat(translation[lang], {
      style: 'currency',
      currency
    })
      .formatToParts(num)
      .map(p => {
        switch (p.type) {
          case 'literal':
            literal = p.value
            break
          case 'currency':
            _currency = p.value
            break
          default:
            return p.value
        }
      })
      .join('')

    return _currency + literal + num_str
  }

  function cursorToRight (target) {
    if (target.createTextRange) {
      const range = target.createTextRange()
      range.move('character', target.value.length)
      range.select()
    } else if (
      target.selectionStart !== null ||
      target.selectionStart !== undefined
    ) {
      target.focus()
      target.setSelectionRange(target.value.length, target.value.length)

      setTimeout(
        () =>
          (target.selectionStart = target.selectionEnd = target.value.length),
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

export { CurrencyInput }
