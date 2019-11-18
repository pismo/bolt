import { createMuiTheme } from '@material-ui/core/styles'
import { amber, green } from '@material-ui/core/colors'
import * as ColorJ from 'color'

export const paletteExtra = {
  primary: {
    main: '#3bb2dd'
  },
  secondary: {
    main: '#3bb2dd'
  },
  textField: {
    defaultColor: '#3B4756',
    backgroundColor: '#ECEEF2'
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
    special: '#4C4C4C',
    main: '#333238',
    special2: '#586374'
  }
}

const { shadows } = createMuiTheme()

export const PismoDefaultTheme = {
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
        default: paletteExtra.textField.backgroundColor
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
            backgroundColor: '#fff',
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
            background: paletteExtra.textField.backgroundColor,
            boxShadow: 'none',
            // borderBottom: `1px solid #fff`,

            '&$expanded': {
              margin: 0
              // borderBottom: `1px solid ${paletteExtra.textField.defaultColor}`
            },

            '&::before': {
              all: 'unset'
            }
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
              backgroundColor: paletteExtra.background.special,
              color: '#fff'
            },
            '&:hover .ExpansionMenu-expandMoreIcon': {
              fill: '#fff'
            }
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
            '&:hover': {
              backgroundColor: paletteExtra.background.special,
              color: '#fff'
            }
          }
        }
      },

      MuiListItem: {
        button: {
          '&:hover': {
            backgroundColor: paletteExtra.background.special,
            color: '#fff'
          }
        }
      },

      MuiAppBar: {
        colorPrimary: {
          backgroundColor: paletteExtra.background.main
        }
      },

      MuiAvatar: {
        colorDefault: {
          backgroundColor: paletteExtra.textField.defaultColor
        }
      }
    }
  }
