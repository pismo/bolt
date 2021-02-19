import * as React from 'react'

import {
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  format,
  getDaysInMonth,
  startOfMonth,
  getDay,
  getDate,
  getMonth,
  isSameMonth,
  lastDayOfWeek,
  sub,
  add
} from 'date-fns'

import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import { BoltTheme } from '@pismo/bolt-core'

const { useState, useEffect } = React

const size = 40

const useStyles = makeStyles((theme: BoltTheme) => {
  const colors = theme.palette.colors
  return {
    week: {
      color: colors.background['50']
    },
    dayContainer: {
      height: `${size}px`
    },
    day: {
      color: colors.text['50'],
      width: `${size}px`,
      height: `${size}px`,
      padding: 0,

      '&:hover': {
        backgroundColor: ({ current }: any) =>
          current !== 'end'
            ? colors.background['20']
            : colors.backgroundMain['20'],
        mixBlendMode: 'multiply'
      }
    },
    dayText: {
      fontWeight: 'bold'
    },
    endSelected: {
      background: `linear-gradient(131.2deg, ${colors.main['50']} -0.84%, ${
        colors.backgroundMain['60']
      } 141.1%)`,
      boxShadow: theme.shadows[4],
      color: '#fff'
    },
    startSelected: {
      background: `linear-gradient(178.71deg, ${
        colors.background['45']
      } -46.8%, ${colors.text['55']} 240.65%)`,
      boxShadow: theme.shadows[4],
      color: '#fff'
    },
    squareEnd: {
      display: 'none',
      position: 'absolute',
      height: `${size}px`,
      background: `linear-gradient(81.73deg, #FF932E 59.31%, #D13900 97.84%)`,
      zIndex: 0
    },
    squareStart: {
      display: 'none',
      position: 'absolute',
      height: `${size}px`,
      background: `linear-gradient(275.55deg, ${
        colors.background['45']
      } 46.44%, ${colors.text['55']} 105.12%)`,
      zIndex: 0
    }
  }
})

export interface DaysContainerProps {
  locale: Locale
  startDate: Date
  currentMonth: number
  currentYear: number
  endDate?: Date
  isSameDate?: boolean
  current?: 'start' | 'end'
  isSingle?: boolean
  onChange?: (selected: Date) => void
  customDay?: (
    day: number,
    index: number,
    currentDay: number[],
    currentMonth: number,
    currentYear: number,
    currentDate: Date,
    sameMonth: boolean
  ) => React.ReactNode
}

