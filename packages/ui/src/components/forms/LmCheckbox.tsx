import {ReactNode, useState} from "react";
import {LmButton} from "./LmButton";
import {CheckSquare, Square} from "@tamagui/feather-icons";
import {
    FontSizeTokens,
    Label,
    Paragraph,
    SizeTokens,
    useIsomorphicLayoutEffect,
    XStack,
    XStackProps,
    YStack
} from "tamagui";

export type LmCheckboxProps = XStackProps & {
    label?: ReactNode
    onChange?: (bool: boolean) => void
    value?: boolean
    error?: boolean
    helperText?: ReactNode
    size?: SizeTokens
    required?: boolean
}

export function LmCheckbox({
                               label,
                               onChange,
                               error,
                               helperText,
                               size = '$3',
                               value,
                               required,
                               ...stackProps
                           }: LmCheckboxProps) {
    const [isChecked, setChecked] = useState<boolean>(!!value)
    useIsomorphicLayoutEffect(
        () => {
            if (typeof (value) === 'boolean') {
                setChecked(value)
            }
        },
        [value]
    )
    const toggle = () => {
        let val
        setChecked(prevState => {
            val = !prevState
            return !prevState
        })
        if (typeof onChange === 'function') {
            onChange(val)
        }
    }

    return (
        <XStack space {...stackProps}>
            <LmButton icon={isChecked ? <CheckSquare/> : <Square/>}
                      chromeless
                      size={size}
                      color={error ? '$red10' : undefined}
                      circular
                      onPress={toggle}/>
            {label && (
                <YStack>
                    <Label onPress={toggle} size={size}>{required ? '* ' : ''}{label}</Label>
                    {helperText && (
                        <Paragraph paddingLeft={'$2'} marginTop={0}
                                   size={size as FontSizeTokens}
                                   color={error ? '$red10' : undefined}>{helperText}</Paragraph>
                    )}
                </YStack>
            )}
        </XStack>
    )
}