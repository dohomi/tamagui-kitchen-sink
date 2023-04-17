import {LmFormContainerBaseTypes} from '../../../core/src/form/formContainerTypes'
import {OnDatesChangeProps, UseMonthProps} from '@datepicker-react/hooks'

export type LmDatepickerProps = LmFormContainerBaseTypes & {
    startDate?: Date | null
    endDate?: Date | null
    numberOfMonths?: number
    isRangePicker?: boolean
    onChange?: (data: OnDatesChangeProps) => void
    labelFunctions?: Pick<UseMonthProps, 'dayLabelFormat' | 'weekdayLabelFormat' | 'monthLabelFormat'>
}
