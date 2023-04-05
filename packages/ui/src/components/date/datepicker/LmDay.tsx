import { useRef } from 'react'
import { useDatepickerContext } from './DatepickerProvider'
import { useDay } from '@datepicker-react/hooks'
import { SizableText, Stack } from 'tamagui'

export type LmDayProps = {
  date: Date
  dayLabel: string
}

const getColor = (isSelected: boolean, isSelectedStartOrEnd:boolean, isWithinHoverRange:boolean, isDisabled:boolean) => {
  return ({
    selectedFirstOrLastColor,
    normalColor,
    selectedColor,
    rangeHoverColor,
    disabledColor,
  }: {
    selectedFirstOrLastColor: string,
    normalColor: string,
    selectedColor: string,
    rangeHoverColor:string,
    disabledColor:string,
  }) => {
    if (isSelectedStartOrEnd) {
      return selectedFirstOrLastColor
    } else if (isSelected) {
      return selectedColor
    } else if (isWithinHoverRange) {
      return rangeHoverColor
    } else if (isDisabled) {
      return disabledColor
    } else {
      return normalColor
    }
  }
}

export function LmDay({ dayLabel, date }: LmDayProps) {
  const dayRef = useRef(null)
  const datepickerContext = useDatepickerContext()
  const {
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    disabledDate,
    onClick,
    onMouseEnter,
  } = useDay({
    date,
    dayRef,
    ...datepickerContext,
  })

  if (!dayLabel) {
    return <Stack display={'flex'} flex={1} />
  }

  const getColorFn = getColor(isSelected, isSelectedStartOrEnd, isWithinHoverRange, disabledDate)

  return (
    <SizableText
      ref={dayRef as any}
      onPress={onClick as any}
      onHoverIn={onMouseEnter as any}
      disabled={disabledDate}
      width={`${100 / 7}%`}
      textAlign={'center'}
      paddingVertical={'$2'}
      cursor={'pointer'}
      backgroundColor={getColorFn({
        selectedFirstOrLastColor: '$blue7',
        normalColor: '$background',
        selectedColor: '$blue5',
        rangeHoverColor: '$blue6',
        disabledColor: '#FFFFFF',
      })}
    >
      {dayLabel}
    </SizableText>
  )
}
