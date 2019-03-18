import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { SelectField } from './SelectField'

// The select value isn't being changed at the story
storiesOf('SelectField', module).add('Usage', () => {
  const options = [{ label: 'Active', value: 'active' }, { label: 'Deactive', value: 'deactivate' }]

  const props = {
    label: text('Label', ''),
    name: text('Name', 'SelectField'),
    value: text('Value', ''),
    field: text('Field', ''),
    onChange: action('onChange'),
    placeholder: text('Placeholder', ''),
    options,
  }

  return <SelectField {...props} />
})
