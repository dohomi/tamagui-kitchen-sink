import { useMemo } from 'react'
import { LmSelect } from '../../../form/LmSelect'
import { DaysForLocaleProps, InputSelectorProps } from './dateSelectionTypes'

export function LmDaySelect(props: InputSelectorProps) {
  const options = useMemo(() => {
    return daysForLocale()
  }, [])
  return <LmSelect options={options} width={70} {...props} />
}

function daysForLocale(params?: Pick<DaysForLocaleProps, 'localeName'>) {
  const { localeName = 'en' } = params || {}
  const format = new Intl.DateTimeFormat(localeName, { day: '2-digit' }).format
  return Array.from(Array(31).keys()).map((day) => {
    return {
      value: format(new Date(Date.UTC(2021, 0, day + 1))),
      label: format(new Date(Date.UTC(2021, 0, day + 1))),
    }
  })
}
