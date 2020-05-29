import {
  cleanup,
  render
  // fireEvent,
  // wait,
  // getByText,
  // getByTestId,
  // waitForDomChange
} from '@testing-library/react'
import 'jest-dom/extend-expect'
import * as React from 'react'

import { CurrencyCode } from '@pismo/bolt-world-format'
import { CurrencyInput } from '../CurrencyInput'

afterEach(cleanup)

describe('@pismo/bolt-currency-input', () => {
  test('it should display the components correctly', () => {
    const { container } = render(<CurrencyInput />)

    const input = container.getElementsByTagName('input')[0]

    expect(input).toHaveAttribute('value', '$0.00')
    expect(input).toBeVisible()
    expect(container).toBeVisible()
  })

  test('entering a value should display and return correctly', async () => {
    const fn = jest.fn(value => value)

    const { container } = render(
      <CurrencyInput
        currency={CurrencyCode.BRAZIL}
        initialValue={1000}
        lang='pt'
        onChange={fn}
      />
    )

    const input = container.getElementsByTagName('input')[0]

    expect(input).toHaveAttribute('value', 'R$ 1,000.00')
    expect(fn).toBeCalledTimes(1)
    expect(fn).toReturnWith(1000)
  })
})
