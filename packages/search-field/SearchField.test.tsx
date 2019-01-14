import 'jest-dom/extend-expect'
import * as React from 'react'
import { render, fireEvent } from 'react-testing-library'
import { SearchField } from './SearchField'

describe('SearchField test', () => {
  it('Render a SearchField with a default value', () => {
    const { container } = render(<SearchField defaultValue="test-field" onChange={x => x} />)

    const searchField = container.querySelector('input')
    const icon = container.querySelector('svg')

    expect(icon).toBeVisible()
    expect(searchField).toBeVisible()
    expect(searchField.value).toBe('test-field')
  })

  it('Render a SearchField with a placeholder', () => {
    const { container } = render(<SearchField placeholder="digit" onChange={x => x} />)

    const searchField = container.querySelector('input')
    const icon = container.querySelector('svg')

    expect(icon).toBeVisible()
    expect(searchField).toBeVisible()
    expect(searchField.placeholder).toBe('digit')
  })

  it('Render a SearchField and use a onChange callback', () => {
    const testCallback = toBeArg => input => {
      expect(input).toBeDefined()
      expect(typeof input).toBe('string')
      expect(input).toBe(toBeArg)
    }

    const { container } = render(<SearchField onChange={testCallback('test-input')} />)

    const searchField = container.querySelector('input')
    const icon = container.querySelector('svg')

    expect(icon).toBeVisible()
    expect(searchField).toBeVisible()

    fireEvent.change(searchField, { target: { value: 'test-input' } })
  })
})
