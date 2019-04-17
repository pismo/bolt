import * as React from 'react'
export interface TypeButtonProps {
  secondary?: boolean
  children?: React.ReactNode
}
export declare const Button: {
  (props: TypeButtonProps & React.HTMLAttributes<HTMLButtonElement>): JSX.Element
  displayName: string
  __docgenInfo: {
    description: string
    displayName: string
    props: {
      secondary: {
        defaultValue: {
          value: string
        }
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
