import { shallow, } from 'enzyme'
import React from 'react'
import Button from './Button'

describe('Pismo button', () => {
  let button
  const children = 'Pismo'

  beforeAll(() => {
    button = (
      <Button>
        {children}
      </Button>
    )
  })

  it('should render without crashing', () => {
    shallow(button)
  })

  it('should render with string children', () => {
    expect(shallow(button).contains('Pismo')).toEqual(true)
  })
})
