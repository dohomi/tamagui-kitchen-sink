import {useRef} from "react";
import {useDatepickerContext} from "./DatepickerProvider";
import {useDay} from "@datepicker-react/hooks";
import {Stack, Text} from "tamagui";

export type LmDayProps = {
    date: Date
    dayLabel: string
}

const getColor = (
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    isDisabled
) => {
    return ({
                selectedFirstOrLastColor,
                normalColor,
                selectedColor,
                rangeHoverColor,
                disabledColor
            }) => {
        if (isSelectedStartOrEnd) {
            return selectedFirstOrLastColor;
        } else if (isSelected) {
            return selectedColor;
        } else if (isWithinHoverRange) {
            return rangeHoverColor;
        } else if (isDisabled) {
            return disabledColor;
        } else {
            return normalColor;
        }
    };
}

export function LmDay({dayLabel, date}: LmDayProps) {
    const dayRef = useRef(null);
    const datepickerContext = useDatepickerContext();
    const {
        isSelected,
        isSelectedStartOrEnd,
        isWithinHoverRange,
        disabledDate,
        onClick,
        onKeyDown,
        onMouseEnter,
        tabIndex
    } = useDay({
        date,
        dayRef,
        ...datepickerContext
    });

    if (!dayLabel) {
        return (
            <Stack display={'flex'} flex={1}/>
        )
    }

    const getColorFn = getColor(
        isSelected,
        isSelectedStartOrEnd,
        isWithinHoverRange,
        disabledDate
    );

    return (
        <Text ref={dayRef as any}
              onPress={onClick as any}
              onHoverIn={onMouseEnter as any}
              disabled={disabledDate}
              width={`${100 / 7}%`}
              textAlign={'center'}
              paddingVertical={'$2'}
              cursor={'pointer'}
            // color={getColorFn({
            //     selectedFirstOrLastColor: "#FFFFFF",
            //     normalColor: "#001217",
            //     selectedColor: "#FFFFFF",
            //     rangeHoverColor: "#FFFFFF",
            //     disabledColor: "#808285"
            // })}
              backgroundColor={getColorFn({
                  selectedFirstOrLastColor: "$blue7",
                  normalColor: "$background",
                  selectedColor: "$blue5",
                  rangeHoverColor: "$blue6",
                  disabledColor: "#FFFFFF"
              })}
        >
            {dayLabel}
        </Text>
    )
}




