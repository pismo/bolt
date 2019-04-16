import 'jest-dom/extend-expect'
import * as React from 'react'
import { render } from 'react-testing-library'
import { Timer } from './Timer'

jest.useFakeTimers()

describe('Timer test', () => {
  it('Render a Timer', () => {
    const { container } = render(<Timer />)

    const timer = container.querySelector('p')

    expect(timer).toBeVisible()
    expect(timer.textContent).toBe('00:00')
    expect(timer).toHaveStyle('color: rgb(0, 0, 0);')
    expect(timer).toHaveStyle('padding: 0 0.5rem')
  })

  it('Render a Timer and verify after 5 seconds', () => {
    const { container } = render(<Timer />)

    const timer = container.querySelector('p')

    expect(timer).toBeVisible()
    expect(timer.textContent).toBe('00:00')
    expect(timer).toHaveStyle('color: rgb(0, 0, 0);')
    expect(timer).toHaveStyle('padding: 0 0.5rem')

    jest.advanceTimersByTime(5000)

    expect(timer.textContent).toBe('00:05')
  })
})
