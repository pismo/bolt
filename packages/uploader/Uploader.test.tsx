import 'jest-dom/extend-expect'
import * as React from 'react'
import { act, fireEvent, render, waitForElement } from 'react-testing-library'
import { Uploader } from './Uploader'

describe('Uploader test', () => {
  it('Render a Uploader with default placeholder', () => {
    const { container, getByText } = render(<Uploader />)
    expect(container).toBeInTheDocument()
    expect(container).toBeVisible()
    expect(getByText('Click or drag files here')).toBeVisible()
  })
  it('Render a Uploader with custom placeholder', () => {
    const { getByText } = render(<Uploader placeholder={'My custom placeholder'} />)
    expect(getByText('My custom placeholder')).toBeVisible()
  })
  it('Render a Uploader and triggers drop event', async () => {
    const rows = ['NAME,ADDRESS,ZIP', 'james,1800 sunny ln,40000', 'ronda,1200 peaches ln,50000']
    const file = new File([rows.join('\n')], 'some.csv')
    const { getByText } = render(<Uploader />)
    const formElement = getByText('Click or drag files here')
    Object.defineProperty(formElement, 'files', { value: [file] })
    act(() => {
      fireEvent.drop(formElement)
    })
    await waitForElement(() => getByText('some.csv'))
    expect(getByText('some.csv')).toBeVisible()
  })
})
