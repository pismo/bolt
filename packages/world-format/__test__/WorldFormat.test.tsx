import { cleanup, render, fireEvent } from '@testing-library/react'
import 'jest-dom/extend-expect'
import * as React from 'react'

import { WorldFormat, Countrys, Format } from '../WorldFormat'
import { TextField } from '@pismo/bolt-text-field'

afterEach(cleanup)

describe('@pismo/bolt-world-format', () => {
  test('maks documentNumber (brazil) should working', async () => {
    const wf: Format = WorldFormat[Countrys.BRAZIL]

    const change = jest.fn(e => wf.documentNumberIsValid(e.target.value))

    const { getByTestId } = render(
      <TextField
        mask
        maskOptions={{ regex: wf.documentNumber }}
        inputProps={{ 'data-testid': 'input' }}
        value='123456789999999999'
        onChange={change}
      />
    )

    fireEvent.change(getByTestId('input'))

    expect(change).toBeCalledTimes(1)
    expect(change).toHaveReturnedWith(true)
  })
})
