import * as React from 'react'
export declare const FormWrapper: import('styled-components').StyledComponent<
  'form',
  import('@pismo/bolt-core/dist/themePismo').ThemeInterface,
  {},
  never
>
export declare const FormArea: import('styled-components').StyledComponent<
  'div',
  import('@pismo/bolt-core/dist/themePismo').ThemeInterface,
  {},
  never
>
export declare type onSubmitType = (event: React.FormEvent) => void
export interface FormHeaderProps {
  onClickBack?: () => void
  onSubmit?: onSubmitType
  title?: string
  children: React.ReactNode
}
export declare const Form: {
  ({ onClickBack, title, onSubmit, children }: FormHeaderProps): JSX.Element
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
      onSubmit: {
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
