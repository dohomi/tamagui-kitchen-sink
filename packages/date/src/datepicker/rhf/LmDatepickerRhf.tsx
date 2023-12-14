import { FieldValues, useController } from 'react-hook-form'
import { LmDatepicker } from '../LmDatepicker'
import { formatISO } from 'date-fns'
import { LmDatepickerProps } from '../datepickerTypes'
import { LmRhfProps } from '@tamagui-extras/form'

export type LmDatepickerRhf<T extends FieldValues> = LmRhfProps<T> & LmDatepickerProps

export function LmDatepickerRhf<T extends FieldValues>({
  name,
  defaultValue,
  control,
  rules = {},
  required,
  ...datepickerProps
}: LmDatepickerRhf<T>) {
  if (required) {
    rules.required = rules.required ?? 'This field is required'
  }
  const startController = useController({
    name,
    control,
    rules,
    defaultValue,
  })

  let hasError = !!startController.fieldState.error
  const convertToDate = (date: Date | string | null) =>
    !date ? null : typeof date === 'string' ? new Date(date) : date
  return (
    <LmDatepicker
      {...datepickerProps}
      startDate={startController.field.value ? convertToDate(startController.field.value) : null}
      isRangePicker={false}
      required={!!rules?.required}
      onChange={(data) => {
        const startValue = data.startDate
          ? formatISO(data.startDate, { representation: 'date' })
          : ''
        startController.field.onChange(startValue)
      }}
      helperText={hasError ? startController.fieldState.error?.message : datepickerProps.helperText}
      error={hasError}
    />
  )
}
