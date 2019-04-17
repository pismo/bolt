import { ThemedGlobalStyledClassProps } from 'styled-components'
import { ThemeInterface } from './themePismo'
export declare type createGlobalStylePismoI = (customStyle: string) => ThemedGlobalStyledClassProps<{}, ThemeInterface>
export declare const baseStyle: {
  (theme: ThemeInterface): {
    fontFamily: string
    color: string
    fontsize: string
    lineHeight: string
    backgroundColor: string
    height: string
  }
  displayName: string
  __docgenInfo: {
    description: string
    displayName: string
    props: {
      background: {
        defaultValue: any
        description: string
        name: string
        required: boolean
        type: {
          name: string
        }
      }
      primary: {
        defaultValue: any
        description: string
        name: string
        required: boolean
        type: {
          name: string
        }
      }
      fontColor: {
        defaultValue: any
        description: string
        name: string
        required: boolean
        type: {
          name: string
        }
      }
      fontColorSmall: {
        defaultValue: any
        description: string
        name: string
        required: boolean
        type: {
          name: string
        }
      }
      fontFamily: {
        defaultValue: any
        description: string
        name: string
        required: boolean
        type: {
          name: string
        }
      }
      fontSizeBase: {
        defaultValue: any
        description: string
        name: string
        required: boolean
        type: {
          name: string
        }
      }
      lineHeightBase: {
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
export declare const createGlobalStylePismo: createGlobalStylePismoI
