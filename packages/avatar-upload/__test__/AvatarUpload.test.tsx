import { cleanup, render } from '@testing-library/react'
import 'jest-dom/extend-expect'
import * as React from 'react'

import { AvatarUpload } from '../AvatarUpload'

afterEach(cleanup)

describe('@pismo/bolt-avatar-upload', () => {
  test('it show upload button correctly', () => {
    const imgDone = jest.fn(() => console.log('teste'))
    const label = 'Change profile image'
    const { container, getByTestId } = render(
      <AvatarUpload
        buttonLabel={label}
        imageUploaded={imgDone}
        resultType='base64'
      />
    )
    const uploadButton = getByTestId('upload-button')
    expect(container).toBeVisible()
    expect(uploadButton).toBeDefined()
    expect(uploadButton).toHaveTextContent(label)
  })
})
