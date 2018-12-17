import 'jest-dom/extend-expect'

import React from 'react'
import { render } from 'react-testing-library'

import { Logo } from './Logo'

describe('Logo component', () => {
  it('should show the logo', () => {
    console.log({ render })
    const { queryByTestId } = render(<Logo />)

    expect(queryByTestId('Logo')).toBeInTheDOM()
  })
})
