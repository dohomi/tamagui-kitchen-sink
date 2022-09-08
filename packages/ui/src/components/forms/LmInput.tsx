import {Input, InputProps, TextArea, Theme, ThemeProps} from "tamagui";
import {colormap, ThemeColors} from "../../themeMappings";

export type LmInputProps = InputProps & {
    colorVariant?: ThemeColors
    themeName?: ThemeProps['name']
    multiline?: boolean
}

export function LmInput({colorVariant, themeName, multiline, ...rest}: LmInputProps) {
    const Child = () => multiline ? <TextArea {...rest} /> : <Input {...rest} />

    if (colorVariant || themeName) {
        return (
            <Theme name={colorVariant ? colormap[colorVariant] as any : themeName}>
                <Child/>
            </Theme>
        )
    }
    return (
        <Child/>
    )
}