import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { TextField } from './TextField'

// The text isn't being changed at the story
storiesOf('TextField', module).add('Usage', () => {
  const props = {
    label: text('Label', ''),
    mask: text('Mask', ''),
    value: text('Value', ''),
    onChange: action('onChange'),
    placeholder: text('Placeholder', ''),
  }

  return <TextField {...props} />
})
