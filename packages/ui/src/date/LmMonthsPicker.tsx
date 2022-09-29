import {LmPopover} from "../components/panels/LmPopover";
import {LmInputTrigger} from "../components/forms/LmInputTrigger";
import {ListItem, ScrollView, SizeTokens, Text} from "tamagui";
import {getMonthOptions} from "./dateHelper";
import {useId, useState} from "react";
import {usePopoverState} from "../hooks";
import {LmFormFieldContainer} from "../components/forms";
import {LmFormContainerBaseTypes} from "../components/forms/formContainerTypes";

export type LmMonthsPickerProps = LmFormContainerBaseTypes & {
    placeholder?: string
    size?: SizeTokens
}


export function LmMonthsPicker({
                                   placeholder = '',
                                   required,
                                   error,
                                   helperText,
                                   label,
                                   labelProps,
                                   labelInline,
                                   size = '$12'
                               }: LmMonthsPickerProps) {
    const popoverState = usePopoverState()
    const id = useId()
    const names = getMonthOptions()
    const [val, setValue] = useState<number>()
    let inputValue = val ? names.find(i => i.value === val)?.label : placeholder
    return (
        <LmFormFieldContainer id={id}
                              error={error}
                              required={required}
                              labelProps={labelProps}
                              label={label}
                              labelInline={labelInline}
                              helperText={helperText}>
            <LmPopover
                popoverProps={{
                    ...popoverState,
                    sheetBreakpoint: false
                }}
                trigger={(
                    <LmInputTrigger width={size}>
                        <Text textOverflow="ellipsis"
                              whiteSpace="nowrap"
                              overflow="hidden">{inputValue ?? ''}</Text>
                    </LmInputTrigger>
                )}>

                <ScrollView maxHeight={250} width={'100%'}>
                    {names.map(({value, label}) => (
                        <ListItem
                            key={`val_${value}`}
                            onPress={() => {
                                setValue(value)
                                popoverState.onOpenChange(false)
                            }}>{label}</ListItem>
                    ))}
                </ScrollView>
            </LmPopover>
        </LmFormFieldContainer>
    )
}