import 'jest-dom/extend-expect'
import * as React from 'react'
import { render } from 'react-testing-library'
import { Checkbox } from './Checkbox'

describe('Checkbox test', () => {
  it('Render a checkbox unchecked', () => {
    const { container, getByText } = render(<Checkbox name={'testing-checkbox'}>Testing</Checkbox>)

    expect(container).toBeInTheDocument()
    expect(container).toBeVisible()
    expect(getByText('Testing')).toBeVisible()

    const label = container.querySelector('span')

    expect(label).toBeVisible()
    expect(label).toHaveStyle('color: #A3ACBC')
  })
  it('Render a checkbox checked', () => {
    const { container } = render(
      <Checkbox name={'testing-checkbox'} onChange={() => null} checked={true}>
        Testing
      </Checkbox>,
    )
    const label = container.querySelector('span')

    expect(label).toHaveStyle('color: #2C3644')
  })
})
