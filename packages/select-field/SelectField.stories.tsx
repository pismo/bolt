import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { SelectField as ActualSelectField } from './SelectField'

// 'value' knob is missing because knobs values can't be set through code so far
const SelectField = props => {
  const [value, setValue] = React.useState('')

  return (
    <ActualSelectField
      value={value}
      onChange={e => {
        action('onChange')(e.target.value)
        setValue(e.target.value)
      }}
      {...props}
    />
  )
}

storiesOf('Components/SelectField', module)
  .addParameters({
    info: {
      propTables: [ActualSelectField],
      propTablesExclude: [SelectField],
    },
  })
  .add('Usage', () => {
    const options = [{ label: 'Active', value: 'active' }, { label: 'Deactive', value: 'deactivate' }]

    const props = {
      label: text('Label', ''),
      name: text('Name', 'SelectField'),
      field: text('Field', ''),
      placeholder: text('Placeholder', ''),
      options,
    }

    return <SelectField {...props} />
  })
