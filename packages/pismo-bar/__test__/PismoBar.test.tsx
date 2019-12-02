import {
  cleanup,
  render,
  fireEvent,
  wait,
  getByTestId
} from '@testing-library/react'
import 'jest-dom/extend-expect'
import * as React from 'react'

import { Bolt } from '@pismo/bolt-core'
import { PismoBar } from '../PismoBar'

afterEach(cleanup)

describe('@pismo/bolt-pismo-bar', () => {
  test('it should display the bar', () => {
    const Component = ({ current }) => {
      return (
        <Bolt>
          <PismoBar AppBarProps={{ position: 'relative' }} current={current} />
        </Bolt>
      )
    }
    const testOne = render(<Component current='marketplace' />)
    expect(testOne.container).toMatchSnapshot()

    expect(testOne.getByTestId('Marketplace')).toBeDefined()

    const testTwo = render(<Component current='backoffice' />)

    expect(testTwo.getByTestId('Backoffice')).toBeDefined()
  })

  test('when you click the button you should open the icon bar', async () => {
    const Component = ({ current }) => {
      return (
        <Bolt>
          <PismoBar AppBarProps={{ position: 'relative' }} current={current} />
        </Bolt>
      )
    }
    const { container } = render(<Component current='marketplace' />)

    const button = getByTestId(container, 'mainButton')
    fireEvent.click(button)

    await wait(() => {}, { timeout: 1000 })

    const drawer = getByTestId(container.parentElement as HTMLElement, 'drawer')

    expect(drawer).toBeDefined()
    expect(container.parentElement).toMatchSnapshot()
  })
})
