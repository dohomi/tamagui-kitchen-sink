import {Text, YStack} from "tamagui";
import {LmSheet, usePopoverState} from "../../../src";
import {LmButton} from "tamagui-extras";

export default {
    title: 'ui/Panels/Popover',
    component: LmSheet
}

export const Basic = () => {
    const props = usePopoverState()
    return (
        <YStack>
            <LmButton onPress={() => props.onOpenChange(true)}>Open Sheet</LmButton>
            <LmSheet {...props}>
                <Text padding={'$4'}>Some Popover content</Text>
            </LmSheet>
        </YStack>
    )
}

export const FullScreen = () => {
    const props = usePopoverState()
    return (
        <YStack>
            <LmButton onPress={() => props.onOpenChange(true)}>Open Sheet</LmButton>
            <LmSheet {...props} fullScreen>
                <YStack justifyContent={'center'} flex={1} alignItems={'center'}>
                    <Text padding={'$4'}>Some Popover content</Text>
                    <LmButton onPress={() => props.onOpenChange(false)}>Close</LmButton>
                </YStack>
            </LmSheet>
        </YStack>
    )
}