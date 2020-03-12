import * as React from 'react'

import { format, isSameDay } from 'date-fns'

import { DatePicker } from '@material-ui/pickers'
import { makeStyles } from '@material-ui/core/styles'
import DateRangeIcon from '@material-ui/icons/DateRange'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'

import { BoltTheme } from '@pismo/bolt-core'
import { TextField } from '@pismo/bolt-text-field'

import { RangeBar } from './components/RangeBar'

import enLocale from 'date-fns/locale/en-US'
import ptLocale from 'date-fns/locale/pt-BR'
import esLocale from 'date-fns/locale/es'

const locale = {
  en: enLocale,
  pt: ptLocale,
  es: esLocale
}

const { Fragment, useState } = React

const useStyles = makeStyles((theme: BoltTheme) => {
  return {
    textField: {
      color: theme.palette.colors.background['50'],
      fontWeight: 'normal',
      fontStyle: 'italic',
      fontSize: '1rem',
      '&.Mui-disabled': {
        color: theme.palette.colors.background['50']
      }
    },
    '@global': {
      '.MuiPickersCalendarHeader-switchHeader': {
        position: 'relative',
        padding: '0px',
        '&>div': {
          width: '100%',
          display: 'flex',
          padding: '0px 15px'
        }
      },
      '.MuiPickersCalendarHeader-monthTitleContainer': {
        position: 'absolute',
        justifyContent: 'center',
        '&>.MuiPickersCalendarHeader-yearSelectionSwitcher': {
          marginRight: 'unset'
        }
      },
      '.MuiPickersCalendarHeader-iconButton': {
        marginLeft: 'auto'
      },
      '.MuiPickersCalendarHeader-previousMonthButton': {
        marginLeft: 'unset'
      }
    }
  }
})

const Calendar: React.FC<any> = ({
  TextFieldProps,
  DatePickerProps: { startDate, endDate, formatType }
}) => {
  const classes = useStyles()

  const [isOpen, setIsOpen] = useState(false)
  const [_startDate, setStartDate] = useState(startDate)
  const [_endDate, setEndDate] = useState(endDate)
  const [_currentRange, setCurrentRange] = useState('')

  const isSameDate = isSameDay(_startDate, _endDate)

  const [_currentDate, setCurrentDate] = useState(getCurrentDate(_currentRange))

  console.log(_currentDate)

  const getFormat = date =>
    format(date, TextFieldProps.formatType, {
      locale: locale[TextFieldProps.language || 'en']
    })

  function getCurrentDate (_range) {
    return !isSameDate && _range === 'start' ? _startDate : _endDate
  }

  const openCalendar = () => {
    setIsOpen(true)
  }

  const closeCalendar = () => {
    setIsOpen(false)
  }

  const changeRangeBar = (currentState: string) => {
    // setCurrentRange(currentState)
    setCurrentDate(getCurrentDate(currentState))
  }

  const renderDay = (startDate, endDate, currentRange, isSameDate) => (
    day,
    selectedData,
    dayInCurrentMonth,
    dayComponent
  ) => {
    // console.log('day...',day)
    // console.log('selectedData...',selectedData)
    // console.log('dayInCurrentMonth....', dayInCurrentMonth)

    // console.log('.............................')
    // console.log(selectedData)
    // console.log(isSameDate)
    return dayComponent
  }

  return (
    <Fragment>
      <TextField
        label='selecione a data'
        value={
          isSameDate
            ? getFormat(endDate)
            : `${getFormat(startDate)} / ${getFormat(endDate)}`
        }
        InputProps={{
          classes: { input: classes.textField },
          startAdornment: (
            <InputAdornment position='start'>
              <IconButton>
                <DateRangeIcon />
              </IconButton>
            </InputAdornment>
          ),
          ...TextFieldProps.InputProps
        }}
        disabled
        onClick={openCalendar}
      />
      <DatePicker
        open={true}
        onClose={closeCalendar}
        value={_currentDate}
        onChange={date => {}}
        TextFieldComponent={() => <div />}
        showToolbar
        ToolbarComponent={() => (
          <RangeBar
            startLabel='inicio'
            endLabel='fim'
            startDate={startDate}
            endDate={endDate}
            formatType={formatType}
            onChange={changeRangeBar}
            initialRangeSelected={_currentRange}
          />
        )}
        renderDay={renderDay(_startDate, _endDate, _currentRange, isSameDate)}
      />
    </Fragment>
  )
}

export { Calendar }
