import * as React from 'react'
export interface TableItemProps {
  isSuspended?: boolean
  children?: React.ReactNode
}
export declare const StyledTableItem: import('styled-components').StyledComponent<
  'div',
  import('@pismo/bolt-core/dist/themePismo').ThemeInterface,
  {
    role: 'button'
  } & TableItemProps,
  'role'
>
export declare const TableItem: {
  (props: TableItemProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element
  displayName: string
  __docgenInfo: {
    description: string
    displayName: string
    props: {
      isSuspended: {
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
