import { createContext, PropsWithChildren, ReactNode, useContext } from 'react'

interface DatepickerContext {
  rtl?: boolean
  focusedDate: Date | null
  goToPreviousMonths: () => void
  goToPreviousMonthsByOneMonth: () => void
  goToNextMonths: () => void
  goToNextMonthsByOneMonth: () => void
  goToPreviousYear: (numYears?: number) => void
  goToNextYear: (numYears?: number) => void

  onDateFocus(date: Date): void

  onDateSelect(date: Date): void

  onDateHover(date: Date): void

  isDateFocused(date: Date): boolean

  isDateSelected(date: Date): boolean

  isDateHovered(date: Date): boolean

  isDateBlocked(date: Date): boolean

  isFirstOrLastSelectedDate(date: Date): boolean

  onDayRender?(date: Date): ReactNode
}

export const datepickerContextDefaultValue = {
  rtl: false,
  focusedDate: null,
  isDateFocused: () => false,
  isDateSelected: () => false,
  isDateHovered: () => false,
  isDateBlocked: () => false,
  isFirstOrLastSelectedDate: () => false,
  onDateFocus: () => {},
  onDateHover: () => {},
  onDateSelect: () => {},
  onDayRender: undefined,
  goToPreviousMonthsByOneMonth: () => {},
  goToPreviousMonths: () => {},
  goToNextMonthsByOneMonth: () => {},
  goToNextMonths: () => {},
  goToPreviousYear: () => {},
  goToNextYear: () => {},
}

const DatepickerContext = createContext<DatepickerContext>(datepickerContextDefaultValue)

export type LmDatepickerProviderProps = PropsWithChildren<DatepickerContext>

export const LmDatepickerProvider = ({ children, ...value }: LmDatepickerProviderProps) => {
  return <DatepickerContext.Provider value={value}>{children}</DatepickerContext.Provider>
}

export const useDatepickerContext = () => useContext(DatepickerContext)
