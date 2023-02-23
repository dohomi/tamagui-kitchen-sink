import { Button, H5, H6, SizableText, Stack, XStack } from 'tamagui'
import {
  ArrowLeft,
  ArrowRight,
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from 'tamagui-phosphor-icons'
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
      <XStack space={'$2'} justifyContent={'center'} alignItems={'center'}>
        <Button
          size={'$2'}
          chromeless
          focusable={false}
          circular
          onPress={() => goToPreviousYear(10)}
          icon={<CaretDoubleLeft />}
        />
        <Button
          size={'$2'}
          chromeless
          circular
          focusable={false}
          onPress={() => goToPreviousYear(1)}
          icon={<CaretLeft />}
        />
        <H6>{year}</H6>
        <Button
          size={'$2'}
          chromeless
          focusable={false}
          onPress={() => goToNextYear(1)}
          icon={<CaretRight />}
          circular
        />
        <Button
          size={'$2'}
          chromeless
          circular
          focusable={false}
          onPress={() => goToNextYear(10)}
          icon={<CaretDoubleRight />}
        />
      </XStack>

      <XStack justifyContent={'space-between'} alignItems={'center'} height={40}>
        <Button
          focusable={false}
          opacity={isFirst ? undefined : 0}
          disabled={!isFirst}
          onPress={monthsCount > 1 ? goToPreviousMonths : goToPreviousMonthsByOneMonth}
          icon={<ArrowLeft />}
          circular
          chromeless
        />

        <H5>{monthLabel}</H5>

        <Button
          focusable={false}
          opacity={isLast ? undefined : 0}
          disabled={!isLast}
          onPress={monthsCount > 1 ? goToNextMonths : goToNextMonthsByOneMonth}
          icon={<ArrowRight />}
          circular
          chromeless
        />
      </XStack>
      <XStack flex={7} width={250}>
        {weekdayLabels.map((dayLabel) => (
          <SizableText
            width={`${100 / 7}%`}
            key={dayLabel}
            textAlign={'center'}
            paddingVertical={'$2'}
          >
            {dayLabel}
          </SizableText>
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
