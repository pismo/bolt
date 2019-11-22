import { amber, green } from '@material-ui/core/colors'
import * as ColorJ from 'color'

export const paletteExtra = {
  primary: {
    main: '#3d7efc'
  },
  secondary: {
    main: '#3bb2dd'
  },
  textField: {
    defaultColor: '#000',
    backgroundColor: '#f2f5f8',
    backgroundSpecial: '#dddee1',
    border: '#dddee1'
  },
  error: {
    main: '#ea2d71'
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
        textTransform: 'unset',
        borderRadius: '6px',
        width: '100%',
        minHeight: '48px'
      }
    },

    MuiFormControl: {
      root: {
        width: '100%'
      }
    },

    MuiInput: {
      root: {
        '&$focused': {
          boxShadow: 'none'
        }
      },
      input: {
        padding: '15px 10px',
        fontSize: '1rem',
        lineHeight: '1.3rem',

        '&$disabled': {
          color: ColorJ(paletteExtra.textField.defaultColor)
            .fade(0.5)
            .string()
        }
      },

      formControl: {
        backgroundColor: paletteExtra.textField.backgroundColor,
        border: `1px solid ${paletteExtra.textField.border}`,
        borderRadius: '6px',

        '&$disabled': {
          border: `1px dashed ${paletteExtra.textField.border}`,
          '&:hover': {
            border: `1px dashed ${paletteExtra.textField.border}`
          }
        }
      }
    },

    MuiInputLabel: {
      root: {
        color: paletteExtra.textField.defaultColor,
        fontWeight: 'bold',

        '&$focused': {
          color: paletteExtra.textField.defaultColor
        },

        '&$error': {
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
      root: {
        color: ColorJ(paletteExtra.textField.defaultColor)
          .fade(0.5)
          .string(),

        '&$disabled': {
          color: ColorJ(paletteExtra.textField.defaultColor)
            .fade(0.5)
            .string()
        }
      },
      filled: {
        '&$disabled': {
          color: ColorJ(paletteExtra.textField.defaultColor)
            .fade(0.5)
            .string()
        }
      }
    },

    MuiSelect: {
      icon: {
        fontSize: '2rem',
        color: paletteExtra.textField.defaultColor,
        width: '36px',
        height: '36px',
        top: 'auto'
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

    MuiList: {
      root: {
        backgroundColor: paletteExtra.textField.backgroundSpecial
      }
    },

    MuiListItem: {
      button: {
        '&:hover': {
          backgroundColor: ColorJ(paletteExtra.textField.backgroundSpecial)
            .darken(0.2)
            .hex()
            .toString()
        },
        '&$selected': {
          backgroundColor: paletteExtra.primary.main,
          color: '#fff',
          '&:hover': {
            backgroundColor: paletteExtra.primary.main
          }
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
