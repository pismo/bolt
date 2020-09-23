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

import { PercentInput } from '../PercentInput'

afterEach(cleanup)

describe('@pismo/bolt-percent-input', () => {
  test('it should display the components correctly', () => {
    const { container } = render(<PercentInput />)
    const input = container.getElementsByTagName('input')[0]

    expect(input).toBeVisible()
    expect(container).toBeVisible()
  })

  test('Entering a value should display and return correctly', async () => {
    const fn = jest.fn(value => value)

    const { container } = render(
      <PercentInput
        initialValue={1}
        TextfieldProps={{ label: 'valor' }}
        lang='pt'
        onChange={fn}
      />
    )
    const label = container.getElementsByTagName('label')[0]
    const input = container.getElementsByTagName('input')[0]

    expect(label).toHaveTextContent('valor')
    expect(input).toHaveAttribute('value', '100.00%')
  })

  test('Starting the maximum display value parameter, starting with a higher value, only the maximum value should appear', async () => {
    const fn = jest.fn(value => value)

    const { container } = render(
      <PercentInput
        initialValue={2}
        lang='pt'
        onChange={fn}
        maxInteger={1}
        TextfieldProps={{ label: 'valor' }}
      />
    )
    const label = container.getElementsByTagName('label')[0]
    const input = container.getElementsByTagName('input')[0]

    expect(label).toHaveTextContent('valor')
    expect(input).toHaveAttribute('value', '100.00%')
  })

  test('Starting the maximum display value parameter, starting with a lower value, only the initial value should appear', async () => {
    const fn = jest.fn(value => value)

    const { container } = render(
      <PercentInput
        initialValue={0.5}
        lang='pt'
        onChange={fn}
        maxInteger={1}
        TextfieldProps={{ label: 'valor' }}
      />
    )
    const label = container.getElementsByTagName('label')[0]
    const input = container.getElementsByTagName('input')[0]

    expect(label).toHaveTextContent('valor')
    expect(input).toHaveAttribute('value', '50.00%')
  })

  test('Starting the minimum display value parameter, starting with a higher value, only the initial value should appear', async () => {
    const fn = jest.fn(value => value)

    const { container } = render(
      <PercentInput
        initialValue={2}
        lang='pt'
        onChange={fn}
        minInteger={1}
        TextfieldProps={{ label: 'valor' }}
      />
    )
    const label = container.getElementsByTagName('label')[0]
    const input = container.getElementsByTagName('input')[0]

    expect(label).toHaveTextContent('valor')
    expect(input).toHaveAttribute('value', '200.00%')
  })

  test('Starting the minimum display value parameter, starting with a lower value, only the minimum value should appear', async () => {
    const fn = jest.fn(value => value)

    const { container } = render(
      <PercentInput
        initialValue={0.5}
        lang='pt'
        onChange={fn}
        minInteger={1}
        TextfieldProps={{ label: 'valor' }}
      />
    )
    const label = container.getElementsByTagName('label')[0]
    const input = container.getElementsByTagName('input')[0]

    expect(label).toHaveTextContent('valor')
    expect(input).toHaveAttribute('value', '100.00%')
  })
})
