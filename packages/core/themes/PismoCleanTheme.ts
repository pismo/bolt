import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'
import { shadows } from '@material-ui/system'
import * as ColorJ from 'color'

interface Pallete {
  0: string
  5: string
  10: string
  15: string
  20: string
  25: string
  30: string
  35: string
  40: string
  45: string
  50: string
  55: string
  60: string
  65: string
  70: string
  75: string
  80: string
  85: string
  90: string
  95: string
  100: string
}

export interface PalleteColor {
  text: Pallete
  background: Pallete
  error: Pallete
  main: Pallete
  backgroundMain: Pallete
}

export const colors: PalleteColor = {
  text: {
    0: '#E8EBEB',
    5: '#D2D8D8',
    10: '#BCC5C5',
    15: '#A6B2B2',
    20: '#909F9F',
    25: '#7A8B8B',
    30: '#647878',
    35: '#647878',
    40: '#385252',
    45: '#223F3F',
    50: '#0C2C2C',
    55: '#0B2828',
    60: '#0A2525',
    65: '#092121',
    70: '#081D1D',
    75: '#071818',
    80: '#061414',
    85: '#051010',
    90: '#040C0C',
    95: '#030808',
    100: '#020404'
  },
  background: {
    0: '#F4F8F8',
    5: '#EAF1F1',
    10: '#DFEBEA',
    15: '#D5E4E32',
    20: '#CBDEDC',
    25: '#C0D7D5',
    30: '#B6D1CE',
    35: '#ACCAC7',
    40: '#A1C4C0',
    45: '#97BDB9',
    50: '#8DB7B3',
    55: '#81A7A3',
    60: '#749693',
    65: '#678683',
    70: '#5A7572',
    75: '#4D6462',
    80: '#415452',
    85: '#344342',
    90: '#273231',
    95: '#1A2221',
    100: '#0D1111'
  },
  error: {
    0: '#FEECEA',
    5: '#FDDAD6',
    10: '#FDC7C2',
    15: '#FCB5AE',
    20: '#FCA29A',
    25: '#FB9086',
    30: '#FB7D72',
    35: '#FA6B5E',
    40: '#FA584A',
    45: '#F94636',
    50: '#F93422',
    55: '#E3301F',
    60: '#CC2B1C',
    65: '#B62619',
    70: '#9F2216',
    75: '#881D13',
    80: '#721810',
    85: '#5B130D',
    90: '#440F0A',
    95: '#2E0A07',
    100: '#170504'
  },
  main: {
    0: '#FFF3E7',
    5: '#FFE7D0',
    10: '#FFDBB9',
    15: '#FFCFA2',
    20: '#FFC38B',
    25: '#FFB773',
    30: '#FFAB5C',
    35: '#FF9F45',
    40: '#FF932E',
    45: '#FF8717',
    50: '#FF7C00',
    55: '#E87100',
    60: '#D16600',
    65: '#BA5B00',
    70: '#A34F00',
    75: '#8C4400',
    80: '#743900',
    85: '#5D2E00',
    90: '#5D2E00',
    95: '#2F1700',
    100: '#180C00'
  },
  backgroundMain: {
    0: '#FFEEE7',
    5: '#FFDDD0',
    10: '#FFCCB9',
    15: '#FFBBA2',
    20: '#FFAA8B',
    25: '#FF9973',
    30: '#FF885C',
    35: '#FF7745',
    40: '#FF662E',
    45: '#FF5517',
    50: '#0C2C2C',
    55: '#E83F00',
    60: '#D13900',
    65: '#BA3300',
    70: '#A32C00',
    75: '#8C2600',
    80: '#742000',
    85: '#5D1A00',
    90: '#461300',
    95: '#2F0D00',
    100: '#180700'
  }
}

export const paletteExtra = {}

export interface BoltPallete extends PaletteOptions {
  colors: PalleteColor
}

export interface BoltTheme extends ThemeOptions {
  palette?: BoltPallete
}

