import { ControllerProps, useController } from 'react-hook-form'
import { LmDatepicker } from '../LmDatepicker'
import { formatISO } from 'date-fns'
import { LmDatepickerProps } from '../datepickerTypes'

export type LmDateRangePickerRhf = LmDatepickerProps &
  Pick<ControllerProps, 'control' | 'rules'> & {
    start: string
    end?: string
  }

export function LmDateRangePickerRhf({
  start,
  end = '',
  control,
  rules = {},
  required,
  ...datepickerProps
}: LmDateRangePickerRhf) {
  if (required) {
    rules.required = rules?.required ?? 'This field is required'
  }
  const startController = useController({
    name: start,
    control,
    rules,
    defaultValue: datepickerProps.startDate,
  })
  const endController = useController({
    name: end,
    control,
    rules,
    defaultValue: datepickerProps.endDate,
  })

  let hasError = !!(end
    ? startController.fieldState.error || endController.fieldState.error
    : startController.fieldState.error)
  const convertToDate = (date: Date | string | null) =>
    !date ? null : typeof date === 'string' ? new Date(date) : date
  return (
    <LmDatepicker
      {...datepickerProps}
      startDate={startController.field.value ? convertToDate(startController.field.value) : null}
      endDate={endController.field.value ? convertToDate(endController.field.value) : null}
      isRangePicker={!!end}
      required={!!rules?.required}
      onChange={(data) => {
        const startValue = data.startDate
          ? formatISO(data.startDate, { representation: 'date' })
          : ''
        startController.field.onChange(startValue)
        if (end) {
          const endValue = data.endDate ? formatISO(data.endDate, { representation: 'date' }) : ''
          endController.field.onChange(endValue)
        }
      }}
      helperText={hasError ? startController.fieldState.error?.message : datepickerProps.helperText}
      error={hasError}
    />
  )
}
