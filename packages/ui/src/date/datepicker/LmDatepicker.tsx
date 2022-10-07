import {LmDatepickerProvider} from "./DatepickerProvider";
import {FocusedInput, OnDatesChangeProps, START_DATE, useDatepicker, UseMonthProps} from "@datepicker-react/hooks";
import {useState} from "react";
import {LmMonth} from "./LmMonth";
import {XStack} from "tamagui";

// change language see: https://github.com/tomgreenwood1/react-datepicker/blob/master/packages/styled/src/components/DateRangeInput/DateRangeInput.stories.tsx#L228

export type LmDatepickerProps = {
    numberOfMonths?: number,
    isRangePicker?: boolean,
    onChange?: (data: OnDatesChangeProps) => void
    labelFunctions?: Pick<UseMonthProps, 'dayLabelFormat' | 'weekdayLabelFormat' | 'monthLabelFormat'>
}

export function LmDatepicker({numberOfMonths, isRangePicker, onChange, labelFunctions}: LmDatepickerProps) {
    const [state, setState] = useState({
        startDate: null,
        endDate: null,
        focusedInput: START_DATE
    });
    numberOfMonths = isRangePicker ? (numberOfMonths || 2) : 1
    const {
        activeMonths,
        firstDayOfWeek,
        goToPreviousMonthsByOneMonth,
        goToPreviousMonths,
        goToNextMonthsByOneMonth,
        goToNextMonths,
        ...context
    } = useDatepicker({
        startDate: state.startDate,
        endDate: state.endDate,
        focusedInput: state.focusedInput as FocusedInput,
        onDatesChange: (data) => {
            if (!data.focusedInput) {
                setState({...data, focusedInput: START_DATE});
            } else {
                setState(data);
            }
            if (typeof onChange === 'function') {
                onChange(data)
            }
        },
        numberOfMonths,
        ...(!isRangePicker && {
            minBookingDays: 1,
            exactMinBookingDays: true
        })
    });


    return (
        <LmDatepickerProvider {...context}>
            <XStack space alignItems={'flex-start'}>
                {activeMonths.map((month, index) => (
                    <LmMonth key={`${month.year}-${month.month}`}
                             year={month.year}
                             month={month.month}
                             firstDayOfWeek={firstDayOfWeek}
                             onPrevious={numberOfMonths > 1 ? (index === 0 ? goToPreviousMonths : undefined) : goToPreviousMonthsByOneMonth}
                             onNext={numberOfMonths > 1 ? (index === numberOfMonths - 1 ? goToNextMonths : undefined) : goToNextMonthsByOneMonth}
                             {...labelFunctions}
                    />
                ))}
            </XStack>
        </LmDatepickerProvider>
    )
}