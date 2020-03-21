import {
  cleanup,
  render,
  fireEvent,
  // wait,
  // getByText,
  getByTestId,
  waitForDomChange
} from '@testing-library/react'
import 'jest-dom/extend-expect'
import * as React from 'react'

import { Bolt } from '@pismo/bolt-core'
import { Calendar } from '../Calendar'

afterEach(cleanup)

jest.mock('date-fns/locale/en-US', () => {
  const mesesEN = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const localeEn: any = jest.genMockFromModule('date-fns/locale/en-US')
  localeEn.localize.month = index => mesesEN[index]

  return { default: localeEn }
})
jest.mock('date-fns/locale/pt-BR', () => {
  const mesesPT = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julio',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
  ]
  const localePt: any = jest.genMockFromModule('date-fns/locale/pt-BR')
  localePt.localize.month = index => mesesPT[index]

  return { default: localePt }
})
jest.mock('date-fns/locale/es', () => {
  const mesesES = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
  ]
  const localeEs: any = jest.genMockFromModule('date-fns/locale/es')
  localeEs.localize.month = index => mesesES[index]

  return { default: localeEs }
})

describe('@pismo/bolt-calendar', () => {
  test('it should display the components correctly', () => {
    const { getByTestId } = render(
      <Bolt>
        <Calendar
          language='pt'
          TextFieldProps={{ formatType: 'dd - MMM - yyyy' }}
          DatePickerProps={{ startDate: new Date(2020, 3, 20), noRange: true }}
          RangeBarProps={{ formatType: 'dd MMM yyyy' }}
        />
      </Bolt>
    )

    const input = getByTestId('FirstHeader-input')

    expect(input).toBeVisible()
    expect(input).toHaveAttribute('value', '20 - abril - 2020')
  })

  test('it should must show translations correctly', () => {
    let lang: 'pt' | 'en' | 'es' = 'pt'

    const Component = ({ lang }) => (
      <Bolt>
        <Calendar
          language={lang}
          TextFieldProps={{ formatType: 'dd - MMM - yyyy' }}
          DatePickerProps={{ startDate: new Date(2020, 0, 20), noRange: true }}
          RangeBarProps={{ formatType: 'dd MMM yyyy' }}
        />
      </Bolt>
    )

    const test1 = render(<Component lang={lang} />)
    const input = getByTestId(test1.container, 'FirstHeader-input')

    expect(input).toBeVisible()
    expect(input).toHaveAttribute('value', '20 - janeiro - 2020')

    lang = 'en'
    const test2 = render(<Component lang={lang} />)
    const input2 = getByTestId(test2.container, 'FirstHeader-input')

    expect(input2).toHaveAttribute('value', '20 - January - 2020')

    lang = 'es'
    const test3 = render(<Component lang={lang} />)
    const input3 = getByTestId(test3.container, 'FirstHeader-input')

    expect(input3).toHaveAttribute('value', '20 - enero - 2020')
  })

  test('must display the calendar correctly when clicking on the input', async () => {
    let lang: 'pt' | 'en' | 'es' = 'pt'

    const Component = ({ lang }) => (
      <Bolt>
        <Calendar
          language={lang}
          TextFieldProps={{ formatType: 'dd - MMM - yyyy' }}
          DatePickerProps={{ startDate: new Date(2020, 0, 20), noRange: true }}
          RangeBarProps={{ formatType: 'dd MMM yyyy' }}
        />
      </Bolt>
    )

    const { container } = render(<Component lang={lang} />)
    const input = getByTestId(container, 'FirstHeader-input')

    fireEvent.click(input)

    await waitForDomChange({ container: container.parentElement })

    const paper = getByTestId(container.parentElement, 'Calendar-paper')

    expect(paper).toBeVisible()
  })
})
