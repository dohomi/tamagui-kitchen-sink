import {XStack, XStackProps} from "tamagui";

export type LmDialogActionsProps = XStackProps

export function LmDialogActions({children, ...rest}: LmDialogActionsProps) {
    return (
        <XStack justifyContent={'flex-end'} alignItems={'center'}
                paddingLeft={'$4'}
                paddingRight={'$4'}
                paddingBottom={'$4'}
                {...rest}>{children}</XStack>
    )
}