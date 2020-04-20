import * as React from 'react'
import * as set from 'lodash.set'
import * as get from 'lodash.get'
import * as unset from 'lodash.unset'
import { validate, isArray } from 'validate.js'

const { useState, useCallback } = React

type InitialValue = {
  [key: string]: any
}

interface IFormControl {
  initialValue: InitialValue
  validationSchema?: { [key: string]: any }
  onSubmit: (values: { [key: string]: any }) => void
  onError?: (errors: { [key: string]: any }) => void
  onChange?: (
    prev: { [key: string]: any },
    values: { [key: string]: any }
  ) => void
  children: (props: childrenArgs) => JSX.Element
  autoComplete?: boolean
}
type childrenArgs = {
  values: { [key: string]: any }
  errors: { [key: string]: any }
  handleChange: (e: any) => void
}

function FormControl ({
  initialValue,
  validationSchema,
  onSubmit,
  children,
  onChange,
  onError,
  autoComplete = true
}: IFormControl) {
  const [values, setValues] = useState<InitialValue>(initialValue)
  const [errors, setErrors] = useState({})

  React.useEffect(() => {
    setValues(initialValue)
  }, [initialValue])

  const handleChange = useCallback((
    evt,
    update?: { [k in keyof InitialValue]?: any }
  ) => {
    const e = { ...evt }
    setValues(_val => {
      let val = { ..._val, ...update }
      if (get(errors, e.target.name)) {
        let err = { ...errors }
        unset(err, e.target.name)
        setErrors(err)
      }
      set(val, e.target.name, e.target.value)
      if (onChange) onChange({ ..._val }, { ...val })

      return val
    })
  }, [values])

  const handleSubmit = e => {
    e.preventDefault()

    if (validationSchema) {
      const val = validate(values, validationSchema, { format: 'detailed' })

      if (isArray(val)) {
        let err = { ...errors }
        val.map(({ attribute, options, error }) => {
          set(err, attribute, options.message ? options.message : error)
        })

        setErrors(err)
        if (onError) onError(err)
        return
      }
    }

    onSubmit(values)
  }

  return (
    <form onSubmit={handleSubmit} autoComplete={autoComplete ? 'on' : 'off'}>
      {children({ values, errors, handleChange })}
    </form>
  )
}

export { FormControl }
