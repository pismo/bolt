/// <reference types="react" />
export interface SearchFieldInterface {
  defaultValue?: string
  placeholder?: string
  onChange: (arg0?: string) => void
}
export declare const SearchField: {
  ({ defaultValue, onChange, placeholder }: SearchFieldInterface): JSX.Element
  displayName: string
  __docgenInfo: {
    description: string
    displayName: string
    props: {
      defaultValue: {
        defaultValue: any
        description: string
        name: string
        required: boolean
        type: {
          name: string
        }
      }
      placeholder: {
        defaultValue: any
        description: string
        name: string
        required: boolean
        type: {
          name: string
        }
      }
      onChange: {
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
