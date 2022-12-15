import {ScrollView, YStack, YStackProps} from "tamagui";

export type LmDialogContentProps = YStackProps

export function LmDialogContent({children}: LmDialogContentProps) {
    return (
        <ScrollView padding={'$4'}>
            <YStack space>{children}</YStack>
        </ScrollView>
    )
}