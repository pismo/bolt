import 'jest-dom/extend-expect'
import * as React from 'react'
import { render } from 'react-testing-library'
import { Table } from './'

describe('Table test', () => {
  it('Render a Table', () => {
    const { container } = render(<Table>Testing</Table>)

    expect(container).toBeDefined()
    expect(container).toBeVisible()
  })
})
