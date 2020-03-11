import * as React from 'react'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'

import * as DateFnsUtils from '@material-ui/pickers/adapter/date-fns'

import { PismoCleanTheme, BoltTheme } from './themes'

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
interface IThemeState {
  themes: { [key: string]: BoltTheme }
  currentTheme: string
  registerTheme: (name: string, theme: BoltTheme) => void
  getThemes: () => string[]
}

const initialThemeState: IThemeState = {
  themes: {
    clean: _cleanTheme
  },
  currentTheme: 'clean',
  registerTheme: (name: string, theme: BoltTheme) => ({ name, theme }),
  getThemes: () => []
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

  return (
    <Context.Provider
      value={{
        themes: state.themes,
        currentTheme: state.currentTheme,
        registerTheme,
        changeTheme,
        getThemes
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          {children}
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </Context.Provider>
  )
}
