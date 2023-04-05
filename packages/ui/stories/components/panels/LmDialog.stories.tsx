import React, {useState} from 'react'
import {Button, Text, XStack, YStack} from 'tamagui'
import {
    LmDialog,
    usePopoverState,
    LmButton
} from '../../../src'

import {WarningCircle, X} from 'tamagui-phosphor-icons'
import {LmSubmitButtonRhf, LmFormRhfProvider, LmInputRhf, LmSelectRhf} from "../../../src/form";

export default {
    title: 'ui/Panels/Dialog',
    component: LmDialog,
}

export const Basic = {
    args: {
        title: 'Some Title',
        description: 'This is the description of the Dialog',
        trigger: <Text>Open Dialog</Text>,
        children: <Text padding={'$4'}>Dialog content</Text>,
    },
}

export const FullScreen = {
    args: {
        title: 'Some Title',
        description: 'This is the description of the Dialog',
        trigger: <Text>Open Dialog</Text>,
        children: (
            <LmDialog.Content>
                <Text>Dialog content</Text>
            </LmDialog.Content>
        ),
        fullScreen: true,
    },
}

export const OnlyContent = {
    args: {
        trigger: <Text>Open Dialog</Text>,
        children: <Text padding={'$4'}>Dialog content</Text>,
        hideCloseButton: true,
    },
}

export const FixedWidthHeight = {
    args: {
        trigger: <Text>Open Dialog</Text>,
        children: <Text padding={'$4'}>Dialog content</Text>,
        hideCloseButton: true,
        dialogWidth: 600,
        dialogHeight: 400,
    },
}

export const ControlledState = () => {
    const dialogState = usePopoverState()
    return (
        <YStack>
            <Button onPress={() => dialogState.onOpenChange(true)}>Open Dialog</Button>
            <LmDialog {...dialogState} hideCloseButton={true}>
                <LmDialog.Content>
                    <XStack space alignItems={'center'} justifyContent={'space-between'} marginBottom={'$2'}>
                        <Text>This is some Content.</Text>
                        <Button
                            onPress={() => dialogState.onOpenChange(false)}
                            chromeless
                            circular
                            icon={<X/>}
                        />
                    </XStack>
                    <Text>
                        Some other content follows. You have full control of the opening state of the dialog.
                    </Text>
                </LmDialog.Content>
            </LmDialog>
        </YStack>
    )
}

export const FormInsideDialog = () => {
    const {open, onOpenChange} = usePopoverState()
    const [loading, setLoading] = useState(false)

    const fakeSubmit = async (data) => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            onOpenChange(false)
            console.log(data)
        }, 3000)
    }
    return (
        <YStack>
            <Button onPress={() => onOpenChange(true)}>Open Dialog</Button>
            <LmDialog onOpenChange={onOpenChange} open={open} title={'Contact data'}>
                <LmFormRhfProvider>
                    <LmDialog.Content>
                        <LmSelectRhf
                            name={'title'}
                            label={'Title'}
                            required
                            options={[
                                {value: 'mrs', label: 'Mrs.'},
                                {value: 'mr', label: 'Mr.'},
                            ]}
                        />
                        <LmInputRhf name={'firstName'} label={'First Name'} required/>
                        <LmInputRhf name={'lastName'} label={'Last Name'} required/>

                        <LmDialog
                            title={'Some Info'}
                            description={'This is a nested dialog'}
                            trigger={<LmButton icon={<WarningCircle/>}/>}
                        ></LmDialog>
                    </LmDialog.Content>

                    <LmDialog.Actions>
                        <LmSubmitButtonRhf onSubmit={fakeSubmit} loading={loading}>
                            Submit
                        </LmSubmitButtonRhf>
                    </LmDialog.Actions>
                </LmFormRhfProvider>
            </LmDialog>
        </YStack>
    )
}
