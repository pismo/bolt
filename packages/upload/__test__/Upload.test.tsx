import { cleanup, render } from '@testing-library/react'
import 'jest-dom/extend-expect'
import * as React from 'react'

import { Upload } from '../Upload'

afterEach(cleanup)

describe('@pismo/bolt-upload', () => {
  test('it should display dropzone corretly', () => {
    const { getByTestId } = render(<Upload />)

    const dropzone = getByTestId('dropzone')
    expect(dropzone).toBeDefined()
    expect(dropzone).toBeVisible()
  })

  test('it should display upload button corretly', () => {
    const { getByTestId } = render(<Upload dropzone={false} />)

    const dropzone = getByTestId('upload-button')
    expect(dropzone).toBeDefined()
    expect(dropzone).toBeVisible()
  })
})