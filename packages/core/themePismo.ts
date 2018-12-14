interface Pallete {
  primary: Array<string>
  secondary: Array<string>
}

export interface ThemeInterface {
  palette: Pallete
}

const theme = {
  palette: {
    primary: ['#D6DAE2'],
    secondary: ['#576272', '#8692A6', '#fafafa'],
  },
}

export default theme
