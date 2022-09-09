import {
    Select,
    SelectProps,
    Theme,
    YStack,
    LinearGradient,
    ThemeProps,
    Stack
} from "tamagui";
import {colormap, ThemeColors} from "../../themeMappings";
import {Check, ChevronDown, ChevronUp} from '@tamagui/feather-icons'
import {useState} from "react";
import {useThemeState} from "app/components/state/themeState";

type GetAltThemeNames<S> = (S extends `${string}_${infer Alt}` ? GetAltThemeNames<Alt> : S) | S

export type LmSelectProps = SelectProps & {
    value?: string,
    items: { name: string }[]
    colorVariant?: ThemeColors
    themeName?: ThemeProps['name']
    width?: number
    placeholder?: string
    dropDownLabel?: string // above the items list
}

export function LmSelect({
                             value,
                             colorVariant,
                             themeName,
                             items,
                             width = 200,
                             placeholder = 'Placeholder...',
                             dropDownLabel,
                             ...rest
                         }: LmSelectProps) {
    const [val, setVal] = useState(value || items[0].name.toLowerCase())

    const SelectComponent = () =>
        <Select sheetBreakpoint="sm" value={val} onValueChange={setVal} {...rest}>
            <Select.Trigger width={width} iconAfter={ChevronDown}>
                <Select.Value placeholder={placeholder}/>
            </Select.Trigger>

            <Select.Sheet modal dismissOnSnapToBottom>
                <Select.Sheet.Frame>
                    <Select.Sheet.ScrollView>
                        <Select.SheetContents/>
                    </Select.Sheet.ScrollView>
                </Select.Sheet.Frame>
                <Select.Sheet.Overlay/>
            </Select.Sheet>

            <Select.Content>
                <Select.ScrollUpButton alignItems="center"
                                       justifyContent="center"
                                       position="relative"
                                       width="100%"
                                       height="$3">
                    <YStack zIndex={10}>
                        <ChevronUp size={20}/>
                    </YStack>
                    <LinearGradient
                        start={[0, 0]}
                        end={[0, 1]}
                        fullscreen
                        colors={['$background', '$backgroundTransparent']}
                        borderRadius="$4"
                    />
                </Select.ScrollUpButton>

                <Select.Viewport minWidth={width}>
                    <Select.Group>
                        {dropDownLabel && <Select.Label>{dropDownLabel}</Select.Label>}
                        {items.map((item, i) => {
                            return (
                                <Select.Item index={i} key={item.name} value={item.name.toLowerCase()}>
                                    <Select.ItemText>{item.name}</Select.ItemText>
                                    <Select.ItemIndicator marginLeft="auto">
                                        <Check size={16}/>
                                    </Select.ItemIndicator>
                                </Select.Item>
                            )
                        })}
                    </Select.Group>
                </Select.Viewport>

                <Select.ScrollDownButton alignItems="center" justifyContent="center" position="relative" width="100%"
                                         height="$3">
                    <YStack zIndex={10}>
                        <ChevronDown size={20}/>
                    </YStack>
                    <LinearGradient
                        start={[0, 0]}
                        end={[0, 1]}
                        fullscreen
                        colors={['$backgroundTransparent', '$background']}
                        borderRadius="$4"
                    />
                </Select.ScrollDownButton>
            </Select.Content>
        </Select>

    return (
        <Stack theme={colorVariant ? colormap[colorVariant] as any : (themeName || undefined)}>
            <SelectComponent/>
        </Stack>
    )
}