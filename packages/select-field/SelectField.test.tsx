import 'jest-dom/extend-expect'
import * as React from 'react'
import { fireEvent, render } from 'react-testing-library'
import { SelectField } from './SelectField'

describe('SelectField test', () => {
  it('Render a SelectField with options', () => {
    const options = [
      { label: 'test1', value: 'value1' },
      { label: 'test2', value: 'value2' },
      { label: 'test3', value: 'value3' },
    ]

    const { container, getByText } = render(
      // @ts-ignore
      <SelectField
        label="test-label"
        name="test-name"
        value="test-value-1"
        onChange={() => 'test'}
        placeholder="test-placeholder"
        options={options}
      />,
    )

    const selectField = container.querySelector('div')
    const label = getByText('test-label')
    const select = container.querySelector('select')
    const optionEls = select.querySelectorAll('option')

    expect(selectField).toBeVisible()
    expect(label).toBeVisible()
    expect(select.name).toBe('test-name')
    expect(optionEls[0].value).toBe('value1')
    expect(optionEls[1].value).toBe('value2')
    expect(optionEls[2].value).toBe('value3')
  })

  it('Render a SelectField with onChange callback', () => {
    const testCallback = toBeIndex => index => {
      expect(index).toBe(toBeIndex)
    }

    const options = [
      { label: 'test1', value: 'value1' },
      { label: 'test2', value: 'value2' },
      { label: 'test3', value: 'value3' },
    ]

    const { container } = render(
      // @ts-ignore
      <SelectField
        label="test-label"
        name="test-name"
        value="test-value-1"
        onChange={e => testCallback(2)(e.target.selectedIndex)}
        placeholder="test-placeholder"
        options={options}
      />,
    )

    const select = container.querySelector('select')

    fireEvent.change(select, { target: { selectedIndex: 2 } })
  })
})
