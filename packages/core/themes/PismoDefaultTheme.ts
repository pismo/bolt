import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { shadows } from '@material-ui/system'

export const paletteExtra = {
  textField: {
    defaultColor: '#8692a6',
    errorColor: '#ff0000',
    backgroundColor: 'rgba(236, 238, 242, 0.5)'
  }
}

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
        input: {
          backgroundColor: paletteExtra.textField.backgroundColor,
          color: 'var(--input-var-color)',
          padding: '10px 10px',
          fontSize: '1.3rem',
          lineHeight: '1.8rem',
          minHeight: '30px',

          '&:focus': {
            backgroundColor: paletteExtra.textField.backgroundColor
          },

          '&:invalid': {
            color: paletteExtra.textField.errorColor
          }
        },

        error: {
          color: paletteExtra.textField.errorColor,

          borderBottom: `1px solid ${paletteExtra.textField.errorColor}`,
          transition: 'borderBottom 0.2',

          '&:hover': {
            borderBottom: `1px solid ${paletteExtra.textField.errorColor}`,
            transition: 'borderBottom 0.2'
          },

          '&$focused': {
            boxShadow: shadows[4],
            borderBottom: 'none'
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
            boxShadow: shadows[4],
            borderBottom: 'none'
          },

          '&$disabled': {
            borderBottom: `1px dashed ${paletteExtra.textField.defaultColor}`
          }
        }
      },

      MuiInputLabel: {
        root: {
          color: paletteExtra.textField.defaultColor,
          '--input-var-color': paletteExtra.textField.defaultColor,

          '&$focused': {
            color: paletteExtra.textField.defaultColor
          },

          '&$disabled': {
            color: paletteExtra.textField.defaultColor
          },

          '&$error': {
            color: paletteExtra.textField.errorColor,
            '--input-var-color': paletteExtra.textField.errorColor
          }
        },
        shrink: {
          transform: 'translate(0, -2.0px) scale(0.95)',
          color: paletteExtra.textField.defaultColor
        }
      }
    }
  })
)
