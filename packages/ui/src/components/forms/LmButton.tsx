import {
    ButtonFrame,
    ButtonProps,
    buttonStaticConfig,
    ButtonText,
    Spinner,
    styled,
    TamaguiElement,
    themeable,
    useButton
} from "tamagui";
import {colormap, ThemeColors} from "../../themeMappings";
import {forwardRef} from "react";

export type LmButtonProps = ButtonProps & {
    colorVariant?: ThemeColors
    loading?: boolean
}


const CustomButtonFrame = styled(ButtonFrame)

const ButtonComponent = forwardRef<TamaguiElement, LmButtonProps>(function Button({
                                                                                      loading,
                                                                                      colorVariant,
                                                                                      ...props
                                                                                  }, ref) {
    const {props: buttonProps} = useButton(
        {
            ...props,
            ...loading && ({
                icon: <Spinner/>,
                disabled: true
            })
        },
        // optionally customize the inner Text
        {Text: ButtonText}
    )
    return <CustomButtonFrame {...buttonProps}
                              theme={colorVariant ? colormap[colorVariant] : props.theme}
                              ref={ref}
    />
})

// Wrapping in extractable() lets the compiler run build-time optimizations on your custom Button
// Wrapping in themable means `<Button theme="" />` properly updates theme before useButton needs it
export const LmButton = ButtonFrame.extractable(themeable(ButtonComponent), buttonStaticConfig)