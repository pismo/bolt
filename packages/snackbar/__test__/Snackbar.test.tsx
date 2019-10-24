import {
  cleanup,
  render,
  fireEvent,
  getByText,
  waitForDomChange
} from '@testing-library/react'
import 'jest-dom/extend-expect'
import * as React from 'react'

import { Snackbar } from '../Snackbar'

const { useState } = React

afterEach(cleanup)

describe('@pismo/bolt-snackbar', () => {
  test('it should display the components correctly after click', () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false)
      const [variant] = useState<'info' | 'success' | 'warning' | 'error'>(
        'info'
      )

      const closeAll = () => {
        setIsOpen(false)
      }
      return (
        <div data-testid='container'>
          <button data-testid='bt' onClick={() => setIsOpen(!isOpen)}>
            test
          </button>
          <Snackbar
            open={isOpen}
            onClose={closeAll}
            message={`teste ${variant}`}
            variant={variant}
          />
        </div>
      )
    }
    const { getByTestId } = render(<Component />)

    const container = getByTestId('container')
    const bt = getByTestId('bt')

    expect(container.children).toHaveLength(1)

    fireEvent.click(bt)

    expect(container.children).toHaveLength(2)

    const sb = container.children[1]

    expect(getByText(sb as HTMLElement, 'teste info')).toBeDefined()

    fireEvent.click(bt)

    waitForDomChange({ container, timeout: 1000 }).then(() => {
      expect(container.children).toHaveLength(1)
    })
  })
})
