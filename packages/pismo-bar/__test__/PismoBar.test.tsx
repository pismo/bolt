import { cleanup, render } from '@testing-library/react'
import 'jest-dom/extend-expect'
import * as React from 'react'

import { PismoBar } from '../PismoBar'

// const { useState } = React

afterEach(cleanup)

describe('@pismo/bolt-pismo-bar', () => {
  test('it should display the bar', () => {
    const Component = () => {
      return (
        <PismoBar
          AppBarProps={{ position: 'relative' }}
          current='marketplace'
        />
      )
    }
    const { container } = render(<Component />)

    expect(container).toMatchSnapshot()
  })
})
