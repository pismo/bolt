/// <reference types="react" />
export interface Option {
  label: string
  value: string
}
export interface SelectFieldProps {
  flex?: string
  label: string
  name: string
  error?: string
  value: string | number
  field?: any
  onChange: (evt: any) => void
  placeholder: string
  options: Option[]
}
export declare const SelectField: {
  ({ flex, label, error, field, options, ...props }: SelectFieldProps): JSX.Element
  displayName: string
  __docgenInfo: {
    description: string
    displayName: string
    props: {
      flex: {
        defaultValue: any
        description: string
        name: string
        required: boolean
        type: {
          name: string
        }
      }
      label: {
        defaultValue: any
        description: string
        name: string
        required: boolean
        type: {
          name: string
        }
      }
      name: {
        defaultValue: any
        description: string
        name: string
        required: boolean
        type: {
          name: string
        }
      }
      error: {
        defaultValue: any
        description: string
        name: string
        required: boolean
        type: {
          name: string
        }
      }
      value: {
        defaultValue: any
        description: string
        name: string
        required: boolean
        type: {
          name: string
        }
      }
      field: {
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
      placeholder: {
        defaultValue: any
        description: string
        name: string
        required: boolean
        type: {
          name: string
        }
      }
      options: {
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
