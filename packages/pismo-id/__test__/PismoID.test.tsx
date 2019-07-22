import {
  cleanup,
  render,
  waitForDomChange
  // getByText,
  // wait,
  // fireEvent
} from '@testing-library/react'
import 'jest-dom/extend-expect'
import * as React from 'react'
import { PismoID } from '../PismoID'
import { Provider } from '@pismo/bolt-core'
import { Auth } from '@pismo/sdk-auth'

afterEach(cleanup)

const AppAuth = Auth({
  baseURL: 'https://api-sandbox.pismolabs.io',
  onUpdate: (...args) => console.log(args)
})
AppAuth.ensure = () => {
  console.log('+++++++++++++++++++++++++++')
  return new Promise(resolve => setTimeout(() => resolve({ teste: 123 }), 500))
}

AppAuth.setSession = () => {
  console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
  return new Promise(resolve => setTimeout(resolve, 500))
}

describe('@pismo/bolt-form-control', () => {
  //   test('it should display loading at startup', () => {
  //     const {container} = render(
  //       <Provider>
  //         <PismoID auth={AppAuth}>Success</PismoID>
  //       </Provider>
  //     )

  //     const loading = container.getElementsByTagName('circle')[0]

  //     expect(loading).toBeDefined()
  //   })

  test('it should display loading at startup', () => {
    const { container } = render(
      <Provider>
        <PismoID auth={AppAuth}>Success</PismoID>
      </Provider>
    )

    const loading = container.getElementsByTagName('circle')[0]

    waitForDomChange({ container, timeout: 10000 }).then(() => {
      expect(loading).toBeDefined()
      expect(container).toMatchSnapshot()
    })
  })
})
