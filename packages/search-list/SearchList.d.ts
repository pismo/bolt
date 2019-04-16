import * as React from 'react'
export interface SearchListProps {
  hits: any[]
  isLoading?: boolean
  isError?: boolean
  listItem: (arg0: any) => React.ReactNode
  emptyMessage?: string
  errorMessage?: string
  explanationMessage?: string
}
export declare const SearchList: {
  ({ hits, isLoading, isError, listItem, emptyMessage, errorMessage, explanationMessage }: SearchListProps): JSX.Element
  displayName: string
  __docgenInfo: {
    description: string
    displayName: string
    props: {
      hits: {
        defaultValue: any
        description: string
        name: string
        required: boolean
        type: {
          name: string
        }
      }
      isLoading: {
        defaultValue: any
        description: string
        name: string
        required: boolean
        type: {
          name: string
        }
      }
      isError: {
        defaultValue: any
        description: string
        name: string
        required: boolean
        type: {
          name: string
        }
      }
      listItem: {
        defaultValue: any
        description: string
        name: string
        required: boolean
        type: {
          name: string
        }
      }
      emptyMessage: {
        defaultValue: any
        description: string
        name: string
        required: boolean
        type: {
          name: string
        }
      }
      errorMessage: {
        defaultValue: any
        description: string
        name: string
        required: boolean
        type: {
          name: string
        }
      }
      explanationMessage: {
        defaultValue: any
        description: string
        name: string
        required: boolean
        type: {
          name: string
        }
      }
    }
  }
}
