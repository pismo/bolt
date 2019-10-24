import { cleanup, render, } from '@testing-library/react'
import 'jest-dom/extend-expect'
import * as React from 'react'

import { Can, toCan } from '../Can'

afterEach(cleanup)

describe('@pismo/bolt-can', () => {
  test('if the user has the permissions should display the components', () => {
    const {container} = render(<Can userRoles={["tomate"]} roles={["tomate"]}>permitido</Can>)

    expect(toCan(["tomate"], ["tomate"])).toBe(true)    
    expect(container).toHaveTextContent('permitido')
    expect(container).toMatchSnapshot()
  })

  test('if the user does not have the permissions should display the components', () => {
    const {container} = render(<Can userRoles={["tomate"]} roles={["cebola"]}>permitido</Can>)

    expect(toCan(["banana"], ["tomate"])).toBe(false)
    expect(container).not.toHaveTextContent('permitido')
  })
})
