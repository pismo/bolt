import * as React from 'react'
import * as set from 'lodash.set'
import * as get from 'lodash.get'
import * as unset from 'lodash.unset'
import { validate, isArray } from 'validate.js'

const { useState } = React

interface IFormControl {
  initialValue: { [key: string]: any }
  validationSchema?: { [key: string]: any }
  onSubmit: (values: { [key: string]: any }) => void
  children: (props: childrenArgs) => JSX.Element
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
  children
}: IFormControl) {
  const [values, setValues] = useState(initialValue)
  const [errors, setErrors] = useState({})

  const handleChange = e => {
    let val = { ...values }
    if (get(errors, e.target.name)) {
      let err = { ...errors }
      unset(err, e.target.name)
      setErrors(err)
    }
    set(val, e.target.name, e.target.value)
    setValues(val)
  }

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
        return
      }
    }

    onSubmit(values)
  }

  return (
    <form onSubmit={handleSubmit}>
      {children({ values, errors, handleChange })}
    </form>
  )
}

export { FormControl }
