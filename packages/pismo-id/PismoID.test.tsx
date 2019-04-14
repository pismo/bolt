import 'jest-dom/extend-expect'
import * as React from 'react'
import { render } from 'react-testing-library'
import { PismoID } from './PismoID'

describe('Checkbox test', () => {
  it('Simple render PismoID', () => {
    const { container } = render(
      <PismoID
        auth={{
          getPreferences: jest.fn().mockImplementation(() => Promise.resolve()),
          ensure: jest.fn().mockImplementation(() => Promise.resolve()),
        }}
      >
        Testing
      </PismoID>,
    )

    expect(container).toBeInTheDocument()
    expect(container).toBeVisible()
  })
})
