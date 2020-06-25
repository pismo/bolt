import * as React from 'react'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { PismoCleanTheme, BoltTheme, PismoDarkTheme } from './themes'

const WebFont = require('webfontloader')
const { useContext, useReducer, useState, useEffect } = React

WebFont.load({
  google: {
    families: ['Lato']
  }
})

const mixin = require('deepmerge')

const _cleanTheme: BoltTheme = mixin(
  responsiveFontSizes(createMuiTheme()),
  PismoCleanTheme
)

const _darkTheme: BoltTheme = mixin(
  responsiveFontSizes(createMuiTheme()),
  PismoDarkTheme
)
interface IThemeState {
  themes: { [key: string]: BoltTheme }
  currentTheme: string
  registerTheme: (name: string, theme: BoltTheme) => void
  getThemes: () => string[]
  getTheme: () => BoltTheme
}

const themes = {
  clean: _cleanTheme,
  dark: _darkTheme
}

const currentTheme = 'clean'

const initialThemeState: IThemeState = {
  themes,
  currentTheme,
  registerTheme: (name: string, theme: BoltTheme) => ({ name, theme }),
  getThemes: () => [],
  getTheme: () => themes[currentTheme]
}

export interface BoltContextProps extends IThemeState {
  changeTheme: (name: string) => void
}

export const Context: React.Context<BoltContextProps> = React.createContext(
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
    setTheme(state.themes[state.currentTheme])
  }, [state.currentTheme])

  const registerTheme = (name: string, theme: BoltTheme): void => {
    dispatch({ type: 'ADD', payload: { name, theme } })
  }

  const changeTheme = (name: string): void => {
    dispatch({ type: 'CHANGE', payload: { name } })
  }

  const getThemes = (): string[] => Object.keys(state.themes)

  const getTheme = () => state.themes[state.currentTheme]

  return (
    <Context.Provider
      value={{
        themes: state.themes,
        currentTheme: state.currentTheme,
        registerTheme,
        changeTheme,
        getThemes,
        getTheme
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Context.Provider>
  )
}
