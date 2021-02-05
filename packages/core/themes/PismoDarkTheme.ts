import { shadows } from '@material-ui/system'
import * as ColorJ from 'color'

import { PalleteColor, BoltTheme } from './ColorsProps'

const colors: PalleteColor = {
  text: {
    0: '#FFFFFF',
    5: '#FFFFFF',
    10: '#FFFFFF',
    15: '#FFFFFF',
    20: '#FFFFFF',
    25: '#FFFFFF',
    30: '#FFFFFF',
    35: '#F4F4F6',
    40: '#E9E9EC',
    45: '#DEDEE3',
    50: '#D3D3DA',
    55: '#C7C7D1',
    60: '#BCBCC7',
    65: '#B1B1BE',
    70: '#A6A6B5',
    75: '#9B9BAB',
    80: '#9090A2',
    85: '#858599',
    90: '#7A7A90',
    95: '#6F6F85',
    100: '#66667A'
  },
  background: {
    0: '#FFFFFF',
    5: '#F4F4F6',
    10: '#E9E9EC',
    15: '#DEDEE3',
    20: '#D3D3DA',
    25: '#C7C8D1',
    30: '#BCBDC7',
    35: '#B1B2BE',
    40: '#A6A8B5',
    45: '#9B9DAB',
    50: '#9092A2',
    55: '#858799',
    60: '#7A7C90',
    65: '#6F7285',
    70: '#66687A',
    75: '#5D5F6F',
    80: '#545564',
    85: '#4A4C59',
    90: '#30313A',
    95: '#25262C',
    100: '#1C1C21'
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

const palette = {
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
    default: '#30313A',
    paper: '#30313A'
  }
}

export const PismoDarkTheme: BoltTheme = {
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
  palette,
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
        background: `linear-gradient(179.85deg, ${colors.text['45']} -46.8%, ${
          colors.background['90']
        } 240.65%)`,
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
        backgroundColor: colors.background['95'],
        borderBottom: `1px solid ${colors.background['100']}`,
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
        backgroundColor: palette.background.default,
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
