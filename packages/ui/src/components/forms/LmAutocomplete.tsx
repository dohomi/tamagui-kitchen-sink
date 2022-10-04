import {Input, ListItem, Popover, Text, XStack} from "tamagui";
import {CheckSquare, Square} from "@tamagui/feather-icons";
import {useEffect, useId, useState} from "react";
import {LmFormFieldContainer} from "./LmFormFieldContainer";
import {LmFormContainerBaseTypes} from "./formContainerTypes";
import {LmPopover} from "../panels/LmPopover";
import {LmInputTrigger} from "./LmInputTrigger";
// import {useMultiSelectableList} from "../../hooks/useMultiSelectableList";
// import {useSelectableList} from "../../hooks/useSelectableList";
import {useMultiSelectableList, useSelectableList} from 'rooks'

type Option = { label: string, value: string | number };
export type LmAutocompleteProps = LmFormContainerBaseTypes & {
    options: Option[]
    multiple?: boolean
    value?: null | Option | Option[]
    onChange?: (v: null | Option | Option[]) => void
    placeholderSearch?: string
}


export function LmAutocomplete({
                                   options,
                                   multiple,
                                   labelInline,
                                   labelProps,
                                   helperText,
                                   required,
                                   label,
                                   placeholderSearch,
                                   value,
                                   onChange,
                                   error
                               }: LmAutocompleteProps) {
    const id = useId()
    const [filteredOptions, setOptions] = useState(options)
    const [
        selection,
        {matchSelection, toggleSelection},
    ] = useMultiSelectableList(
        options,
        multiple && Array.isArray(value) ? (value || []).map(i => options.findIndex(k => k.value === i?.value ?? i)) : [],
        true,
    )
    const [selectionSingle, {
        matchSelection: matchSelectionSingle,
        toggleSelection: toggleSelectionSingle
    }] = useSelectableList(
        options,
        !multiple && !Array.isArray(value) ? options.findIndex(i => i.value === value?.value ?? value) : -1,
        true,
    )


    let selectionMultiple = selection?.[1] ?? [];
    useEffect(() => {
        if (!multiple && onChange) {
            onChange(selectionSingle[1])
        }
    }, [selectionSingle[1], multiple])

    useEffect(() => {
        if (multiple && onChange) {
            onChange(selectionMultiple as any)
        }
    }, [JSON.stringify(selectionMultiple), multiple])


    const inputValue = multiple ? selectionMultiple
        .map((option) => option?.label)
        .join(', ') : selectionSingle?.[1]?.label


    return (
        <LmFormFieldContainer id={id}
                              error={error}
                              required={required}
                              labelProps={labelProps}
                              label={label}
                              labelInline={labelInline}
                              helperText={helperText}>
            <LmPopover trigger={(
                <LmInputTrigger>
                    <Text textOverflow="ellipsis"
                          whiteSpace="nowrap"
                          overflow="hidden">{inputValue ?? ''}</Text>
                </LmInputTrigger>
            )}>
                <XStack space="$3" padding={'$4'}>
                    <Input size="$3"
                           placeholder={placeholderSearch}
                           width={'100%'}
                           onChangeText={text => {
                               const filtered = options.filter(i => i.label.toLowerCase().indexOf(text.toLowerCase()) > -1)
                               setOptions(filtered)
                           }}
                    />
                </XStack>

                <Popover.ScrollView keyboardShouldPersistTaps={true} style={{maxHeight: 300, width: '100%'}}>

                    {filteredOptions.map((item) => {
                        let selected = multiple ?
                            matchSelection({value: item}) :
                            matchSelectionSingle({value: item})

                        return (
                            <ListItem hoverTheme
                                      key={item.value}
                                      icon={selected ? <CheckSquare/> : <Square/>}
                                      title={item.label}
                                      onPress={() => {
                                          if (multiple) {
                                              toggleSelection({value: item})()
                                          } else {
                                              toggleSelectionSingle({value: item})()
                                          }
                                      }}/>
                        )
                    })}
                </Popover.ScrollView>
            </LmPopover>
        </LmFormFieldContainer>
    )
}