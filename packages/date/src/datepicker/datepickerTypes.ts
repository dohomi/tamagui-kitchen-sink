import { LmFormContainerBaseTypes } from '@tamagui-extras/form'
import { OnDatesChangeProps, UseMonthProps } from '@datepicker-react/hooks'

export type LmDatepickerProps = LmFormContainerBaseTypes & {
  startDate?: Date | null
  endDate?: Date | null
  value?: Date | null
  numberOfMonths?: number
  isRangePicker?: boolean
  onChange?: (data: OnDatesChangeProps) => void
  labelFunctions?: Pick<UseMonthProps, 'dayLabelFormat' | 'weekdayLabelFormat' | 'monthLabelFormat'>
  fullWidth?: boolean
}
