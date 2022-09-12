import {LmButton, LmButtonProps} from "@my/ui";
import {useThemeToggle} from "app/src/state/themeState";

type LmThemeSwitchProps = LmButtonProps

export function LmThemeToggle(props: LmThemeSwitchProps) {
    const toggleTheme = useThemeToggle()

    return (
        <LmButton
            onPress={() => {
                toggleTheme()
            }} {...props} />
    )
}