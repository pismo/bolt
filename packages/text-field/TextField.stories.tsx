import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { TextField as ActualTextField } from './TextField'

// 'value' knob is missing because knobs values can't be set through code so far
const TextField = props => {
  const [value, setValue] = React.useState('')

  return (
    <ActualTextField
      value={value}
      onChange={e => { action('onChange')(e.target.value); setValue(e.target.value) }}
      {...props}
    />
  )
}

storiesOf('Components/TextField', module)
  .addParameters({
    info: {
      propTables: [ActualTextField],
      propTablesExclude: [TextField],
    },
  })
  .add('Usage', () => {
    const props = {
      label: text('Label', ''),
      mask: text('Mask', ''),
      placeholder: text('Placeholder', ''),
    }

    return <TextField {...props} />
  })
