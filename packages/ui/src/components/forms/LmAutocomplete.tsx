import {Input, Label, ListItem, Popover, Stack, XStack} from "tamagui";
import {useMultiSelectableList, useSelect} from "rooks";
import {CheckSquare, Square} from "@tamagui/feather-icons";

export type LmAutocompleteProps = {
    options: { label: string, value: string | number }[]
    multiple?: boolean
}


export function LmAutocomplete({options, multiple}: LmAutocompleteProps) {
    const [
        selection,
        {matchSelection, toggleSelection, updateSelections},
    ] = useMultiSelectableList(options)
    const {index: singleIndex, setIndex, item} = useSelect(options)
    const label = multiple ? selection
        .map((option) => {
            console.log(typeof option, option)
            const v = Array.isArray(option) ? option[0] : option
            return option?.label ?? options[option]?.label
        })
        .join(',') : item.label
    console.log(selection)
    return (
        <Popover sheetBreakpoint="sm" size="$5">
            <Popover.Trigger asChild>
                <Stack width={'$4'}>
                    {label}
                </Stack>
            </Popover.Trigger>

            <Popover.Sheet modal dismissOnSnapToBottom>
                <Popover.Sheet.Frame padding="$4">
                    <Popover.SheetContents/>
                </Popover.Sheet.Frame>
                <Popover.Sheet.Overlay/>
            </Popover.Sheet>

            <Popover.Content
                bw={1}
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

                <XStack space="$3">
                    <Label size="$3" htmlFor="name">
                        Name
                    </Label>
                    <Input size="$3" id="name"/>
                </XStack>
                <Popover.ScrollView style={{maxHeight: 300}}>
                    {options.map((item, index) => {
                        let selected = multiple ? matchSelection({index}) : index === singleIndex
                        return (
                            <ListItem hoverTheme
                                      key={item.value}
                                      icon={selected ? <CheckSquare/> : <Square/>}
                                      title={item.label}
                                      onPress={() => {
                                          if (multiple) {
                                              console.log('hier', selected)
                                              toggleSelection({index})()
                                          } else {
                                              setIndex(index)
                                          }
                                      }}/>
                        )
                    })}
                </Popover.ScrollView>
            </Popover.Content>
        </Popover>
    )
}