import { cleanup, render, wait, fireEvent } from '@testing-library/react'
import 'jest-dom/extend-expect'
import * as React from 'react'

import { TextField } from '../TextField'

const { useState } = React

afterEach(cleanup)

describe('@pismo/bolt-text-field', () => {
  test('it should display corretly', () => {
    const { getByDisplayValue } = render(<TextField value='testing' />)
    expect(getByDisplayValue('testing')).toBeDefined()
  })

  test('it should properly display the mask', () => {
    const { getByDisplayValue } = render(
      <TextField mask maskOptions={{ mask: '99999-999' }} value='06865810' />
    )
    expect(getByDisplayValue('06865-810')).toBeDefined()
  })

  test('it should return the value correctly as you type', () => {
    const Component = ({ changeTest }) => {
      const [val, setVal] = useState('')

      const handlerChange = e => {
        changeTest(e)

        setVal(e.target.value)
      }

      return <TextField value={val} onChange={handlerChange} />
    }

    const changeTest = jest.fn(e => e.target.value)

    const { container } = render(<Component changeTest={changeTest} />)

    const input = container.getElementsByTagName('input')[0]

    fireEvent.change(input, { target: { value: 'ab' } })

    wait(() => true, { timeout: 1000 }).then(() => {
      expect(changeTest).toBeCalledTimes(1)
      expect(changeTest).toHaveReturnedWith('ab')
    })
  })
})
