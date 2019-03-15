import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { SearchField } from './SearchField'

storiesOf('SearchField', module).add('Usage', () => {
  const props = {
    defaultValue: text('Default Value', ''),
    onChange: action('onChange'),
    placeholder: text('Placeholder', ''),
  }

  return <SearchField {...props}> My SearchField </SearchField>
})
