import {
  cleanup,
  render,
  getByText,
  wait,
  fireEvent
} from '@testing-library/react'
import 'jest-dom/extend-expect'
import * as React from 'react'

import { TextField } from '@pismo/bolt-text-field'
import Button from '@material-ui/core/Button'
import { FormControl } from '../FormControl'

afterEach(cleanup)

describe('@pismo/bolt-form-control', () => {
  test('it should display the components correctly inside the FormControl', () => {
    const { container } = render(
      <FormControl initialValue={{ name: 'teste' }} onSubmit={() => {}}>
        {({ values: { name } }) => (
          <React.Fragment>
            <TextField name='name' value={name} />
            <Button>submit</Button>
          </React.Fragment>
        )}
      </FormControl>
    )

    const input = container.getElementsByTagName('input')[0]
    const submit = getByText(container, 'submit')

    expect(input).toHaveValue('teste')
    expect(submit).toBeDefined()
  })

  test('it should return the error correctly', () => {
    const checkError = jest.fn(errors => errors.name)

    const schema = {
      name: {
        presence: {
          allowEmpty: false,
          message: 'Faltou o nome'
        }
      }
    }

    const { container } = render(
      <FormControl
        initialValue={{ name: '' }}
        validationSchema={schema}
        onSubmit={() => {}}
      >
        {({ values: { name }, errors }) => {
          checkError(errors)
          return (
            <React.Fragment>
              <TextField
                name='name'
                value={name}
                error={Boolean(errors.name)}
              />
              <Button type='submit'>submit</Button>
            </React.Fragment>
          )
        }}
      </FormControl>
    )

    const submit = getByText(container, 'submit')

    fireEvent.submit(submit)
    wait(() => true, { timeout: 1000 }).then(() => {
      expect(checkError).toHaveReturnedWith('Faltou o nome')
    })
  })

  test('it should call the onSubmit', () => {
    const onsubmit = jest.fn(values => values.name)

    const schema = {
      name: {
        presence: {
          allowEmpty: false,
          message: 'Faltou o nome'
        }
      }
    }

    const { container } = render(
      <FormControl
        initialValue={{ name: 'teste' }}
        validationSchema={schema}
        onSubmit={onsubmit}
      >
        {({ values: { name } }) => {
          return (
            <React.Fragment>
              <TextField name='name' value={name} />
              <Button>submit</Button>
            </React.Fragment>
          )
        }}
      </FormControl>
    )

    const submit = getByText(container, 'submit')

    fireEvent.submit(submit)
    wait(() => true, { timeout: 1000 }).then(() => {
      expect(onsubmit).toBeCalledTimes(1)
      expect(onsubmit).toHaveReturnedWith('teste')
    })
  })
})
