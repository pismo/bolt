import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

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
      }
    },
    overrides: {
      MuiButton: {
        root: {}
      }
    }
  })
)
