import {Button, ButtonProps, Spinner, Theme, ThemeProps} from "tamagui";
import {colormap, ThemeColors} from "../../themeMappings";

export type LmButtonProps = ButtonProps & {
    colorVariant?: ThemeColors
    themeName?: ThemeProps['name']
    loading?: boolean
}

export function LmButton({colorVariant, themeName, loading, ...rest}: LmButtonProps) {

    let isCircular = rest.circular ?? !rest.children;
    const Child = loading ? () => {
        return <Button circular={isCircular} {...rest} icon={<Spinner/>}
                       disabled/>;
    } : () => <Button circular={isCircular} {...rest}/>

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