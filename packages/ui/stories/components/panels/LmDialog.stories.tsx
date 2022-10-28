import React, {useState} from "react";
import {Button, Text, XStack, YStack} from "tamagui";
import {LmDialog, LmInputRhf, LmSelectRhf, LmSubmitButtonRhf, usePopoverState} from "../../../src";
import {AlertCircle, X} from "@tamagui/lucide-icons";
import {LmButton, LmFormRhfProvider} from "tamagui-extras";

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

export const FormInsideDialog = () => {
    const {open, onOpenChange} = usePopoverState()
    const [loading, setLoading] = useState(false)

    const fakeSubmit = async (data) => {
        setLoading(true)
        setTimeout(
            () => {
                setLoading(false)
                onOpenChange(false)
                console.log(data)
            },
            3000
        )
    }
    return (
        <YStack>
            <Button onPress={() => onOpenChange(true)}>Open Dialog</Button>
            <LmDialog onOpenChange={onOpenChange}
                      open={open}
                      title={'Contact data'}
            >
                <LmFormRhfProvider>
                    <YStack space>
                        <LmSelectRhf name={'title'}
                                     label={'Title'}
                                     required
                                     options={[{value: 'mrs', label: 'Mrs.'}, {value: 'mr', label: 'Mr.'}]}/>
                        <LmInputRhf name={'firstName'} label={'First Name'} required/>
                        <LmInputRhf name={'lastName'} label={'Last Name'} required/>
                        <LmSubmitButtonRhf onSubmit={fakeSubmit} loading={loading}>Submit</LmSubmitButtonRhf>
                        <LmDialog title={'Some Info'}
                                  description={'This is a nested dialog'}
                                  trigger={<LmButton icon={AlertCircle}/>}>
                        </LmDialog>
                    </YStack>
                </LmFormRhfProvider>

            </LmDialog>
        </YStack>
    )
}