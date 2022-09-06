import {Button, ButtonProps, Spinner, Theme, ThemeProps} from "tamagui";

type ThemeColors = 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'error'

const colormap: { [k in ThemeColors]: ThemeProps['name'] } = {
    success: 'green_alt1',
    error: 'red_alt1',
    info: 'blue_alt1',
    primary: 'dark_blue_alt1',
    secondary: 'dark_gray_alt2',
    warning: 'orange_alt2'
}

export type LmButtonProps = ButtonProps & {
    colorVariant?: ThemeColors
    themeName?: ThemeProps['name']
    loading?: boolean
}

export function LmButton({colorVariant, themeName, loading, ...rest}: LmButtonProps) {
    const Child = loading ? () => <Button {...rest} icon={<Spinner/>} disabled/> : () => <Button {...rest}/>
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