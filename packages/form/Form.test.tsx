import 'jest-dom/extend-expect'
import * as React from 'react'
import { render } from 'react-testing-library'
import { Form } from './Form'

describe('Form test', () => {
  it('Render a Form with title', () => {
    const { container } = render(<Form title="form-title">test</Form>)

    const title = container.querySelector('div p')

    expect(title).toBeVisible()
    expect(title.textContent).toBe('form-title')
  })

  it('Render a Form without title', () => {
    const { container } = render(<Form> test </Form>)

    const title = container.querySelector('div p')
    expect(title).toBeNull()
  })

  it('Render a Form with onClickBack', () => {
    const { container } = render(
      <Form title="form-title" onClickBack={() => 'test'}>
        test
      </Form>,
    )

    const backLink = container.querySelector('span')
    expect(backLink).toBeVisible()
  })

  it('Render a Form without onClickBack', () => {
    const { container } = render(<Form title="form-title">test</Form>)
    const backLink = container.querySelector('span')
    expect(backLink).toBeNull()
  })

  it('Render a Form with children', () => {
    const { getByTestId } = render(
      <Form onClickBack={() => 'test'}>
        <div data-testid="child"> I'm a child </div>
      </Form>,
    )

    const child = getByTestId('child')
    expect(child).toBeVisible()
    expect(child.textContent).toBe(" I'm a child ")
  })
})
