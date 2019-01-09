import 'jest-dom/extend-expect'
import * as React from 'react'
import { render } from 'react-testing-library'
import { SearchList } from './SearchList'

describe('SearchList test', () => {
  it('Render a SearchList with a list of items', () => {
    const data = ['test1', 'test2', 'test3']
    const listItemFunc = ({ hits }) => ({ key, index }) => {
      return <p key={key}>{hits[index]}</p>
    }

    const { container, getByLabelText } = render(
      <SearchList hits={data} listItem={listItemFunc} data-testid="searchlist" />,
    )

    const searchList = container.querySelector('div')
    const grid = getByLabelText('grid')

    expect(searchList).toBeVisible()
    expect(grid).toBeVisible()
  })

  it('Render a SearchList with isLoading actived', () => {
    const data = ['test1', 'test2', 'test3']
    const listItemFunc = ({ hits }) => ({ key, index }) => {
      expect(hits).toBe(data)
      return <p key={key}>{hits[index]}</p>
    }

    const { container } = render(<SearchList hits={data} listItem={listItemFunc} isLoading={true} />)

    const loader = container.querySelector('div')

    expect(loader).toBeVisible()
    expect(loader).toHaveStyle('transform: scale(1)')
    expect(loader).toHaveStyle('color: transparent !important')
  })

  it('Render a SearchList with isError actived', () => {
    const data = ['test1', 'test2', 'test3']
    const listItemFunc = ({ hits }) => ({ key, index }) => {
      expect(hits).toBe(data)
      return <p key={key}>{hits[index]}</p>
    }

    const { getByText } = render(
      <SearchList
        hits={data}
        listItem={listItemFunc}
        isLoading={false}
        isError={true}
        errorMessage="test-error-message"
      />,
    )

    const errorMessageEl = getByText('test-error-message')

    expect(errorMessageEl).toBeVisible()
    expect(errorMessageEl.tagName.toLowerCase()).toBe('p')
  })

  it('Render a SearchList with emptyMessage', () => {
    const listItemFunc = ({ hits }) => ({ key, index }) => {
      return <p key={key}>{hits[index]}</p>
    }

    const { getByText } = render(
      <SearchList hits={[]} listItem={listItemFunc} isLoading={false} emptyMessage="test-empty-message" />,
    )

    const emptyMessageEl = getByText('test-empty-message')

    expect(emptyMessageEl).toBeVisible()
    expect(emptyMessageEl.tagName.toLowerCase()).toBe('p')
  })

  it('Render a SearchList with explanationMessage', () => {
    const listItemFunc = ({ hits }) => ({ key, index }) => {
      return <p key={key}>{hits[index]}</p>
    }

    const { getByText } = render(
      <SearchList hits={[]} listItem={listItemFunc} explanationMessage="test-explanation-message" />,
    )

    const explanationMessageEl = getByText('test-explanation-message')

    expect(explanationMessageEl).toBeVisible()
    expect(explanationMessageEl.tagName.toLowerCase()).toBe('h4')
  })
})
