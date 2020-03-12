import * as React from 'react'

import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsAdapter from '@material-ui/pickers/adapter/date-fns'
import { eachDayOfInterval, startOfWeek, endOfWeek } from 'date-fns'

import enLocale from 'date-fns/locale/en-US'
import ptLocale from 'date-fns/locale/pt-BR'
import esLocale from 'date-fns/locale/es'

const locale = {
  en: enLocale,
  pt: ptLocale,
  es: esLocale
}

export interface PickerUtilsProviderProps {
  language?: 'en' | 'pt' | 'es'
}

class Adapter extends DateFnsAdapter {
  getWeekdays () {
    let now = new Date()
    return eachDayOfInterval({
      start: startOfWeek(now, { locale: this.locale }),
      end: endOfWeek(now, { locale: this.locale })
    }).map(day => this.formatByString(day, 'E..EEE'))
  }
}

const PickerUtilsProvider: React.FC<PickerUtilsProviderProps> = ({
  children,
  language = 'en'
}) => {
  return (
    <MuiPickersUtilsProvider utils={Adapter} locale={locale[language]}>
      {children}
    </MuiPickersUtilsProvider>
  )
}

export { PickerUtilsProvider }
