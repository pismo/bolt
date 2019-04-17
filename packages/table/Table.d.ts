import * as React from 'react'
export interface TableProps {
  onClickBack?: () => void
  title?: string
  children: React.ReactNode
}
export declare const Table: {
  ({ onClickBack, title, children }: TableProps): JSX.Element
  displayName: string
  __docgenInfo: {
    description: string
    displayName: string
    props: {
      onClickBack: {
        defaultValue: any
        description: string
        name: string
        required: boolean
        type: {
          name: string
        }
      }
      title: {
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
