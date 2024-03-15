import { CalendarRegular, LmPopover, LmPopoverProps } from '@tamagui-extras/core'
import { LmMonth, LmMonthProps } from './LmMonth'
import { MonthType } from '@datepicker-react/hooks'
import { LmDatepickerProps } from './datepickerTypes'
import { Button, ButtonProps, XStack } from 'tamagui'

type LmDatepickerPopoverProps = Omit<LmPopoverProps, 'trigger'> & {
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
  buttonProps,
  size,
  ...popoverProps
}: LmDatepickerPopoverProps) {
  return (
    <LmPopover
      isBouncy={true}
      {...popoverProps}
      contentProps={{
        padding: '$4',
        elevation: '$5',
        ...(popoverProps?.contentProps as any),
      }}
      trigger={
        <Button
          icon={<CalendarRegular />}
          borderTopLeftRadius={0}
          borderBottomLeftRadius={0}
          size={size}
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
