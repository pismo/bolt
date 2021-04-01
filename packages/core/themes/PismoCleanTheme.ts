import { shadows } from '@material-ui/system'
import * as ColorJ from 'color'

import { PalleteColor, BoltTheme } from './ColorsProps'

const colors: PalleteColor = {
  text: {
    0: '#1A1A22',
    5: '#525061',
    10: '#000',
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
    15: '#D5E4E3',
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

export const PismoCleanTheme: BoltTheme = {
  typography: {
    fontFamily: 'Lato',
    h1: { fontFamily: 'Lato' },
    h2: { fontFamily: 'Lato' },
    h3: { fontFamily: 'Lato' },
    h4: { fontFamily: 'Lato' },
    h5: { fontFamily: 'Lato' },
    h6: { fontFamily: 'Lato' },
    subtitle1: { fontFamily: 'Lato' },
    subtitle2: { fontFamily: 'Lato' },
    body1: { fontFamily: 'Lato' },
    body2: { fontFamily: 'Lato' },
    button: { fontFamily: 'Lato' },
    caption: { fontFamily: 'Lato' },
    overline: { fontFamily: 'Lato' }
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
      default: '#fff',
      paper: '#fff'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '.MuiAutocomplete-root': {
          height: '100%'
        },
        '.MuiAutocomplete-inputRoot .MuiAutocomplete-input': {
          display: 'flex',
          boxSizing: 'border-box',
          height: '100%!important'
        }
      }
    },
    MuiButton: {
      root: {
        '--hover-bg': ColorJ('#000')
          .alpha(0.1)
          .toString(),
        textTransform: 'unset',
        width: '100%',
        minHeight: '48px',
        '&::after': {
          position: 'absolute',
          content: "' '",
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          animation: '$onOut 0.2s'
        },
        '&:hover': {
          '&::after': {
            animation: '$onHover 0.3s',
            background: 'var(--hover-bg)'
          }
        },
        '@global': {
          '@keyframes onHover': {
            from: { background: 'transparent' },
            to: {
              background: 'var(--hover-bg)'
            }
          },
          '@keyframes onOut': {
            from: {
              background: 'var(--hover-bg)'
            },
            to: { background: 'transparent' }
          }
        }
      },
      contained: {
        '&:hover': {
          boxShadow: shadows[4]
        },
        '&$disabled': {
          color: colors.background['50'],
          background: 'unset',
          backgroundColor: '#fff'
        }
      },
      containedPrimary: {
        background: `linear-gradient(172.56deg, ${colors.main['50']} -0.84%, ${
          colors.backgroundMain['60']
        } 141.1%)`,
        boxShadow: shadows[4]
      },
      containedSecondary: {
        position: 'relative',
        background: `linear-gradient(179.85deg, ${
          colors.background['45']
        } -46.8%, ${colors.text['65']} 240.65%)`,
        boxShadow: shadows[4]
      }
    },

    MuiFormControl: {
      root: {
        width: '100%',
        height: '100%'
      }
    },

    MuiInput: {
      root: {
        color: colors.text['50'],
        '&$focused': {
          boxShadow: 'none'
        },
        '&$error': {
          backgroundColor: '#fff',
          color: colors.error['50']
        }
      },
      input: {
        backgroundColor: colors.background['5'],
        borderBottom: `1px solid ${colors.text['50']}`,
        padding: '15px 10px 15px 10px',
        fontSize: '1.4rem',
        lineHeight: '1.7rem',
        fontWeight: 'bold',

        '&::placeholder': {
          fontStyle: 'italic',
          fontWeight: 'normal',
          color: colors.background['50'],
          opacity: 'unset'
        },

        '&$disabled': {
          color: colors.text['50']
        }
      },

      formControl: {
        backgroundColor: '#fff',
        borderBottom: 'unset',
        height: '100%',

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
        color: colors.background['50'],
        fontFamily: 'Lato',
        fontWeight: 'bold',

        '&$focused': {
          color: colors.background['50']
        },

        '&$error': {
          color: colors.error['30']
        },

        '&$disabled': {
          color: colors.background['50']
        }
      },
      shrink: {
        transform: 'translate(0, -2.0px) scale(0.95)'
      }
    },

    MuiFormHelperText: {
      root: {
        color: colors.background['50'],

        '&$disabled': {
          color: colors.background['50']
        },

        '&$error': {
          color: colors.error['30']
        }
      },
      filled: {
        '&$disabled': {
          color: colors.background['50']
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
        color: colors.background['50'],
        width: '36px',
        height: '36px',
        top: 'auto'
      }
    },

    MuiSnackbarContent: {
      root: {
        borderRadius: '30px',
        '&.error': {
          backgroundColor: colors.error['40']
        },
        '&.success': {
          backgroundColor: colors.background['50']
        },
        '&.warning': {
          backgroundColor: colors.main['30']
        },
        '&.info': {
          backgroundColor: '#fff',
          color: colors.text['50']
        },

        '& .success-icon': {
          fill: '#fff'
        },
        '& .warning-icon': {
          fill: '#fff'
        },
        '& .error-icon': {
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
        padding: '6px 10px'
      }
    },

    MuiListItem: {
      button: {
        '&:hover': {
          backgroundColor: colors.background['20']
        },
        '&$selected': {
          backgroundColor: colors.main['50'],
          color: '#fff',
          '&:hover': {
            backgroundColor: colors.main['50']
          }
        }
      }
    },

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

    MuiSvgIcon: {
      root: {
        color: colors.background['50']
      }
    }
  }
}
