import { LmFormContainerBaseTypes } from '@tamagui-extras/form'
import { OnDatesChangeProps, UseMonthProps } from '@datepicker-react/hooks'
import { ButtonProps, InputProps } from 'tamagui'
import { LmPopoverProps } from '@tamagui-extras/core'

export type LmDatepickerProps = LmFormContainerBaseTypes & {
  startDate?: Date | null
  endDate?: Date | null
  value?: Date | null
  numberOfMonths?: number
  isRangePicker?: boolean
  onChange?: (data: OnDatesChangeProps) => void
  labelFunctions?: Pick<UseMonthProps, 'dayLabelFormat' | 'weekdayLabelFormat' | 'monthLabelFormat'>
  fullWidth?: boolean
  inputProps?: InputProps
  buttonProps?: ButtonProps
  popoverProps?: Omit<LmPopoverProps, 'trigger'>
}
