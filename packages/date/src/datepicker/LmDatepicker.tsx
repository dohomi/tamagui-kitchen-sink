import {LmDatepickerProvider} from './DatepickerProvider'
import {FocusedInput, OnDatesChangeProps, START_DATE, useDatepicker,} from '@datepicker-react/hooks'
import {useId, useState} from 'react'
import {LmMonth} from './LmMonth'
import {Button, Input, XGroup, XStack} from 'tamagui'
import {Calendar} from 'tamagui-phosphor-icons'
import {LmPopover} from '../../../core/src/core/panels'
import {usePopoverState} from '../../../core/src/core/hooks'
import {getLocaleDate} from '../dateHelper'
import {LmFormFieldContainer} from '../../../core/src/form/LmFormFieldContainer'
import {Platform} from 'react-native'
import {LmDatepickerProps} from './datepickerTypes' // change language see: https://github.com/tomgreenwood1/react-datepicker/blob/master/packages/styled/src/components/DateRangeInput/DateRangeInput.stories.tsx#L228

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
                             }: LmDatepickerProps) {
    const id = useId()
    const {open, onOpenChange} = usePopoverState(false)
    const [state, setState] = useState<OnDatesChangeProps>({
        startDate: startDate,
        endDate: endDate,
        focusedInput: START_DATE,
    })
    const monthsCount: number = isRangePicker ? numberOfMonths ?? 2 : 1

    const {activeMonths, firstDayOfWeek, ...context} = useDatepicker({
        startDate: state.startDate,
        endDate: state.endDate,
        focusedInput: state.focusedInput as FocusedInput,
        onDatesChange: (data) => {
            if (!data.focusedInput) {
                setState({...data, focusedInput: START_DATE})
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
            >
                <LmPopover
                    isBouncy={true}
                    hideArrow
                    trigger={
                        <XStack space width={Platform.OS === 'web' ? 'fit-content' : undefined}>
                            <XGroup>
                                <XGroup.Item>
                                    <Input
                                        width={'$12'}
                                        value={state.startDate ? getLocaleDate({date: state.startDate}) : ''}
                                    ></Input>
                                </XGroup.Item>
                                <XGroup.Item>
                                    <Button icon={<Calendar/>}/>
                                </XGroup.Item>
                            </XGroup>
                            {isRangePicker && (
                                <XGroup>
                                    <XGroup.Item>
                                        <Input
                                            width={'$12'}
                                            value={state.endDate ? getLocaleDate({date: state.endDate}) : ''}
                                        />
                                    </XGroup.Item>
                                    <XGroup.Item>
                                        <Button onPress={() => onOpenChange(true)} icon={<Calendar/>}/>
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
