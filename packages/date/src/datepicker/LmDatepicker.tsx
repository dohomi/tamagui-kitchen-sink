import { LmDatepickerProvider } from './DatepickerProvider'
import {
  FocusedInput,
  OnDatesChangeProps,
  START_DATE,
  useDatepicker,
} from '@datepicker-react/hooks'
import { useId, useState } from 'react'
import { LmMonth } from './LmMonth'
import { Button, Input, XGroup, XStack } from 'tamagui'
import { CalendarRegular, LmPopover, usePopoverState } from '@tamagui-extras/core'
import { getLocaleDate } from '../dateHelper'
import { LmFormFieldContainer } from '@tamagui-extras/form'
import { Platform } from 'react-native'
import { LmDatepickerProps } from './datepickerTypes' // change language see: https://github.com/tomgreenwood1/react-datepicker/blob/master/packages/styled/src/components/DateRangeInput/DateRangeInput.stories.tsx#L228

// change language see: https://github.com/tomgreenwood1/react-datepicker/blob/master/packages/styled/src/components/DateRangeInput/DateRangeInput.stories.tsx#L228

export function LmDatepicker({
  numberOfMonths,
  isRangePicker,
  onChange,
  labelFunctions,
  startDate = null,
  endDate = null,
  required,
  error,
  helperText,
  label,
  labelProps,
  labelInline,
  fullWidth,
}: LmDatepickerProps) {
  const id = useId()
  const { open, onOpenChange } = usePopoverState(false)
  const [state, setState] = useState<OnDatesChangeProps>({
    startDate: startDate,
    endDate: endDate,
    focusedInput: START_DATE,
  })
  const monthsCount: number = isRangePicker ? numberOfMonths ?? 2 : 1

  const { activeMonths, firstDayOfWeek, ...context } = useDatepicker({
    startDate: state.startDate,
    endDate: state.endDate,
    focusedInput: state.focusedInput as FocusedInput,
    onDatesChange: (data) => {
      if (!data.focusedInput) {
        setState({ ...data, focusedInput: START_DATE })
      } else {
        setState(data)
      }
      if (typeof onChange === 'function') {
        onChange(data)
      }
      if (!isRangePicker) {
        onOpenChange(false)
      }
    },
    numberOfMonths: monthsCount,
    ...(!isRangePicker && {
      minBookingDays: 1,
      exactMinBookingDays: true,
    }),
  })

  return (
    <LmDatepickerProvider {...context}>
      <LmFormFieldContainer
        id={id}
        error={error}
        required={required}
        labelProps={labelProps}
        label={label}
        labelInline={labelInline}
        helperText={helperText}
        fullWidth={fullWidth}
      >
        <LmPopover
          isBouncy={true}
          hideArrow
          trigger={
            <XStack
              space
              {...(fullWidth
                ? {
                    flexGrow: 1,
                  }
                : {
                    width: Platform.OS === 'web' ? '100%' : undefined,
                  })}
            >
              <XGroup flexGrow={fullWidth ? 1 : undefined}>
                <XGroup.Item>
                  <Input
                    width={'100%'}
                    value={state.startDate ? getLocaleDate({ date: state.startDate }) : ''}
                  ></Input>
                </XGroup.Item>
                <XGroup.Item>
                  <Button icon={<CalendarRegular />} />
                </XGroup.Item>
              </XGroup>
              {isRangePicker && (
                <XGroup flexGrow={fullWidth ? 1 : undefined}>
                  <XGroup.Item>
                    <Input
                      width={'100%'}
                      value={state.endDate ? getLocaleDate({ date: state.endDate }) : ''}
                    />
                  </XGroup.Item>
                  <XGroup.Item>
                    <Button onPress={() => onOpenChange(true)} icon={<CalendarRegular />} />
                  </XGroup.Item>
                </XGroup>
              )}
            </XStack>
          }
          open={open}
          onOpenChange={onOpenChange}
          contentProps={{
            padding: '$4',
            elevation: '$5',
          }}
        >
          <XStack space alignItems={'flex-start'}>
            {open &&
              activeMonths.map((month, index) => (
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
      </LmFormFieldContainer>
    </LmDatepickerProvider>
  )
}
