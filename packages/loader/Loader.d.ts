import * as React from 'react'
interface LoaderProps {
  size?: string
  children?: React.ReactNode
}
export declare const StyledLoader: import('styled-components').StyledComponent<
  'div',
  import('@pismo/bolt-core/dist/themePismo').ThemeInterface,
  LoaderProps,
  never
>
export declare const Loader: {
  (props: LoaderProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element
  displayName: string
  __docgenInfo: {
    description: string
    displayName: string
    props: {
      size: {
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
export {}
