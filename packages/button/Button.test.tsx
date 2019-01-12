import 'jest-dom/extend-expect'
import * as React from 'react'
import { render } from 'react-testing-library'
import { Button } from './Button'

describe('Button test', () => {
  it('Render a Button default', () => {
    const { container } = render(<Button>button-label</Button>)

    const button = container.querySelector('button')

    expect(button).toBeVisible()
    expect(button.textContent).toBe('button-label')
    expect(button).toHaveStyle('background-color: #ff9800')
  })

  it('Render a Button secondary', () => {
    const { container } = render(<Button secondary>button-label</Button>)

    const button = container.querySelector('button')

    expect(button).toBeVisible()
    expect(button.textContent).toBe('button-label')
    expect(button).toHaveStyle('background-color: #586374')
  })
})
