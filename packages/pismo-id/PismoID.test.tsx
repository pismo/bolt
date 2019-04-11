import 'jest-dom/extend-expect'
import * as React from 'react'
import { render } from 'react-testing-library'
import { PismoID } from './PismoID'

describe('Checkbox test', () => {
  it('Simple render PismoID', () => {
    const { container } = render(
      <PismoID
        children={<div>Test</div>}
        auth={{teste:'teste'}}
      />
    )

    expect(container).toBeInTheDocument()
    expect(container).toBeVisible()
  })

})
