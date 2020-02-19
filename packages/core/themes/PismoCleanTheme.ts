import { amber, green } from '@material-ui/core/colors'
import * as ColorJ from 'color'

export const paletteExtra = {
  primary: {
    main: '#FF7C00',
    mainDark: '#CD3700'
  },
  secondary: {
    main: '#2BA0A0',
    mainDark: '#0C2C2C'
  },
  textField: {
    defaultColor: '#185858',
    backgroundColor: '#f2f5f8',
    backgroundSpecial: '#dddee1',
    border: '#dddee1'
  },
  error: {
    main: '#F95E4D'
  },
  success: {
    main: green[600]
  },
  warning: {
    main: amber[700]
  },
  background: {
    special: '#fff',
    main: '#fff',
    main05: '#EAF1F1',
    main10: '#DFEBEA',
    main20: '#CBDEDC',
    main50: '#8DB7B3',
    special2: '#586374'
  }
}

export const PismoCleanTheme = {
  typography: {
    fontFamily: 'Lato'
  },
  palette: {
    extra: paletteExtra,
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
      default: paletteExtra.background.main
    }
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'unset',
        borderRadius: '6px',
        width: '100%',
        minHeight: '48px'
      },
      containedPrimary: {
        background: `linear-gradient(161.78deg, ${
          paletteExtra.primary.main
        } 9.17%, ${paletteExtra.primary.mainDark} 126.68%)`
      },
      containedSecondary: {
        background: `linear-gradient(161.78deg, ${
          paletteExtra.secondary.main
        } 9.17%, ${paletteExtra.secondary.mainDark} 126.68%)`
      },
      contained: {
        '&$disabled': {
          color: paletteExtra.textField.defaultColor,
          background: 'unset',
          backgroundColor: '#fff',
          boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)'
        }
      }
    },

    MuiFormControl: {
      root: {
        width: '100%',

        '&$error': {
          backgroundColor: ColorJ(paletteExtra.error.main)
            .alpha(0.5)
            .toString()
        }
      }
    },

    MuiInput: {
      root: {
        '&$focused': {
          boxShadow: 'none'
        },
        '&$error': {
          backgroundColor: '#fff',
          borderBottom: `1px  solid ${paletteExtra.error.main}`
        }
      },
      input: {
        padding: '15px 10px 15px 0px',
        fontSize: '1.4rem',
        lineHeight: '1.7rem',
        fontWeight: 'bold',

        '&::placeholder': {
          fontStyle: 'italic'
        },

        '&$disabled': {
          color: paletteExtra.textField.defaultColor
        }
      },

      formControl: {
        backgroundColor: '#fff',
        borderBottom: 'unset',

        '&$disabled': {
          border: 'unset',
          '&:hover': {
            border: 'unset'
          }
        }
      }
    },

    MuiInputLabel: {
      root: {
        color: paletteExtra.background.main50,
        fontFamily: 'Lato',
        fontWeight: 'bold',

        '&$focused': {
          color: paletteExtra.background.main50
        },

        '&$error': {
          color: paletteExtra.background.main50
        },

        '&$disabled': {
          color: paletteExtra.background.main50
        }
      },
      shrink: {
        transform: 'translate(0, -2.0px) scale(0.95)'
      }
    },

    MuiFormHelperText: {
      root: {
        color: paletteExtra.background.main50,

        '&$disabled': {
          color: paletteExtra.background.main50
        }
      },
      filled: {
        '&$disabled': {
          color: paletteExtra.background.main50
        }
      }
    },

    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: '#fff'
        }
      },
      icon: {
        fontSize: '2rem',
        color: ColorJ(paletteExtra.textField.defaultColor)
          .alpha(0.5)
          .toString(),
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
          background: 'transparent',
          boxShadow: 'none',
          color: '#fff',
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
          backgroundColor: '#fff',
          color: paletteExtra.textField.defaultColor,
          '& .ExpansionMenu-expandMoreIcon': {
            fill: ColorJ(paletteExtra.textField.defaultColor)
              .alpha(0.5)
              .toString()
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
          background: '#fff',
          color: paletteExtra.textField.defaultColor,
          '&:hover': {
            backgroundColor: paletteExtra.background.main20
          }
        }
      }
    },

    MuiList: {
      root: {
        backgroundColor: paletteExtra.background.main
      }
    },

    MuiListItem: {
      button: {
        '&:hover': {
          backgroundColor: paletteExtra.background.main20
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
    },

    MuiSvgIcon: {
      root: {
        color: ColorJ(paletteExtra.textField.defaultColor)
          .alpha(0.5)
          .toString()
      }
    }
  }
}
