import * as React from 'react'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import InputAdornment from '@material-ui/core/InputAdornment'
import Calendar from ''

const { useState } = React

interface LocaleMap {
  [key: string]: Locale
}

interface CalendarProps {
  localeMap: LocaleMap
  language: keyof LocaleMap
  label?: string
  format?: string
  withIcon?: boolean
  iconPosition?: 'end' | 'start'
}

const Calendar: React.FC<CalendarProps> = ({
  localeMap,
  language,
  label,
  format,
  withIcon,
  iconPosition = 'start'
}: CalendarProps) => {
  const [selectedDate, handleDateChange] = useState(new Date())
  const change = date => {
    handleDateChange(date)
  }
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap[language]}>
      <DatePicker
        variant='inline'
        value={selectedDate}
        onChange={change}
        label={label}
        format={format}
        InputProps={
          withIcon
            ? iconPosition === 'start'
              ? { startAdornment: <InputAdornment position='start' /> }
              : {}
            : {}
        }
      />
    </MuiPickersUtilsProvider>
  )
}

export { Calendar }
