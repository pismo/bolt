import {
  cleanup,
  render,
  fireEvent,
  wait
  // getByText,
  // waitForDomChange
} from '@testing-library/react'
import 'jest-dom/extend-expect'
import * as React from 'react'

import { ExpansionMenu } from '../ExpansionMenu'
import { Bolt } from '@pismo/bolt-core'

const { useState } = React

afterEach(cleanup)

const Component: React.FC<{ change?: (value: any) => void }> = ({ change }) => {
  const data = [
    { description: 'Português' },
    { description: 'Inglês' },
    { description: 'Espanhol' }
  ]

  const [current] = useState(data[0])

  const handleChange = value => {
    if (change) change(value)
  }

  return (
    <Bolt>
      <ExpansionMenu
        data={data}
        getComponent={item => (
          <div data-testid={item.description}>{item.description}</div>
        )}
        SumaryComponent={() => <div>Languages => {current.description}</div>}
        onChange={handleChange}
      />
    </Bolt>
  )
}

describe('@pismo/bolt-expansion-menu', () => {
  test('it should display the components correctly', () => {
    const { getByText } = render(<Component />)

    expect(getByText('Languages => Português')).toBeDefined()
    expect(getByText('Português')).toBeDefined()
    expect(getByText('Inglês')).toBeDefined()
    expect(getByText('Espanhol')).toBeDefined()
  })

  test('it should return the chosen value', () => {
    const fn = jest.fn(value => value.description)

    const { getByTestId } = render(<Component change={fn} />)

    const usBt = getByTestId('Inglês')
    const ptBt = getByTestId('Português')
    const esBt = getByTestId('Espanhol')

    fireEvent.click(usBt)

    wait(() => true, { timeout: 1000 }).then(() => {
      expect(fn).toBeCalledTimes(1)
      expect(fn).toHaveReturnedWith('Inglês')
    })

    fireEvent.click(ptBt)

    wait(() => true, { timeout: 1000 }).then(() => {
      expect(fn).toBeCalledTimes(2)
      expect(fn).toReturnWith('Português')
    })

    fireEvent.click(esBt)

    wait(() => true, { timeout: 1000 }).then(() => {
      expect(fn).toBeCalledTimes(3)
      expect(fn).toReturnWith('Espanhol')
    })
  })
})
