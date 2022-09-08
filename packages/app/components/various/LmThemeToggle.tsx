import {LmButton, LmButtonProps} from "@my/ui";
import {useThemeState} from "../state/themeState";

type LmThemeSwitchProps = LmButtonProps

export function LmThemeToggle(props: LmThemeSwitchProps) {
    const {name, changeTheme} = useThemeState()

    return (
        <LmButton
            onPress={() => {
                const isDark = name === 'dark'
                changeTheme(isDark ? 'light' : 'dark')
                console.log(isDark)
            }} {...props} />
    )
}