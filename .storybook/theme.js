import { create } from '@storybook/theming'

export const MainTheme = create({
  base: 'light',
  colorSecondary: 'rgb(243, 122, 33)',

  fontBase: '"Open Sans Pro", Helvetica, sans-serif',
  fontCode: 'monospace',

  barSelectedColor: 'rgb(243, 122, 33)',

  brandTitle: 'Pismo Bolt',
})

export const InfoAddonTheme = stylesheet => ({
  ...stylesheet,
  infoBody: {
    ...stylesheet.infoBody,
    // backgroundColor: '#404040',
    // border: 'none',
    color: '#484848',
  },
})
