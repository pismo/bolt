/// <reference types="react" />
export interface TextieldProps {
  name?: string
  flex?: string
  label: string
  field?: any
  form?: any
  error?: string
  mask?: string
  value: string | number
  onChange: (evt: any) => void
  placeholder: string
}
export declare const TextField: {
  ({ flex, label, field, mask, error, form, ...props }: TextieldProps): JSX.Element
  displayName: string
  __docgenInfo: {
    description: string
    displayName: string
    props: {
      name: {
        defaultValue: any
        description: string
        name: string
        required: boolean
        type: {
          name: string
        }
      }
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
      field: {
        defaultValue: any
        description: string
        name: string
        required: boolean
        type: {
          name: string
        }
      }
      form: {
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
      mask: {
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
    }
  }
}
