import {Button, ButtonProps, Spinner, Theme, ThemeProps} from "tamagui";
import {colormap, ThemeColors} from "../../themeMappings";

export type LmButtonProps = ButtonProps & {
    colorVariant?: ThemeColors
    themeName?: ThemeProps['name']
    loading?: boolean
}

export function LmButton({colorVariant, themeName, loading, ...rest}: LmButtonProps) {

    const Child = loading
        ? () => <Button {...rest}
                        icon={<Spinner/>}
                        disabled/>
        : () => <Button {...rest}/>

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