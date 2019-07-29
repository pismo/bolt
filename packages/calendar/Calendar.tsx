import * as React from 'react'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

const { useState } = React

interface LocaleMap {
  [key: string]: any
}

interface CalendarProps {
  localeMap: LocaleMap[]
  language: keyof LocaleMap
}

const Calendar: React.FC<CalendarProps> = ({
  localeMap,
  language
}: CalendarProps) => {
  const [selectedDate, handleDateChange] = useState(new Date())
  const change = date => {
    handleDateChange(date)
  }
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap[language]}>
      <DatePicker variant='inline' value={selectedDate} onChange={change} />
    </MuiPickersUtilsProvider>
  )
}

export { Calendar }
