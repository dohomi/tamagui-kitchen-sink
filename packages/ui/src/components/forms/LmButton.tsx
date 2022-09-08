import {Button, ButtonProps, Spinner, Theme, ThemeProps} from "tamagui";
import {colormap, ThemeColors} from "../../themeMappings";

export type LmButtonProps = ButtonProps & {
    colorVariant?: ThemeColors
    themeName?: ThemeProps['name']
    loading?: boolean
}

export function LmButton({colorVariant, themeName, loading, ...rest}: LmButtonProps) {
    let paddingHorizontal = rest.size;
    let [, currentSize] = (rest.size as string)?.split('$');
    console.log(currentSize)
    const customProps: ButtonProps = {

        borderRadius: 100000,
        noTextWrap: true,
        // paddingHorizontal: `$${Number(currentSize || 4) - 1}`
    }

    const Child = loading ? () => <Button {...rest} icon={<Spinner/>} disabled {...customProps}/> : () =>
        <Button {...rest} {...customProps}/>

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