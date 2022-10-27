import React from "react";
import {Button, Text, XStack, YStack} from "tamagui";
import {LmDialog, usePopoverState} from "../../../src";
import {X} from "@tamagui/lucide-icons";

export default {
    title: 'ui/Panels/Dialog',
    component: LmDialog
}

const Template = (args) => <LmDialog {...args}/>

export const Basic = Template.bind({})
Basic.args = {
    title: 'Some Title',
    description: 'This is the description of the Dialog',
    trigger: (
        <Text>Open Dialog</Text>
    ),
    children: (
        <Text padding={'$4'}>Dialog content</Text>
    )
}

export const FullScreen = Template.bind({})
FullScreen.args = {
    title: 'Some Title',
    description: 'This is the description of the Dialog',
    trigger: (
        <Text>Open Dialog</Text>
    ),
    children: (
        <Text padding={'$4'}>Dialog content</Text>
    ),
    isFullscreen: true
}

export const OnlyContent = Template.bind({})
OnlyContent.args = {
    trigger: (
        <Text>Open Dialog</Text>
    ),
    children: (
        <Text padding={'$4'}>Dialog content</Text>
    ),
    hideCloseButton: true
}

export const ControlledState = () => {
    const {open, onOpenChange} = usePopoverState()
    return (
        <YStack>
            <Button onPress={() => onOpenChange(true)}>Open Dialog</Button>
            <LmDialog onOpenChange={onOpenChange}
                      open={open}
                      hideCloseButton={true}
            >
                <XStack space alignItems={'center'} justifyContent={'space-between'} marginBottom={'$2'}>
                    <Text>This is some Content.</Text>
                    <Button onPress={() => onOpenChange(false)} chromeless circular icon={X}/>
                </XStack>
                <Text>Some other content follows. You have full control of the opening state of the dialog.</Text>
            </LmDialog>
        </YStack>
    )
}