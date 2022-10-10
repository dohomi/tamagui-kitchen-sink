import {LmDatepickerProvider} from "./DatepickerProvider";
import {FocusedInput, OnDatesChangeProps, START_DATE, useDatepicker, UseMonthProps} from "@datepicker-react/hooks";
import {useId, useState} from "react";
import {LmMonth} from "./LmMonth";
import {Button, Input, XGroup, XStack} from "tamagui";
import {Calendar} from '@tamagui/feather-icons'
import {LmPopover} from "../../../panels";
import {usePopoverState} from "../../../../hooks";
import {getLocaleDate} from "../dateHelper";
import {LmFormFieldContainer} from "../../LmFormFieldContainer";
import {LmFormContainerBaseTypes} from "../../formContainerTypes";
import {Platform} from "react-native";

// change language see: https://github.com/tomgreenwood1/react-datepicker/blob/master/packages/styled/src/components/DateRangeInput/DateRangeInput.stories.tsx#L228

export type LmDatepickerProps = LmFormContainerBaseTypes & {
    startDate?: Date | null
    endDate?: Date | null
    numberOfMonths?: number,
    isRangePicker?: boolean,
    onChange?: (data: OnDatesChangeProps) => void
    labelFunctions?: Pick<UseMonthProps, 'dayLabelFormat' | 'weekdayLabelFormat' | 'monthLabelFormat'>
}

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
                             }: LmDatepickerProps) {
    const id = useId()
    const {open, onOpenChange} = usePopoverState(false)
    const [state, setState] = useState<OnDatesChangeProps>({
        startDate: startDate,
        endDate: endDate,
        focusedInput: START_DATE
    });
    numberOfMonths = (isRangePicker ? (numberOfMonths ?? 2) : 1) as number
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
            if (!isRangePicker) {
                onOpenChange(false)
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
            <LmFormFieldContainer id={id}
                                  error={error}
                                  required={required}
                                  labelProps={labelProps}
                                  label={label}
                                  labelInline={labelInline}
                                  helperText={helperText}>
                <LmPopover
                    trigger={(
                        <XStack space width={Platform.OS === 'web' ? 'fit-content' : undefined}>
                            <XGroup>
                                <Input
                                    width={'$12'}
                                    value={state.startDate ? getLocaleDate({date: state.startDate}) : ''}></Input>
                                <Button onPress={() => onOpenChange(true)} icon={Calendar}/>
                            </XGroup>
                            {isRangePicker && (
                                <XGroup>
                                    <Input
                                        width={'$12'}
                                        value={state.endDate ? getLocaleDate({date: state.endDate}) : ''}/>
                                    <Button onPress={() => onOpenChange(true)} icon={Calendar}/>
                                </XGroup>
                            )}
                        </XStack>
                    )}
                    popoverProps={{
                        open, onOpenChange
                    }}
                    contentPadding={'$3'}>
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
                </LmPopover>
            </LmFormFieldContainer>
        </LmDatepickerProvider>
    )
}