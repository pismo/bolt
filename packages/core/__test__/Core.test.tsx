import { cleanup } from '@testing-library/react'
import 'jest-dom/extend-expect'

import { Provider } from '../Core'
// import Button from '@material-ui/core/Button'

afterEach(cleanup)

jest.mock('webfontloader', () => ({
  load: () => null
}))

describe('@pismo/bolt-core', () => {
  test('teste básico', () => {
    // const {container} = render(<Provider>
    //     <Button color='primary'>teste</Button>
    // </Provider>)

    console.log(Provider)
    expect(true).toBe(true)
  })
})
