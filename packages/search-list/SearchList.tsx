import * as React from 'react'

import { H4, media, P, styled } from '@pismo/bolt-core'
import { Loader } from '@pismo/bolt-loader'
import * as isEmpty from 'lodash.isempty'

import { AutoSizer, List } from 'react-virtualized'

const ROW_HEIGHT = 74

const SearchEmpty = styled(P)`
  align-self: center;
`

const SearchListWrapper = styled.div`
  height: 65vh;
`

const SearchExplanation = styled(H4)`
  margin: 0;
  margin-top: auto;
  align-self: center;
  color: #c1c7d4;
  padding: 0 1rem;
  text-align: center;

  ${media.mobile`
    font-size: 1rem;
  `}
`

export interface SearchListProps {
  hits: [any]
  isLoading?: boolean
  isError?: boolean
  listItem: (arg0: any) => React.ReactNode
  emptyMessage?: string
  errorMessage?: string
  explanationMessage?: string
}

export const SearchList = ({
  hits,
  isLoading,
  isError,
  listItem,
  emptyMessage,
  errorMessage,
  explanationMessage,
}: SearchListProps) => (
  <>
    {hits !== null && isEmpty(hits) && !isLoading && <SearchEmpty>{emptyMessage}</SearchEmpty>}
    {isError && !isLoading && <SearchEmpty>{errorMessage}</SearchEmpty>}
    {isLoading && <Loader />}
    {!isEmpty(hits) && !isLoading && (
      <SearchListWrapper>
        <AutoSizer>
          {({ width, height }) => (
            <List
              rowRenderer={listItem({ hits })}
              rowHeight={ROW_HEIGHT}
              rowCount={hits.length}
              width={width}
              height={height}
            />
          )}
        </AutoSizer>
      </SearchListWrapper>
    )}
    <SearchExplanation>{explanationMessage}</SearchExplanation>
  </>
)
