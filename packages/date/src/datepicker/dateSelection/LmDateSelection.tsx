import { ThemeableStackProps, XStack } from 'tamagui'
import { useId, useRef, useState } from 'react'
import { LmFormContainerBaseTypes, LmFormFieldContainer } from '@tamagui-extras/form'
import { LmDaySelect } from './LmDaySelect'
import { LmMonthSelect } from './LmMonthSelect'
import { LmYearSelect } from './LmYearSelect'

export type LmDateSelectionProps = LmFormContainerBaseTypes & {
  onChange?: (date: string | null) => void
  invalidDateMessage?: string
  value?: string
  locale?: string
  containerProps?: ThemeableStackProps
}

export function LmDateSelection({
  required,
  error,
  helperText,
  helperTextProps,
  label,
  labelProps,
  labelInline,
  onChange,
  invalidDateMessage = 'This is not a valid date',
  locale,
  value,
  containerProps,
}: LmDateSelectionProps) {
  let dayValue = ''
  let monthValue = ''
  let yearValue = ''
  if (value) {
    const arr = value.split('-')
    if (arr.length === 3) {
      yearValue = arr[0] as string
      monthValue = arr[1] as string
      dayValue = arr[2] as string
    } else {
      console.warn('the date input value is not yyyy-mm-dd')
    }
  }
  const id = useId()
  const dayRef = useRef<string | null>(dayValue)
  const monthRef = useRef<string | null>(monthValue)
  const yearRef = useRef<string | null>(yearValue)
  const [isInvalid, setInvalid] = useState<boolean>(false)
  const getDateString = () => {
    return `${yearRef.current || 'x'}-${monthRef.current || 'x'}-${dayRef.current || 'x'}`
  }
  const isValidDate = () => {
    if (yearRef.current && monthRef.current && dayRef.current) {
      const dateString = getDateString()
      const timestamp = Date.parse(dateString)
      return !isNaN(timestamp) ? true : new Error(invalidDateMessage)
    }
    return false
  }
  const updateDate = () => {
    const isValid = isValidDate()
    if (typeof isValid !== 'boolean') {
      setInvalid(true)
      return
    }
    if (typeof onChange === 'function') {
      if (isValid) {
        const dateString = getDateString()
        onChange(dateString)
        setInvalid(false)
      } else {
        onChange(null)
      }
    }
  }

  return (
    <LmFormFieldContainer
      id={id}
      error={isInvalid || error}
      required={required}
      labelProps={labelProps}
      helperTextProps={helperTextProps}
      label={label}
      labelInline={labelInline}
      helperText={isInvalid ? invalidDateMessage : helperText}
      {...containerProps}
    >
      <XStack space id={id}>
        <LmDaySelect
          value={dayValue}
          onValueChange={(day) => {
            dayRef.current = day
            updateDate()
          }}
        />
        <LmMonthSelect
          value={monthValue}
          locale={locale}
          onValueChange={(month) => {
            monthRef.current = month
            updateDate()
          }}
        />
        <LmYearSelect
          value={yearValue}
          onValueChange={(year) => {
            yearRef.current = year
            updateDate()
          }}
        />
      </XStack>
    </LmFormFieldContainer>
  )
}
