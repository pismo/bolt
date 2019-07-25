import {
  cleanup,
  render,
  fireEvent
  // getByText,
  // waitForDomChange
} from '@testing-library/react'
import 'jest-dom/extend-expect'
import * as React from 'react'

import { FlagPanel } from '../FlagPanel'
import { FLAG } from '../flags'

const { useState } = React

afterEach(cleanup)

const Component: React.FC<{ change?: (value: any) => void }> = ({ change }) => {
  console.log(change)
  const data = [
    { flag: FLAG.br, description: 'Português' },
    { flag: FLAG.us, description: 'Inglês' },
    { flag: FLAG.es, description: 'Espanhol' }
  ]

  const [current] = useState(data[0])
  console.log(current)

  const handleChange = value => {
    if (change) change(value)
  }

  return (
    <FlagPanel
      title='idioma'
      data={data}
      value={current}
      onChange={handleChange}
    />
  )
}

describe('@pismo/bolt-flag-panel', () => {
  test('it should display the components correctly', () => {
    const { container, getByText } = render(<Component />)

    expect(getByText('idioma')).toBeDefined()
    expect(getByText('Português')).toBeDefined()
    expect(getByText('Inglês')).toBeDefined()
    expect(getByText('Espanhol')).toBeDefined()

    expect(container).toMatchSnapshot()
  })

  test('it should return the chosen value', () => {
    const fn = jest.fn(value => value.description)

    const { getByTestId } = render(<Component change={fn} />)

    const usBt = getByTestId('Inglês')
    const ptBt = getByTestId('Português')
    const esBt = getByTestId('Espanhol')

    fireEvent.click(usBt)

    expect(fn).toBeCalledTimes(1)
    expect(fn).toReturnWith('Inglês')

    fireEvent.click(ptBt)

    expect(fn).toBeCalledTimes(2)
    expect(fn).toReturnWith('Português')

    fireEvent.click(esBt)

    expect(fn).toBeCalledTimes(3)
    expect(fn).toReturnWith('Espanhol')
  })
})
