import { DaysForLocaleProps, InputSelectorProps } from './dateSelectionTypes'
import { useMemo } from 'react'
import { LmSelect } from '../../../LmSelect'

export function LmMonthSelect({
  locale,
  ...props
}: InputSelectorProps & {
  locale?: string
}) {
  const options = useMemo(() => {
    return monthsForLocale({ localeName: locale })
  }, [])
  return <LmSelect options={options} width={80} {...props} />
}

function monthsForLocale(params?: DaysForLocaleProps) {
  const { localeName = 'en', month = 'short' } = params || {}
  const format = new Intl.DateTimeFormat(localeName, { month }).format
  const formatDigits = new Intl.DateTimeFormat(localeName, { month: '2-digit' }).format
  return [...Array(12).keys()].map((month) => {
    return {
      value: formatDigits(new Date(Date.UTC(2021, month, 1))),
      label: format(new Date(Date.UTC(2021, month, 1))),
    }
  })
}
