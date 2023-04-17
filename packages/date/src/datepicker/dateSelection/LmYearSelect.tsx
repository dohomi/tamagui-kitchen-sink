import { useMemo } from 'react'
import { LmSelect } from '@tamagui-extras/form'
import { InputSelectorProps } from './dateSelectionTypes'

export function LmYearSelect(props: InputSelectorProps) {
  const options = useMemo(() => {
    return yearsForLocale()
  }, [])
  return <LmSelect options={options} width={100} {...props} />
}

type YearsForLocaleProps = {
  startYear: number
  duration: number
}

function yearsForLocale(params?: YearsForLocaleProps) {
  const currentYear = new Date().getFullYear()
  const { startYear, duration = 100 } = params || {}
  const startWith = startYear || currentYear
  return Array.from(Array(duration).keys()).map((day) => {
    return {
      value: startWith - day,
      label: `${startWith - day}`,
    }
  })
}