const DaysContainer: React.FC<any> = ({
  locale,
  startDate,
  endDate,
  isSameDate,
  current,
  onChange,
  currentMonth,
  currentYear,
  customDay,
  isSingle = false
}) => {
  const classes = useStyles({ current })

  const [weeks, setWeeks] = useState(null)
  const [days, setDays] = useState(null)
  const [currentDay, setCurrentDay] = useState<Array<Number>>([])
  const [currentDate, setCurrentDate] = useState<Date>(new Date())

  const sameMonth = isSameMonth(startDate, endDate)

  useEffect(() => {
    const sqStart = document.getElementById('Bolt-Calendar-day-squareStart')
    const sqEnd = document.getElementById('Bolt-Calendar-day-squareEnd')

    if (!sameMonth) {
      sqStart.style.display = 'none'
      sqEnd.style.display = 'none'
    }

    setCurrentDate(startDate)

    if (isSameDate) {
      setCurrentDay([getDate(startDate)])
    } else {
      if (startDate && endDate) {
        if (getMonth(startDate) === getMonth(endDate) && sameMonth) {
          setCurrentDay([getDate(startDate), getDate(endDate)])
        } else {
          if (current === 'end') {
            setCurrentDay([getDate(endDate)])
            setCurrentDate(endDate)
          } else {
            setCurrentDay([getDate(startDate)])
          }
        }
      } else {
        setCurrentDay([getDate(startDate)])
      }
    }

    setWeeks(getWeekNames(locale, currentDate))
  }, [current, startDate, endDate])

  useEffect(() => {
    setDays(getDays())
  }, [currentDay, currentMonth, currentYear])

  useEffect(() => {
    const sqStart = document.getElementById('Bolt-Calendar-day-squareStart')
    const sqEnd = document.getElementById('Bolt-Calendar-day-squareEnd')

    sqStart.style.display = 'none'
    sqEnd.style.display = 'none'

    if (
      !isSameMonth(currentDate, new Date(currentYear, currentMonth)) ||
      isSameDate ||
      isSingle
    )
      return

    if (currentDay.length === 2 && sameMonth) {
      sqStart.style.display = 'block'
      sqEnd.style.display = 'block'
    } else {
      sqStart.style.display = 'block'
    }

    if (endDate && current === 'end' && !sameMonth) {
      sqStart.style.display = 'none'
    }

    const startDateNum = getDate(startDate)
    let startDif = lastDayOfWeek(startDate)

    if (!isSameMonth(startDate, startDif)) startDif = sub(startDif, { days: 7 })
    const startDifNum = getDate(startDif)

    const elemStart = document.getElementById(
      `Bolt-Calendar-day-${startDateNum}`
    )
    const startElemDif =
      startDifNum === startDateNum
        ? null
        : document.getElementById(`Bolt-Calendar-day-${startDifNum}`)

    if (startElemDif) {
      const startElemBounds = elemStart.getBoundingClientRect()
      const startElemDifBounds = startElemDif.getBoundingClientRect()

      sqStart.style.width = `${startElemDifBounds.x +
        startElemDifBounds.width -
        (startElemBounds.x + startElemBounds.width / 2) +
        10}px`
      sqStart.style.top = `${elemStart.offsetTop}px`
      sqStart.style.left = `${elemStart.offsetLeft +
        startElemBounds.width / 2}px`
    } else {
      sqStart.style.display = 'none'
    }

    if (endDate && (current === 'end' || sameMonth)) {
      sqEnd.style.display = 'block'

      const endDateNum = getDate(endDate)
      let endDif = startOfWeek(endDate)

      if (!isSameMonth(endDate, endDif)) endDif = add(endDif, { days: 7 })
      const endDifNum = getDate(endDif)

      const elemEnd = document.getElementById(`Bolt-Calendar-day-${endDateNum}`)
      const endElemDif =
        endDifNum === endDateNum
          ? null
          : document.getElementById(`Bolt-Calendar-day-${endDifNum}`)

      if (endElemDif) {
        const endElemBounds = elemEnd.getBoundingClientRect()
        const endElemDifBounds = endElemDif.getBoundingClientRect()

        sqEnd.style.width = `${endElemBounds.x +
          endElemBounds.width / 2 -
          endElemDifBounds.x +
          10}px`
        sqEnd.style.top = `${elemEnd.offsetTop}px`
        sqEnd.style.left = `${endElemDif.offsetLeft - 10}px`
      } else {
        sqEnd.style.display = 'none'
      }
    }
  }, [days])

  function getDays () {
    const date = new Date(currentYear, currentMonth)
    const totalDays = getDaysInMonth(date)
    const startMonth = getDay(startOfMonth(date))

    let res = []

    for (let i = 0; i < totalDays + startMonth; i++) {
      if (i < startMonth) res.push(null)
      else res.push(i - startMonth + 1)
    }

    return res
  }

  const dayClicked = (day: number) => () => {
    if (onChange) onChange(new Date(currentYear, currentMonth, day))
  }

  return (
    <Box width={1} display='flex' flexDirection='column' minHeight='280px'>
      <Box width={1} display='flex' p='10px' className={classes.week}>
        {weeks &&
          weeks.map((w, index) => (
            <Box
              key={`${w}-${index}`}
              width={1 / 7}
              display='flex'
              justifyContent='center'
            >
              {w}
            </Box>
          ))}
      </Box>
      <Box
        width={1}
        display='flex'
        p='10px'
        pt='0px'
        flexWrap='wrap'
        position='relative'
      >
        {days &&
          days.map((d, index) => {
            return customDay ? (
              customDay(
                d,
                index,
                currentDay,
                currentMonth,
                currentYear,
                currentDate,
                sameMonth
              )
            ) : (
              <Box
                className={classes.dayContainer}
                key={`${String(d)}-${index}`}
                id={`Bolt-Calendar-day-${d}`}
                width={1 / 7}
                display='flex'
                justifyContent='center'
                alignItems='center'
                py='5px'
                zIndex={1}
              >
                {d ? (
                  <IconButton
                    classes={{ root: classes.day }}
                    className={
                      currentDay.length === 2 &&
                      currentDay[1] === d &&
                      sameMonth &&
                      isSameMonth(
                        currentDate,
                        new Date(currentYear, currentMonth)
                      )
                        ? classes.endSelected
                        : current === 'end' &&
                          currentDay[0] === d &&
                          !sameMonth &&
                          isSameMonth(
                            currentDate,
                            new Date(currentYear, currentMonth)
                          )
                        ? classes.endSelected
                        : currentDay[0] === d &&
                          isSameMonth(
                            currentDate,
                            new Date(currentYear, currentMonth)
                          )
                        ? classes.startSelected
                        : ''
                    }
                    onClick={dayClicked(d)}
                  >
                    <Typography className={classes.dayText} variant='body1'>
                      {d < 10 ? `0${d}` : d}
                    </Typography>
                  </IconButton>
                ) : (
                  ''
                )}
              </Box>
            )
          })}
        <div id='Bolt-Calendar-day-squareEnd' className={classes.squareEnd} />
        <div
          id='Bolt-Calendar-day-squareStart'
          className={classes.squareStart}
        />
      </Box>
    </Box>
  )
}

export function getWeekNames (locale: Locale, date: Date, formating = 'E') {
  return eachDayOfInterval({
    start: startOfWeek(date),
    end: endOfWeek(date)
  }).reduce((a: Array<any>, d: Date) => {
    a.push(format(d, formating, { locale }))
    return a
  }, [])
}

export { DaysContainer }
