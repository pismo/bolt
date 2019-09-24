import {
  cleanup,
  render,
  waitForDomChange,
  fireEvent
} from '@testing-library/react'
import 'jest-dom/extend-expect'
import * as React from 'react'

import { Bolt, Context } from '../Core'
import { PismoDefaultTheme } from '../themes/PismoDefaultTheme'
import Button from '@material-ui/core/Button'
import { createMuiTheme } from '@material-ui/core/styles'

const { useContext } = React

afterEach(cleanup)

describe('@pismo/bolt-core', () => {
  test('it should be primary color from default theme', () => {
    const { getByTestId } = render(
      <Bolt>
        <Button data-testid='button' variant='contained' color='primary'>
          teste
        </Button>
      </Bolt>
    )

    const button = getByTestId('button')

    waitForDomChange({ container: button, timeout: 1000 })
      .then(() => {
        expect(button).toHaveStyle(
          `background-color: ${PismoDefaultTheme.palette.primary.main}`
        )
      })
      .catch(err => console.log(err))
  })

  const Component = () => {
    const { currentTheme, registerTheme, getThemes, changeTheme } = useContext(
      Context
    )

    const redTheme = createMuiTheme({
      palette: {
        primary: {
          main: '#ff0000'
        }
      }
    })

    return (
      <>
        <div data-testid='currentTheme'>{currentTheme}</div>
        <div data-testid='listThemes'>{getThemes().map(k => `${k} | `)}</div>
        <button
          data-testid='addTheme'
          onClick={() => registerTheme('red', redTheme)}
        />
        <Button
          data-testid='changeTheme'
          onClick={() => changeTheme('red')}
          variant='contained'
        >
          click
        </Button>
      </>
    )
  }

  test('it should to show currentTheme', () => {
    const { getByTestId } = render(
      <Bolt>
        <Component />
      </Bolt>
    )

    const currentTheme = getByTestId('currentTheme')

    waitForDomChange({ container: currentTheme, timeout: 1000 })
      .then(() => {
        expect(currentTheme.innerText).toEqual('default')
      })
      .catch(err => console.log(err))
  })

  test('it should add a new theme', () => {
    const { getByTestId } = render(
      <Bolt>
        <Component />
      </Bolt>
    )

    const button = getByTestId('addTheme')

    const list = getByTestId('listThemes')

    expect(list.innerHTML).not.toMatch('red')

    fireEvent.click(button)

    waitForDomChange({ container: list, timeout: 1000 })
      .then(() => {
        expect(list.innerHTML).toMatch('red')
      })
      .catch(err => console.log(err))
  })

  test('it should change the theme', () => {
    const { getByTestId } = render(
      <Bolt>
        <Component />
      </Bolt>
    )

    const add = getByTestId('addTheme')
    const change = getByTestId('changeTheme')
    const list = getByTestId('listThemes')
    const current = getByTestId('currentTheme')

    fireEvent.click(add)

    waitForDomChange({ container: list, timeout: 1000 })
      .then(() => {
        fireEvent.click(change)

        waitForDomChange({ container: current, timeout: 1000 })
          .then(() => {
            expect(current.innerHTML).toMatch('red')
            expect(change).toHaveStyle(`background-color: #ff0000`)
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  })
})
