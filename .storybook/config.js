import { configure, addDecorator, addParameters } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'

import { MainTheme, InfoAddonTheme } from './theme'

addParameters({
  options: {
    name: 'Pismo Bolt',
    theme: MainTheme,
    panelPosition: 'bottom',
    showPanel: true
  }
})

addDecorator(withKnobs)
addDecorator(
  withInfo({
    inline: true,
    styles: InfoAddonTheme
  })
)

// automatically import all files ending in *.stories.js
const req = require.context('../packages', true, /.stories.tsx$/)
function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
