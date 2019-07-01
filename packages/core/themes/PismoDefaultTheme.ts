import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

export const PismoDefaultTheme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      useNextVariants: true
    },
    overrides: {
      MuiButton: {
        root: {
          backgroundColor: '#ff0000',
          color: '#ff0000'
        }
      }
    }
  })
)
