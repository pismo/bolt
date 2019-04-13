import 'jest-dom/extend-expect'
import * as React from 'react'
import { render } from 'react-testing-library'

import { TableItem } from './'

describe('TableItem test', () => {
  it('Render a TableItem', () => {
    const { container } = render(<TableItem>Testing</TableItem>)

    expect(container).toBeVisible()
  })
})
