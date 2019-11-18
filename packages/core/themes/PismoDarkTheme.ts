import { createMuiTheme } from '@material-ui/core/styles'
import { amber, green } from '@material-ui/core/colors'
import * as ColorJ from 'color'

export const paletteExtra = {
  primary: {
    main: '#644DF7'
  },
  secondary: {
    main: '#FE6833'
  },
  textField: {
    defaultColor: '#8692a6',
    backgroundColor: '#fff'
  },
  error: {
    main: '#ff0000'
  },
  success: {
    main: green[600]
  },
  warning: {
    main: amber[700]
  },
  background: {
    main: '#333238',
    special: '#231d22'
  }
}

const { shadows } = createMuiTheme()

export const PismoDarkTheme = {
  typography: {
    fontFamily: 'Lato'
  },
  palette: {
    primary: {
      main: paletteExtra.primary.main,
      contrastText: '#fff'
    },
    secondary: {
      main: paletteExtra.secondary.main,
      contrastText: '#fff'
    },
    text: {
      primary: paletteExtra.textField.defaultColor
    },
    error: {
      main: paletteExtra.error.main
    },
    background: {
      paper: paletteExtra.background.main,
      default: paletteExtra.background.special
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
        padding: '10px 10px',
        fontSize: '1.3rem',
        lineHeight: '1.8rem',
        minHeight: '30px',

        '&$disabled': {
          color: ColorJ(paletteExtra.textField.defaultColor)
            .fade(0.3)
            .string()
        }
      },

      formControl: {
        backgroundColor: paletteExtra.textField.backgroundColor,
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
          color: ColorJ(paletteExtra.textField.defaultColor)
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
          color: ColorJ(paletteExtra.textField.defaultColor)
            .fade(0.3)
            .string()
        }
      }
    },

    MuiSnackbarContent: {
      root: {
        color: '#fff',
        borderRadius: '30px',
        '&.error': {
          backgroundColor: paletteExtra.error.main
        },
        '&.success': {
          backgroundColor: paletteExtra.success.main
        },
        '&.warning': {
          backgroundColor: paletteExtra.warning.main
        },
        '&.info': {
          backgroundColor: paletteExtra.primary.main
        }
      }
    },

    MuiExpansionPanel: {
      root: {
        '&.ExpansionMenu': {
          background: paletteExtra.background.main,
          boxShadow: 'none'
          // borderBottom: `1px solid #fff`
        },

        '&$expanded': {
          margin: 0
        },

        '&::before': {
          all: 'unset'
        }
      }
    },

    MuiExpansionPanelSummary: {
      root: {
        '&.ExpansionMenu-summary': {
          maxHeight: 'auto',
          minHeight: '0px',
          height: '53px',
          padding: '0px 10px',
          '&:hover': {
            backgroundColor: ColorJ(paletteExtra.background.main)
              .lighten(0.3)
              .hex()
          }
        }
      }
    },

    MuiSvgIcon: {
      root: {
        '&.ExpansionMenu-expandMoreIcon': {
          fill: '#fff'
        }
      }
    },

    MuiExpansionPanelDetails: {
      root: {
        flexWrap: 'wrap',
        padding: 'unset'
      }
    },

    MuiMenuItem: {
      root: {
        width: '100%',
        padding: '6px 10px',
        '&.ExpansionMenu-menuItem': {
          color: '#fff',
          '&:hover': {
            backgroundColor: ColorJ(paletteExtra.background.main)
              .lighten(0.3)
              .hex()
          }
        }
      }
    },

    MuiListItem: {
      button: {
        '&:hover': {
          backgroundColor: ColorJ(paletteExtra.background.main)
            .lighten(0.3)
            .hex(),
          color: '#fff'
        }
      }
    },

    MuiAppBar: {
      colorPrimary: {
        backgroundColor: paletteExtra.background.main
      }
    }
  }
}
