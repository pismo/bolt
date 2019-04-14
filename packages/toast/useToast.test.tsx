import 'jest-dom/extend-expect'
import * as React from 'react'
import { render } from 'react-testing-library'

import { ToastProvider } from './'

describe('Toast test', () => {
  it('Render a ToastProvider', () => {
    const { container } = render(<ToastProvider>Testing</ToastProvider>)

    expect(container).toBeVisible()
  })
})
