import 'jest-dom/extend-expect'
import * as React from 'react'
import { render } from 'react-testing-library'
import { Loader } from './Loader'

describe('Loader test', () => {
  it('Render a Loader default', () => {
    const { container } = render(<Loader />)

    const loader = container.querySelector('div')

    expect(loader).toBeVisible()
    expect(loader).toHaveStyle('transform: scale(1)')
  })

  it('Render a Loader tiny', () => {
    const { container } = render(<Loader size="tiny" />)

    const loader = container.querySelector('div')

    expect(loader).toBeVisible()
    expect(loader).toHaveStyle('transform: scale(0.5)')
  })

  it('Render a Loader small', () => {
    const { container } = render(<Loader size="small" />)

    const loader = container.querySelector('div')

    expect(loader).toBeVisible()
    expect(loader).toHaveStyle('transform: scale(0.8)')
  })

  it('Render a Loader large', () => {
    const { container } = render(<Loader size="large" />)

    const loader = container.querySelector('div')

    expect(loader).toBeVisible()
    expect(loader).toHaveStyle('transform: scale(1.3)')
  })
})
