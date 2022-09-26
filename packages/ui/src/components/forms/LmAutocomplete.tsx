import {Input, ListItem, Popover, XStack} from "tamagui";
import {useMultiSelectableList, useSelectableList} from "rooks";
import {CheckSquare, Square} from "@tamagui/feather-icons";
import {useId, useState} from "react";
import {LmFormFieldContainer} from "./LmFormFieldContainer";
import {FormContainerProps} from "./formContainerProps";

export type LmAutocompleteProps = FormContainerProps & {
    options: { label: string, value: string | number }[]
    multiple?: boolean
}


export function LmAutocomplete({
                                   options,
                                   multiple,
                                   labelInline,
                                   labelProps,
                                   helperText,
                                   required,
                                   label,
                                   error
                               }: LmAutocompleteProps) {
    const id = useId()
    const [filteredOptions, setOptions] = useState(options)
    const [
        selection,
        {matchSelection, toggleSelection},
    ] = useMultiSelectableList(options, [], true)
    const [selectionSingle, {
        matchSelection: matchSelectionSingle,
        toggleSelection: toggleSelectionSingle
    }] = useSelectableList(options, -1, true)
    const inputValue = multiple ? selection[1]
        .map((option) => option?.label)
        .join(', ') : selectionSingle[1]?.label
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
                    <Input value={inputValue ?? ''}
                           textOverflow="ellipsis"
                           whiteSpace="nowrap"
                           overflow="hidden"/>
                </Popover.Trigger>

                <Popover.Sheet modal dismissOnSnapToBottom>
                    <Popover.Sheet.Frame padding="$4">
                        <Popover.SheetContents/>
                    </Popover.Sheet.Frame>
                    <Popover.Sheet.Overlay/>
                </Popover.Sheet>

                <Popover.Content
                    bw={1}
                    p={0}
                    boc="$borderColor"
                    enterStyle={{x: 0, y: -10, o: 0}}
                    exitStyle={{x: 0, y: -10, o: 0}}
                    x={0}
                    y={0}
                    o={1}
                    animation="bouncy"
                    elevate
                >
                    <Popover.Arrow bw={1} boc="$borderColor"/>
                    <XStack space="$3" p={'$4'}>
                        <Input size="$3"
                               id="name"
                               placeholder={'Search...'}
                               width={'100%'}
                               onChangeText={text => {
                                   const filtered = options.filter(i => i.label.toLowerCase().indexOf(text.toLowerCase()) > -1)
                                   setOptions(filtered)
                               }}
                        />
                    </XStack>
                    <Popover.ScrollView style={{maxHeight: '50vh'}} keyboardShouldPersistTaps={true}>
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