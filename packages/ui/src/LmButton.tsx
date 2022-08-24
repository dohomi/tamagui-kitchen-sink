import {XStack, ButtonProps} from "tamagui";

export function LmButton(props: ButtonProps) {
    console.log("render LM_BUTTON")
    return (
        <XStack {...props}/>
    )
}