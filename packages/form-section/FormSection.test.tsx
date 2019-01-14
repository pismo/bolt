import 'jest-dom/extend-expect'
import * as React from 'react'
import { render } from 'react-testing-library'
import { FormSection } from './FormSection'

describe('FormSection test', () => {
  it('Render a FormSection without children', () => {
    const { container } = render(<FormSection />)

    const formSection = container.querySelector('div')

    expect(formSection).toBeVisible()
    expect(formSection).toHaveStyle('justify-content: space-between')
  })

  it('Render a FormSection with children', () => {
    const { container } = render(
      <FormSection>
        <p>child1</p>
        <p>child2</p>
      </FormSection>,
    )

    const formSection = container.querySelector('div')
    const children = container.querySelectorAll('div p')

    expect(formSection).toBeVisible()
    expect(formSection).toHaveStyle('justify-content: space-between')

    expect(children.length).toBe(2)
    expect(children[0].textContent).toBe('child1')
    expect(children[1].textContent).toBe('child2')
  })
})
