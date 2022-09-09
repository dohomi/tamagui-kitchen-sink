import {LmButton, LmButtonProps} from "../LmButton";
import {useFormContext} from "react-hook-form";

export function LmResetButtonRhf(props: LmButtonProps) {
    const {reset} = useFormContext()
    return (
        <LmButton {...props} onPress={(e) => {
            reset()
            if (typeof props.onPress === 'function') {
                props.onPress(e)
            }
        }}/>
    )
}