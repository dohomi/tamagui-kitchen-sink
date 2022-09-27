import {Input, ListItem, Popover, styled, Text, ThemeableStack, XStack} from "tamagui";
import {useMultiSelectableList, useSelectableList} from "rooks";
import {CheckSquare, Square} from "@tamagui/feather-icons";
import {useEffect, useId, useState} from "react";
import {LmFormFieldContainer} from "./LmFormFieldContainer";
import {FormContainerProps} from "./formContainerProps";

type Option = { label: string, value: string | number };
export type LmAutocompleteProps = FormContainerProps & {
    options: Option[]
    multiple?: boolean
    value?: null | Option | Option[]
    onChange?: (v: null | Option | Option[]) => void
    placeholderSearch?: string
}

const InputTrigger = styled(ThemeableStack, {
    hoverTheme: true,
    pressTheme: true,
    focusTheme: true,
    bordered: true,
    minHeight: '$4',
    borderRadius: '$4',
    display: 'flex',
    justifyContent: 'center',
    padding: '$4'
})

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
    ] = useMultiSelectableList(options, multiple && Array.isArray(value) ? (value || []).map(i => options.findIndex(k => k.value === i.value)) : [], true)
    const [selectionSingle, {
        matchSelection: matchSelectionSingle,
        toggleSelection: toggleSelectionSingle
    }] = useSelectableList(options, !multiple && !Array.isArray(value) ? options.findIndex(i => i.value === value?.value) : -1, true)


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
            <Popover sheetBreakpoint="sm" size="$5" allowFlip>
                <Popover.Trigger asChild>
                    <InputTrigger>
                        <Text textOverflow="ellipsis"
                              whiteSpace="nowrap"
                              overflow="hidden">{inputValue ?? ''}</Text>
                    </InputTrigger>
                </Popover.Trigger>

                <Popover.Sheet modal dismissOnSnapToBottom>
                    <Popover.Sheet.Frame padding={0}>
                        <Popover.SheetContents/>
                    </Popover.Sheet.Frame>
                    <Popover.Sheet.Overlay/>
                </Popover.Sheet>

                <Popover.Content
                    borderWidth={1}
                    padding={0}
                    borderColor="$borderColor"
                    enterStyle={{
                        x: 0,
                        y: -10,
                        opacity: 0
                    }}
                    exitStyle={{
                        x: 0, y: -10, opacity: 0
                    }}
                    x={0}
                    y={0}
                    opacity={1}
                    animation="bouncy"
                    elevate
                >
                    <Popover.Arrow borderWidth={1} borderColor="$borderColor"/>

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

                        {filteredOptions.map((item, index) => {
                            let selected = multiple ?
                                matchSelection({index}) :
                                matchSelectionSingle({index})
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

                </Popover.Content>
            </Popover>
        </LmFormFieldContainer>
    )
}