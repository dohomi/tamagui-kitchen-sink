import {LinearGradient, Select, SelectProps, ThemeProps, YStack} from "tamagui";
import {colormap, ThemeColors} from "../../themeMappings";
import {Check, ChevronDown, ChevronUp} from '@tamagui/feather-icons'
import {useId} from "react";
import {LmFormFieldContainer} from "./LmFormFieldContainer";
import {FormContainerProps} from "./formContainerProps";

type GetAltThemeNames<S> = (S extends `${string}_${infer Alt}` ? GetAltThemeNames<Alt> : S) | S

export type LmSelectProps = SelectProps & FormContainerProps & {
    value?: string,
    options: { label: string, value: string | number }[]
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
                             options = [],
                             width = 200,
                             placeholder = 'Placeholder...',
                             dropDownLabel,
                             required, error, helperText, label, labelInline, labelProps,
                             ...rest
                         }: LmSelectProps) {
    const id = useId()
    const id2 = useId()
    rest.size = rest.size || '$3'

    return (
        <LmFormFieldContainer id={id}
                              theme={colorVariant ? colormap[colorVariant] as any : (themeName || undefined)}
                              error={error}
                              required={required}
                              labelProps={labelProps}
                              label={label}
                              size={rest.size}
                              labelInline={labelInline}
                              helperText={helperText}>
            <Select sheetBreakpoint="sm"
                    id={id2}
                    value={`${value}`}
                    {...rest}>
                <Select.Trigger width={width} iconAfter={ChevronDown} paddingVertical={0} minHeight={rest.size}>
                    <Select.Value placeholder={placeholder} paddingVertical={0}/>
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
                            {options.map((item, i) => {
                                return (
                                    <Select.Item index={i} key={item.value} value={`${item.value}`}>
                                        <Select.ItemText>{item.label}</Select.ItemText>
                                        <Select.ItemIndicator marginLeft="auto">
                                            <Check size={16}/>
                                        </Select.ItemIndicator>
                                    </Select.Item>
                                )
                            })}
                        </Select.Group>
                    </Select.Viewport>

                    <Select.ScrollDownButton alignItems="center" justifyContent="center" position="relative"
                                             width="100%"
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
        </LmFormFieldContainer>
    )
}