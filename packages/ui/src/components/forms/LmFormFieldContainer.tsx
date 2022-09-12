import {
    FontSizeTokens,
    Label,
    Paragraph,
    SizeTokens,
    styled,
    ThemeableStack,
    ThemeableStackProps,
    YStack
} from "tamagui";
import {FormContainerProps} from "./formContainerProps";

type LmFormContainerProps = ThemeableStackProps & FormContainerProps & {
    id: string
    size?: SizeTokens
}

const StackContainer = styled(ThemeableStack, {
    variants: {
        labelInline: {
            true: {
                flexDirection: 'row',
                space: true
            }
        }
    } as const
})

export function LmFormFieldContainer({
                                         label,
                                         children,
                                         helperText,
                                         id,
                                         size,
                                         labelProps,
                                         required,
                                         error,
                                         ...rest
                                     }: LmFormContainerProps) {
    return (
        <StackContainer {...rest} >
            {label && (
                <Label htmlFor={id} size={size}
                       {...labelProps}
                       color={error ? '$red10' : undefined}
                       width={rest.labelInline ? '150px' : undefined}
                       justifyContent={rest.labelInline ? 'flex-end' : undefined}
                >{label} {required && ` *`}</Label>
            )}
            <YStack>
                {children}
                {helperText && (
                    <Paragraph paddingLeft={'$2'} size={size as FontSizeTokens}
                               color={error ? '$red10' : undefined}>{helperText}</Paragraph>
                )}
            </YStack>
        </StackContainer>
    )
}