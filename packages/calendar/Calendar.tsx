import * as React from 'react'

import { DatePicker } from '@material-ui/pickers'

import { TextField } from '@pismo/bolt-text-field'

const { Fragment, useState } = React

const Calendar: React.FC = ({ TextFieldProps }) => {
  return (
    <Fragment>
      <TextField label='selecione a data' value={TextField.value} />
      <DatePicker
        label='Basic example'
        value={selectedDate}
        onChange={date => handleDateChange(date)}
        TextFieldComponent={() => <div />}
      />
    </Fragment>
  )
}

export { Calendar }
