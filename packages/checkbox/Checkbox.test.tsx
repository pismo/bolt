import 'jest-dom/extend-expect'
import * as React from 'react'
import { render } from 'react-testing-library'
import { Checkbox } from './Checkbox'

describe('Checkbox test', () => {
  it('Render a checkbox default', () => {
    const { container, getByText } = render(
      <Checkbox name={'testing-checkbox'} onChange={() => null} checked={false}>
        Testing
      </Checkbox>,
    )

    expect(container).toBeInTheDocument()
    expect(container).toBeVisible()
    expect(getByText('Testing')).toBeVisible()
  })
})
