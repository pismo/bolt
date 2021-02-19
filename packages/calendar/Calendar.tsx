import * as React from 'react'

import {
  format,
  isSameDay,
  getMonth,
  getYear,
  compareDesc,
  Duration,
  add,
  isEqual,
  isWithinInterval
} from 'date-fns'

import { makeStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu'
import Fade from '@material-ui/core/Fade'

import { FirstHeader } from './components/FirstHeader'

import { DaysContainer } from './components/DaysContainer'
import { RangeBar } from './components/RangeBar'
import { SwitchBar } from './components/SwitchBar'
import { MonthContainer } from './components/MonthContainer'
import { YearContainer } from './components/YearContainer'

import enLocale from 'date-fns/locale/en-US'
import ptLocale from 'date-fns/locale/pt-BR'
import esLocale from 'date-fns/locale/es'

export const locale = {
  en: enLocale,
  pt: ptLocale,
  es: esLocale
}

const { Fragment, useState, useRef, useEffect } = React

const useStyles = makeStyles(() => {
  return {
    pickerContainer: {
      width: '300px'
    }
  }
})

export interface TextFieldProps {
  formatType?: string
  label?: string
}

export interface DatePickerProps {
  startDate: Date
  endDate?: Date
  noRange?: boolean
  limitRange?: Duration
  onChange?: (result: { startDate: Date; endDate?: Date }) => void
}

export interface RangeBarProps {
  formatType: string
  startLabel?: string
  endLabel?: string
}

export interface CalendarProps {
  DatePickerProps: DatePickerProps
  RangeBarProps: RangeBarProps
  TextFieldProps?: TextFieldProps
  language?: 'en' | 'es' | 'pt'
}

const Calendar: React.FC<CalendarProps> = ({
  DatePickerProps,
  RangeBarProps,
  TextFieldProps = {},
  language = 'en'
}: CalendarProps) => {
  const classes = useStyles()

  let { startDate, endDate, onChange, noRange, limitRange } = DatePickerProps
  let { formatType, startLabel, endLabel } = RangeBarProps

  if (language.length < 2) language = 'en'

  const [isOpen, setIsOpen] = useState(false)
  const [_startDate, setStartDate] = useState(startDate)
  const [_endDate, setEndDate] = useState(!noRange ? endDate : startDate)
  const [currentRange, setCurrentRange] = useState('start')

  const [monthList, setMonthList] = useState<string[]>([])
  const [currentMonthIndex, setCurrentMonthIndex] = useState(
    getMonth(_startDate)
  )

  const [yearList, setYearList] = useState({})
  const [currentYearIndex, setCurrentYearIndex] = useState(getYear(_startDate))

  const [currentView, setCurrentView] = useState<'days' | 'months' | 'years'>(
    'days'
  )

  const isSameDate = isSameDay(_startDate, _endDate)

  const [headerElem, setHeaderElem] = useState(null)
  const headerRef = useRef<any>()

  useEffect(() => {
    const years = {}
    Array(200)
      .fill(null)
      .map((_, i) => (years[1900 + i] = 1900 + i))
    setYearList(years)
  }, [])

  useEffect(() => {
    if (headerRef.current && !headerElem) setHeaderElem(headerRef.current)
  }, [headerRef.current])

  useEffect(() => {
    setMonthList(
      Array(12)
        .fill(null)
        .map((_, i) => locale[language].localize.month(i))
    )
  }, [language])

  useEffect(() => {
    if (onChange) onChange({ startDate: _startDate, endDate: _endDate })
  }, [_startDate, _endDate])

  const getFormat = date =>
    format(date, TextFieldProps.formatType || 'dd - MMM - yyyy', {
      locale: locale[language || 'en']
    })

  const openCalendar = () => {
    setIsOpen(true)
  }

  const closeCalendar = () => {
    setIsOpen(false)
  }

  const changeRange = (name: string) => {
    setCurrentRange(name)

    let _date = name === 'start' ? _startDate : _endDate

    changeMonth(getMonth(_date))
    changeYear(getYear(_date))
  }

  const changeDate = (selected: Date) => {
    if (noRange) {
      setStartDate(selected)
      setEndDate(selected)

      return
    }

    let _start = _startDate
    let _end = _endDate

    if (currentRange === 'start') {
      if (compareDesc(selected, _endDate) >= 0) {
        _start = selected
      } else {
        _start = _endDate
        _end = selected
      }
    } else {
      if (compareDesc(selected, _startDate) <= 0) {
        _end = selected
      } else {
        _end = _startDate
        _start = selected
      }
    }

    if (!isEqual(_start, _startDate)) setStartDate(_start)
    if (limitRange) {
      const limitEnd = add(_start, limitRange)
      if (isWithinInterval(_end, { start: _start, end: limitEnd }))
        setEndDate(_end)
      else setEndDate(limitEnd)
    } else setEndDate(_end)

    changeMonth(getMonth(selected))
    changeYear(getYear(selected))
  }

  const toggleMonth = (isClose?: Boolean) => {
    if (isClose) return setCurrentView('days')
    setCurrentView(currentView !== 'months' ? 'months' : 'days')
  }

  const toggleYear = (isClose?: Boolean) => {
    if (isClose) return setCurrentView('days')
    setCurrentView(currentView !== 'years' ? 'years' : 'days')
  }

  const changeMonth = (index: number) => {
    toggleMonth(true)
    setCurrentMonthIndex(index)
  }

  const changeYear = (year: number) => {
    toggleYear(true)
    setCurrentYearIndex(year)
  }

  const onBack = () => {
    let index = currentMonthIndex - 1
    if (index < 0) {
      index = monthList.length - 1
      changeYear(currentYearIndex - 1)
    }

    changeMonth(index)
  }

  const onForward = () => {
    let index = currentMonthIndex + 1
    if (index >= monthList.length) {
      index = 0
      changeYear(currentYearIndex + 1)
    }

    changeMonth(index)
  }

  return (
    <Fragment>
      <FirstHeader
        label={TextFieldProps.label}
        innerRef={headerRef}
        value={
          isSameDate
            ? getFormat(_endDate)
            : `${getFormat(_startDate)} / ${getFormat(_endDate)}`
        }
        onClick={openCalendar}
      />
      <Menu
        classes={{ paper: `${classes.pickerContainer} Calendar-paper` }}
        anchorEl={headerElem}
        open={isOpen}
        onClose={closeCalendar}
        TransitionComponent={Fade}
      >
        {!noRange && (
          <RangeBar
            startDate={_startDate}
            endDate={_endDate}
            formatType={formatType}
            initialRangeSelected={currentRange}
            onChange={changeRange}
            locale={locale[language]}
            startLabel={startLabel}
            endLabel={endLabel}
          />
        )}
        <SwitchBar
          noRange={noRange}
          currentMonth={monthList[currentMonthIndex]}
          currentYear={`${currentYearIndex}`}
          currentView={currentView}
          onFoward={onForward}
          onBack={onBack}
          onMonth={toggleMonth}
          onYear={toggleYear}
        />
        {currentView === 'days' ? (
          <DaysContainer
            startDate={_startDate}
            endDate={_endDate}
            locale={locale[language]}
            isSameDate={isSameDate}
            current={currentRange}
            onChange={changeDate}
            currentMonth={currentMonthIndex}
            currentYear={currentYearIndex}
            isSingle={noRange}
          />
        ) : currentView === 'months' ? (
          <MonthContainer
            onClose={() => toggleMonth(true)}
            monthList={monthList}
            currentMonth={currentMonthIndex}
            onChange={changeMonth}
          />
        ) : currentView === 'years' ? (
          <YearContainer
            onClose={() => toggleYear(true)}
            yearList={yearList}
            currentYear={currentYearIndex}
            onChange={changeYear}
          />
        ) : null}
      </Menu>
    </Fragment>
  )
}

export { Calendar }
