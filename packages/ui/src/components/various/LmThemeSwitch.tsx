import {LmButton, LmButtonProps} from "../forms/LmButton";
import {useThemeName} from "tamagui";

type LmThemeSwitchProps = LmButtonProps

export function LmThemeSwitch(props: LmThemeSwitchProps) {
    const {} = useThemeName()
    return (
        <LmButton onPress={() => {

        }} {...props} />
    )
}