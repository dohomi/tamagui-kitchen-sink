import {Input, InputProps, Label, LabelProps, TextArea, Theme, ThemeProps} from "tamagui";
import {colormap, ThemeColors} from "../../themeMappings";

export type LmInputProps = InputProps & {
    colorVariant?: ThemeColors
    themeName?: ThemeProps['name']
    multiline?: boolean
    labelText?: string
    labelProps?: LabelProps
}

export function LmInput({colorVariant, themeName, multiline, labelText, labelProps, ...rest}: LmInputProps) {
    const InputChild = () => multiline ? <TextArea {...rest} /> : <Input {...rest} />
    const LabelChild = () => labelText ? <Label {...labelProps}>{labelText}</Label> : null

    if (colorVariant || themeName) {
        return (
            <Theme name={colorVariant ? colormap[colorVariant] as any : themeName}>
                <LabelChild/>
                <InputChild/>
            </Theme>
        )
    }
    return (
        <>
            <LabelChild/>
            <InputChild/>
        </>
    )
}