import 'jest-dom/extend-expect'
import * as React from 'react'
import { render } from 'react-testing-library'
import { TextField } from './TextField'

describe('TextField test', () => {
  it('Render a TextField with label and flex', () => {
    const { container, getByText } = render(<TextField label="text-field" flex="2.5" />)

    const textWrapper = container.querySelector('div')
    const input = container.querySelector('input')
    const label = getByText('text-field')

    expect(label).toBeVisible()
    expect(input).toBeVisible()
    expect(textWrapper).toHaveStyle('flex: 2.5')
  })

  it('Render a TextField with props to input', () => {
    const { container, getByText } = render(
      <TextField label="text-field" flex="2.5" value="input-test" name="name-test" onChange={e => e.target.value} />,
    )

    const textWrapper = container.querySelector('div')
    const input = container.querySelector('input')
    const label = getByText('text-field')

    expect(label).toBeVisible()
    expect(input).toBeVisible()
    expect(textWrapper).toHaveStyle('flex: 2.5')
    expect(input.value).toBe('input-test')
    expect(input.name).toBe('name-test')
  })
})
