import 'jest-dom/extend-expect'
import * as React from 'react'
import { render } from 'react-testing-library'
import { FormButtons } from './FormButtons'

describe('FormButtons test', () => {
  it('Render a FormButtons without label', () => {
    const { container } = render(<FormButtons />)

    const formButtons = container.querySelector('div')

    expect(formButtons).toBeVisible()
    expect(formButtons).toHaveStyle('margin-top: 1.5rem')
  })

  it('Render a FormButtons with label', () => {
    const { container } = render(<FormButtons>formbutton-label</FormButtons>)

    const formButtons = container.querySelector('div')

    expect(formButtons).toBeVisible()
    expect(formButtons.textContent).toBe('formbutton-label')
    expect(formButtons).toHaveStyle('margin-top: 1.5rem')
  })
})
