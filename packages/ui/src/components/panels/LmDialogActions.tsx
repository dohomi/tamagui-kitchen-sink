import {XStack, XStackProps} from "tamagui";

export type LmDialogActionsProps = XStackProps

export function LmDialogActions({children, ...rest}: LmDialogActionsProps) {
    return (
        <XStack justifyContent={'flex-end'} alignItems={'center'} {...rest}>{children}</XStack>
    )
}