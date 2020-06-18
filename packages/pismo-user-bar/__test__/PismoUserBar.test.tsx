import {
  cleanup,
  render,
  fireEvent,
  waitForDomChange
  // getByTestId
} from '@testing-library/react'
import 'jest-dom/extend-expect'
import * as React from 'react'

import { Bolt } from '@pismo/bolt-core'
import { PismoUserBar } from '../PismoUserBar'

afterEach(cleanup)

// jest.mock('initials', () => ({default: () => 'ab'}))

describe('@pismo/bolt-pismo-user-bar', () => {
  test('it should display the bar', () => {
    const Component = () => {
      return (
        <Bolt>
          <PismoUserBar name='Teste Teste' email='teste@teste.com' />
        </Bolt>
      )
    }

    const { container, getByTestId } = render(<Component />)

    const bar = getByTestId('toolbar-container')

    expect(container).toBeDefined()
    expect(container).toBeVisible()
    expect(bar).toBeVisible()
  })

  test('it should display the data correctly', () => {
    const name = 'Teste Teste'
    const email = 'teste@teste.com'
    const Component = () => {
      return (
        <Bolt>
          <PismoUserBar name={name} email={email} />
        </Bolt>
      )
    }

    const { getByTestId } = render(<Component />)

    const bar = getByTestId('toolbar-container')

    expect(bar).toHaveTextContent(name)
    expect(bar).toHaveTextContent(email)
  })

  test('in contract mode should not display data', () => {
    const name = 'Teste Teste'
    const email = 'teste@teste.com'
    const Component = () => {
      return (
        <Bolt>
          <PismoUserBar name={name} email={email} contract />
        </Bolt>
      )
    }

    const { getByTestId } = render(<Component />)

    const bar = getByTestId('toolbar-container')

    expect(bar).not.toHaveTextContent(name)
    expect(bar).not.toHaveTextContent(email)
  })

  test('clicking the button should display the drawer with the content', async () => {
    const name = 'Teste Teste'
    const email = 'teste@teste.com'
    const text = 'Testing'
    const Component = () => {
      return (
        <Bolt>
          <PismoUserBar name={name} email={email}>
            {text}
          </PismoUserBar>
        </Bolt>
      )
    }

    const { container, getByTestId } = render(<Component />)

    const button = getByTestId('toolbar-button')

    fireEvent.click(button)

    await waitForDomChange({ container: container.parentElement })

    const drawer = getByTestId('drawer')

    expect(drawer).toHaveTextContent(text)
  })
})
