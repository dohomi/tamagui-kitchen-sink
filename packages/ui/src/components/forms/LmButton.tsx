import {Button, ButtonProps, Spinner} from "tamagui";
import {colormap, ThemeColors} from "../../themeMappings";

export type LmButtonProps = ButtonProps & {
    colorVariant?: ThemeColors
    loading?: boolean
}

export function LmButton({loading, colorVariant, ...props}: LmButtonProps) {
    return (
        <Button {...props}
                theme={colorVariant ? colormap[colorVariant] : props.theme}
                {...loading && ({
                    icon: <Spinner/>,
                    disabled: true
                })}/>
    )
}