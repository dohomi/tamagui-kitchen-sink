import { Button, H5, H6, Stack, Text, XStack } from 'tamagui'
import { ArrowLeft, ArrowRight, ChevronsLeft, ChevronsRight } from '@tamagui/lucide-icons'
import { useMonth, UseMonthProps } from '@datepicker-react/hooks'
import { LmDay } from './LmDay'
import { useDatepickerContext } from './DatepickerProvider'

export type LmMonthProps = UseMonthProps & {
  onPrevious?: () => void
  onNext?: () => void
  monthsCount: number
  isFirst: boolean
  isLast: boolean
}

export function LmMonth({
  onPrevious,
  onNext,
  monthsCount,
  isFirst,
  isLast,
  ...props
}: LmMonthProps) {
  const { days, weekdayLabels, monthLabel } = useMonth({
    ...props,
    monthLabelFormat(date: Date) {
      return new Intl.DateTimeFormat(undefined, { month: 'long' }).format(date)
    },
  })
  const {
    goToPreviousYear,
    goToPreviousMonths,
    goToPreviousMonthsByOneMonth,
    goToNextMonthsByOneMonth,
    goToNextMonths,
    goToNextYear,
  } = useDatepickerContext()

  const { year } = props

  return (
    <Stack width={250}>
      <XStack space justifyContent={'flex-end'} alignItems={'center'}>
        <Button
          size={'$2'}
          chromeless
          focusable={false}
          onPress={() => goToPreviousYear(1)}
          icon={ChevronsLeft}
        />
        <H6>{year}</H6>
        <Button
          size={'$2'}
          chromeless
          focusable={false}
          onPress={() => goToNextYear(1)}
          icon={ChevronsRight}
        />
      </XStack>

      <XStack justifyContent={'space-between'} alignItems={'center'} height={40}>
        {isFirst ? (
          <Button
            focusable={false}
            onPress={monthsCount > 1 ? goToPreviousMonths : goToPreviousMonthsByOneMonth}
            icon={ArrowLeft}
            circular
            chromeless
          />
        ) : (
          <Text> </Text>
        )}

        <H5>{monthLabel}</H5>

        {isLast ? (
          <Button
            focusable={false}
            onPress={monthsCount > 1 ? goToNextMonths : goToNextMonthsByOneMonth}
            icon={ArrowRight}
            circular
            chromeless
          />
        ) : (
          <Text> </Text>
        )}
      </XStack>
      <XStack flex={7} width={250}>
        {weekdayLabels.map((dayLabel) => (
          <Text width={`${100 / 7}%`} key={dayLabel} textAlign={'center'} paddingVertical={'$2'}>
            {dayLabel}
          </Text>
        ))}
      </XStack>
      <XStack display={'flex'} flexWrap={'wrap'} width={250}>
        {days.map((day, index) => {
          if (typeof day === 'object') {
            return <LmDay dayLabel={day.dayLabel} date={day.date} key={day.date.toString()} />
          }
          return <Stack key={index} width={`${100 / 7}%`} />
        })}
      </XStack>
      <XStack display={'flex'}></XStack>
    </Stack>
  )
}
