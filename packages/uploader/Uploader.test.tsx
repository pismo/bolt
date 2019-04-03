import 'jest-dom/extend-expect'
import * as React from 'react'
import { render } from 'react-testing-library'
import { Uploader } from './Uploader'

describe('Uploader test', () => {
  it('Render a Uploader with default placeholder', () => {
    const { container, getByText } = render(<Uploader />)

    expect(container).toBeInTheDocument()
    expect(container).toBeVisible()
    expect(getByText('Click or drag files here')).toBeVisible()
  })

  it('Render a Uploader with custom placeholder', () => {
    const { getByText } = render(<Uploader placeholder={'My custom placeholder'} />)

    expect(getByText('My custom placeholder')).toBeVisible()
  })
})
