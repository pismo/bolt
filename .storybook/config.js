import { configure, addDecorator, addParameters } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'

addParameters({
  options: {
    name: 'Bolt',
    addonPanelInRight: true,
  },
})

addDecorator(withKnobs)
addDecorator(withInfo)

// automatically import all files ending in *.stories.js
const req = require.context('../packages', true, /.stories.tsx$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
