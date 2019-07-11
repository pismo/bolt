import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import * as Color from 'color'

export const paletteExtra = {
  textField: {
    defaultColor: '#8692a6',
    backgroundColor: 'rgba(236, 238, 242, 0.5)'
  },
  error: {
    main: '#ff0000'
  }
}

const { shadows } = createMuiTheme()

export const PismoDefaultTheme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: 'Lato'
    },
    palette: {
      primary: {
        main: '#3bb2dd',
        contrastText: '#fff'
      },
      secondary: {
        main: '#ec3853',
        contrastText: '#fff'
      },
      text: {
        primary: paletteExtra.textField.defaultColor
      },
      error: {
        main: paletteExtra.error.main
      }
    },
    overrides: {
      MuiButton: {
        root: {
          textTransform: 'unset'
        }
      },

      MuiFormControl: {
        root: {
          width: '100%'
        }
      },

      MuiInput: {
        root: {
          '&$error': {
            color: paletteExtra.error.main,
            borderBottom: `1px solid ${paletteExtra.error.main}`,
            transition: 'borderBottom 0.2',

            '&:hover': {
              borderBottom: `1px solid ${paletteExtra.error.main}`,
              transition: 'borderBottom 0.2'
            },

            '&$focused': {
              borderBottom: 'none'
            }
          },

          '&$focused': {
            boxShadow: shadows[4],
            borderBottom: 'none'
          }
        },
        input: {
          backgroundColor: paletteExtra.textField.backgroundColor,
          padding: '10px 10px',
          fontSize: '1.3rem',
          lineHeight: '1.8rem',
          minHeight: '30px',

          '&$disabled': {
            color: Color(paletteExtra.textField.defaultColor)
              .fade(0.3)
              .string()
          }
        },

        formControl: {
          borderBottom: `1px solid ${paletteExtra.textField.defaultColor}`,
          transition: 'borderBottom 0.2',

          '&:hover': {
            borderBottom: `1px solid ${paletteExtra.textField.defaultColor}`,
            transition: 'borderBottom 0.2'
          },

          '&$focused': {
            borderBottom: 'none'
          },

          '&$disabled': {
            borderBottom: `1px dashed ${paletteExtra.textField.defaultColor}`,
            '&:hover': {
              borderBottom: `1px dashed ${paletteExtra.textField.defaultColor}`
            }
          }
        }
      },

      MuiInputLabel: {
        root: {
          color: paletteExtra.textField.defaultColor,

          '&$focused': {
            color: paletteExtra.textField.defaultColor
          },

          '&$disabled': {
            color: Color(paletteExtra.textField.defaultColor)
              .fade(0.3)
              .string()
          }
        },
        shrink: {
          transform: 'translate(0, -2.0px) scale(0.95)'
        }
      },

      MuiFormHelperText: {
        filled: {
          '&$disabled': {
            color: Color(paletteExtra.textField.defaultColor)
              .fade(0.3)
              .string()
          }
        }
      }
    }
  })
)
