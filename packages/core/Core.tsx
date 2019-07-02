import React, { useContext, useReducer, useState, useEffect } from 'react'
import { createMuiTheme, Theme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import WebFont from 'webfontloader'

import { PismoDefaultTheme } from './themes'

WebFont.load({
  google: {
    families: ['Lato']
  }
})

const mixin = require('deepmerge')

const voidTheme: Theme = createMuiTheme()
interface IThemeState {
  themes: { [key: string]: Theme }
  currentTheme: string
}

const initialThemeState: IThemeState = {
  themes: { void: voidTheme, default: PismoDefaultTheme },
  currentTheme: 'default'
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

export function Provider ({ children }) {
  const [state, dispatch] = useReducer(themeReducer, useContext(Context))
  const [theme, setTheme] = useState(state.themes[state.currentTheme])

  useEffect(() => {
    setTheme(state.themes[state.currentTheme])
  }, [state.currentTheme])

  const registerTheme = (name: string, theme: Theme): void => {
    dispatch({ type: 'ADD', payload: { name, theme } })
  }

  const changeTheme = (name: string): void => {
    dispatch({ type: 'CHANGE', payload: { name } })
  }

  console.log(theme)

  return (
    <Context.Provider
      value={{ currentTheme: state.currentTheme, registerTheme, changeTheme }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Context.Provider>
  )
}