export const PismoCleanTheme: BoltTheme = {
  typography: {
    fontFamily: 'Lato'
  },
  palette: {
    colors,
    primary: {
      main: colors.main['50'],
      contrastText: '#fff'
    },
    secondary: {
      main: colors.background['50'],
      contrastText: '#fff'
    },
    text: {
      primary: colors.text['50']
    },
    error: {
      main: colors.error['50']
    },
    background: {
      default: colors.background['50']
    }
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'unset',
        width: '100%',
        minHeight: '48px'
      },
      containedPrimary: {
        background: `linear-gradient(172.56deg, ${colors.main['50']} -0.84%, ${
          colors.backgroundMain['60']
        } 141.1%)`,
        boxShadow: shadows[4],
        '&:hover': {
          position: 'relative',
          '&::after': {
            position: 'absolute',
            content: "' '",
            width: '100%',
            height: '100%',
            background: ColorJ(colors.backgroundMain['70'])
              .alpha(0.3)
              .toString(),
            transition: 'background 0.3s'
          }
        }
      },
      containedSecondary: {
        '@global': {
          '@keyframes secondaryHover': {
            from: { background: 'transparent' },
            to: {
              background: ColorJ(colors.text['65'])
                .alpha(0.2)
                .toString()
            }
          },
          '@keyframes secondaryOut': {
            from: {
              background: ColorJ(colors.text['65'])
                .alpha(0.2)
                .toString()
            },
            to: { background: 'transparent' }
          }
        },
        position: 'relative',
        background: `linear-gradient(179.85deg, ${
          colors.background['45']
        } -46.8%, ${colors.text['65']} 240.65%)`,
        boxShadow: shadows[4],
        '&::after': {
          position: 'absolute',
          content: "' '",
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          animation: '$secondaryOut 0.2s'
        },
        '&:hover': {
          '&::after': {
            animation: '$secondaryHover 0.3s',
            background: ColorJ(colors.text['65'])
              .alpha(0.2)
              .toString()
          }
        }
      }
      //     contained: {
      //       '&$disabled': {
      //         color: paletteExtra.textField.defaultColor,
      //         background: 'unset',
      //         backgroundColor: '#fff',
      //         boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)'
      //       }
      //     }
    }

    //   MuiFormControl: {
    //     root: {
    //       width: '100%',

    //       '&$error': {
    //         backgroundColor: ColorJ(paletteExtra.error.main)
    //           .alpha(0.5)
    //           .toString()
    //       }
    //     }
    //   },

    //   MuiInput: {
    //     root: {
    //       '&$focused': {
    //         boxShadow: 'none'
    //       },
    //       '&$error': {
    //         backgroundColor: '#fff',
    //         borderBottom: `1px  solid ${paletteExtra.error.main}`
    //       }
    //     },
    //     input: {
    //       padding: '15px 10px 15px 0px',
    //       fontSize: '1.4rem',
    //       lineHeight: '1.7rem',
    //       fontWeight: 'bold',

    //       '&::placeholder': {
    //         fontStyle: 'italic'
    //       },

    //       '&$disabled': {
    //         color: paletteExtra.textField.defaultColor
    //       }
    //     },

    //     formControl: {
    //       backgroundColor: '#fff',
    //       borderBottom: 'unset',

    //       '&$disabled': {
    //         border: 'unset',
    //         '&:hover': {
    //           border: 'unset'
    //         }
    //       }
    //     }
    //   },

    //   MuiInputLabel: {
    //     root: {
    //       color: paletteExtra.background.main50,
    //       fontFamily: 'Lato',
    //       fontWeight: 'bold',

    //       '&$focused': {
    //         color: paletteExtra.background.main50
    //       },

    //       '&$error': {
    //         color: paletteExtra.background.main50
    //       },

    //       '&$disabled': {
    //         color: paletteExtra.background.main50
    //       }
    //     },
    //     shrink: {
    //       transform: 'translate(0, -2.0px) scale(0.95)'
    //     }
    //   },

    //   MuiFormHelperText: {
    //     root: {
    //       color: paletteExtra.background.main50,

    //       '&$disabled': {
    //         color: paletteExtra.background.main50
    //       }
    //     },
    //     filled: {
    //       '&$disabled': {
    //         color: paletteExtra.background.main50
    //       }
    //     }
    //   },

    //   MuiSelect: {
    //     select: {
    //       '&:focus': {
    //         backgroundColor: '#fff'
    //       }
    //     },
    //     icon: {
    //       fontSize: '2rem',
    //       color: ColorJ(paletteExtra.textField.defaultColor)
    //         .alpha(0.5)
    //         .toString(),
    //       width: '36px',
    //       height: '36px',
    //       top: 'auto'
    //     }
    //   },

    //   MuiSnackbarContent: {
    //     root: {
    //       borderRadius: '30px',
    //       '&.error': {
    //         backgroundColor: paletteExtra.error.main
    //       },
    //       '&.success': {
    //         backgroundColor: paletteExtra.success.main
    //       },
    //       '&.warning': {
    //         backgroundColor: paletteExtra.warning.main
    //       },
    //       '&.info': {
    //         backgroundColor: paletteExtra.primary.main
    //       }
    //     }
    //   },

    //   MuiExpansionPanel: {
    //     root: {
    //       '&.ExpansionMenu': {
    //         background: 'transparent',
    //         boxShadow: 'none',
    //         color: '#fff',
    //         // borderBottom: `1px solid #fff`,

    //         '&$expanded': {
    //           margin: 0
    //           // borderBottom: `1px solid ${paletteExtra.textField.defaultColor}`
    //         },

    //         '&::before': {
    //           all: 'unset'
    //         }
    //       }
    //     }
    //   },

    //   MuiExpansionPanelSummary: {
    //     root: {
    //       '&.ExpansionMenu-summary': {
    //         maxHeight: 'auto',
    //         minHeight: '0px',
    //         height: '53px',
    //         padding: '0px 10px',
    //         backgroundColor: '#fff',
    //         color: paletteExtra.textField.defaultColor,
    //         '& .ExpansionMenu-expandMoreIcon': {
    //           fill: ColorJ(paletteExtra.textField.defaultColor)
    //             .alpha(0.5)
    //             .toString()
    //         }
    //       }
    //     }
    //   },

    //   MuiExpansionPanelDetails: {
    //     root: {
    //       flexWrap: 'wrap',
    //       padding: 'unset'
    //     }
    //   },

    //   MuiMenuItem: {
    //     root: {
    //       width: '100%',
    //       padding: '6px 10px',
    //       '&.ExpansionMenu-menuItem': {
    //         background: '#fff',
    //         color: paletteExtra.textField.defaultColor,
    //         '&:hover': {
    //           backgroundColor: paletteExtra.background.main20
    //         }
    //       }
    //     }
    //   },

    //   MuiList: {
    //     root: {
    //       backgroundColor: paletteExtra.background.main
    //     }
    //   },

    //   MuiListItem: {
    //     button: {
    //       '&:hover': {
    //         backgroundColor: paletteExtra.background.main20
    //       },
    //       '&$selected': {
    //         backgroundColor: paletteExtra.primary.main,
    //         color: '#fff',
    //         '&:hover': {
    //           backgroundColor: paletteExtra.primary.main
    //         }
    //       }
    //     }
    //   },

    //   MuiAppBar: {
    //     colorPrimary: {
    //       backgroundColor: paletteExtra.background.main
    //     }
    //   },

    //   MuiAvatar: {
    //     colorDefault: {
    //       backgroundColor: paletteExtra.textField.defaultColor
    //     }
    //   },

    //   MuiSvgIcon: {
    //     root: {
    //       color: ColorJ(paletteExtra.textField.defaultColor)
    //         .alpha(0.5)
    //         .toString()
    //     }
    //   }
  }
}
