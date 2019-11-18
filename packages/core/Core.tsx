import * as React from 'react'
import { createMuiTheme, responsiveFontSizes, Theme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import {
  PismoDefaultTheme,
  PismoDarkTheme,
  paletteExtraDark,
  paletteExtraDefault
} from './themes'

const WebFont = require('webfontloader')
const { useContext, useReducer, useState, useEffect } = React

WebFont.load({
  google: {
    families: ['Lato']
  }
})

const mixin = require('deepmerge')

const voidTheme: Theme = responsiveFontSizes(createMuiTheme())
const _defaultTheme: Theme = mixin(responsiveFontSizes(createMuiTheme()), PismoDefaultTheme)
const _darkTheme: Theme = mixin(responsiveFontSizes(createMuiTheme()), PismoDarkTheme)
interface IThemeState {
  themes: { [key: string]: Theme }
  paletteExtra: { [key: string]: any }
  currentTheme: string,
  registerTheme: (name: string, theme: Theme) => void,
  getThemes: () => string[],
  getPalette: () => any
}

const initialThemeState: IThemeState = {
  themes: { void: voidTheme, default: _defaultTheme, dark: _darkTheme },
  paletteExtra: { default: paletteExtraDefault, dark: paletteExtraDark },
  currentTheme: 'default',
  registerTheme: (name: string, theme: Theme) => ({name, theme}),
  getThemes: () => [],
  getPalette: () => {}
}

export const Context: React.Context<any> = React.createContext(
  mixin({}, initialThemeState)
)

const themeReducer = (state: IThemeState, action): IThemeState => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        themes: { ...state.themes, [action.payload.name]: action.payload.theme }
      }
    case 'CHANGE':
      return {
        ...state,
        currentTheme: action.payload.name
      }
    default:
      return state
  }
}

export function Bolt ({ children }) {
  const [state, dispatch] = useReducer(themeReducer, useContext(Context))
  const [theme, setTheme] = useState(state.themes[state.currentTheme])  

  useEffect(() => {
    console.log('current: ', state.currentTheme)
    console.log('theme....',state.themes[state.currentTheme])
    setTheme(state.themes[state.currentTheme])
  }, [state.currentTheme])

  console.log(theme)

  const registerTheme = (name: string, theme: Theme): void => {
    dispatch({ type: 'ADD', payload: { name, theme } })
  }

  const changeTheme = (name: string): void => {
    dispatch({ type: 'CHANGE', payload: { name } })
  }

  const getThemes = (): string[] => Object.keys(state.themes)

  const getPalette = (): any =>
    state.paletteExtra[state.currentTheme]
      ? state.paletteExtra[state.currentTheme]
      : state.paletteExtra['default']

  return (
    <Context.Provider
      value={{
        currentTheme: state.currentTheme,
        registerTheme,
        changeTheme,
        getThemes,
        getPalette
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Context.Provider>
  )
}
