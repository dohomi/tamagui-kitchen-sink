import { CalendarRegular, LmPopover } from '@tamagui-extras/core'
import { LmMonth, LmMonthProps } from './LmMonth'
import { MonthType } from '@datepicker-react/hooks'
import { LmDatepickerProps } from './datepickerTypes'
import { Button, ButtonProps, XStack } from 'tamagui'

type LmDatepickerPopoverProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  activeMonths: MonthType[]
  monthsCount: number
  firstDayOfWeek: LmMonthProps['firstDayOfWeek']
  labelFunctions: LmDatepickerProps['labelFunctions']
  buttonProps?: ButtonProps
}

export function LmDatepickerPopover({
  activeMonths,
  monthsCount,
  firstDayOfWeek,
  labelFunctions,
  open,
  onOpenChange,
  buttonProps,
}: LmDatepickerPopoverProps) {
  return (
    <LmPopover
      open={open}
      onOpenChange={onOpenChange}
      isBouncy={true}
      contentProps={{
        padding: '$4',
        elevation: '$5',
      }}
      trigger={
        <Button
          icon={<CalendarRegular />}
          borderTopLeftRadius={0}
          borderBottomLeftRadius={0}
          {...buttonProps}
        />
      }
    >
      <XStack space alignItems={'flex-start'}>
        {activeMonths.map((month, index) => (
          <LmMonth
            key={`${month.year}-${month.month}`}
            year={month.year}
            month={month.month}
            monthsCount={monthsCount}
            firstDayOfWeek={firstDayOfWeek}
            isFirst={monthsCount === 0 || index === 0}
            isLast={monthsCount === 0 || index === monthsCount - 1}
            {...labelFunctions}
          />
        ))}
      </XStack>
    </LmPopover>
  )
}
