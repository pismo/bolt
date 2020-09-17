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

    expect(input).toHaveAttribute('value', '0.00%')
    expect(input).toBeVisible()
    expect(container).toBeVisible()
  })

  test('entering a value should display and return correctly', async () => {
    const fn = jest.fn(value => value)

    const { container } = render(
      <PercentInput
        initialValue={1.4}
        TextfieldProps={{ label: 'valor' }}
        lang='pt'
        onChange={fn}
      />
    )
    const label = container.getElementsByTagName('label')[0]
    const input = container.getElementsByTagName('input')[0]

    expect(label).toHaveTextContent('valor')
    expect(input).toHaveAttribute('value', '1.40%')
  })

  test('starting the maximum display value parameter, starting with a higher value, only the maximum value should appear', async () => {
    const fn = jest.fn(value => value)

    const { container } = render(
      <PercentInput
        initialValue={200}
        lang='pt'
        onChange={fn}
        maxInteger={100}
        TextfieldProps={{ label: 'valor' }}
      />
    )
    const label = container.getElementsByTagName('label')[0]
    const input = container.getElementsByTagName('input')[0]

    expect(label).toHaveTextContent('valor')
    expect(input).toHaveAttribute('value', '100.00%')
  })

  test('starting the maximum display value parameter, starting with a lower value, only the initial value should appear', async () => {
    const fn = jest.fn(value => value)

    const { container } = render(
      <PercentInput
        initialValue={98.1}
        lang='pt'
        onChange={fn}
        maxInteger={100}
        TextfieldProps={{ label: 'valor' }}
      />
    )
    const label = container.getElementsByTagName('label')[0]
    const input = container.getElementsByTagName('input')[0]

    expect(label).toHaveTextContent('valor')
    expect(input).toHaveAttribute('value', '98.10%')
  })

  test('iniciando o parâmetro de valor minimo de exibição, começando com um valor mais alto, apenas o valor inicial deve aparecer', async () => {
    const fn = jest.fn(value => value)

    const { container } = render(
      <PercentInput
        initialValue={200}
        lang='pt'
        onChange={fn}
        minInteger={100}
        TextfieldProps={{ label: 'valor' }}
      />
    )
    const label = container.getElementsByTagName('label')[0]
    const input = container.getElementsByTagName('input')[0]

    expect(label).toHaveTextContent('valor')
    expect(input).toHaveAttribute('value', '200.00%')
  })

  test('iniciando o parâmetro de valor minimo de exibição, começando com um valor mais baixo, apenas o valor minimo deve aparecer', async () => {
    const fn = jest.fn(value => value)

    const { container } = render(
      <PercentInput
        initialValue={98.5}
        lang='pt'
        onChange={fn}
        minInteger={100}
        TextfieldProps={{ label: 'valor' }}
      />
    )
    const label = container.getElementsByTagName('label')[0]
    const input = container.getElementsByTagName('input')[0]

    expect(label).toHaveTextContent('valor')
    expect(input).toHaveAttribute('value', '100.00%')
  })
})
