import React from "react";
import {LmInput} from "../../../src";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {XStack, YStack} from "tamagui";

export default {
    title: 'ui/Forms/Input',
    component: LmInput
} as ComponentMeta<typeof LmInput>;

const Template: ComponentStory<typeof LmInput> = (args) => <LmInput {...args} />
export const Basic = Template.bind({})
Basic.args = {
    colorVariant: 'primary',
    size: '$4',
    placeholder: 'Placeholder..'
}

export const Password = Template.bind({})
Password.args = {
    colorVariant: 'primary',
    size: '$4',
    placeholder: 'Password..',
    isPassword: true
}

export const PasswordFullWidth = () => (
    <YStack width={'50%'}>
        <LmInput fullWidth placeholder={'normal input'}/>
        <LmInput isPassword fullWidth placeholder={'normal input'}/>
    </YStack>
)


export const Sizes = () => (
    <YStack space={'$4'}>
        <h4>Placeholder:</h4>
        <XStack space={'$4'}>
            <LmInput size={'$2'} placeholder={'With placeholder'}/>
            <LmInput size={'$3'} placeholder={'With placeholder'}/>
            <LmInput size={'$4'} placeholder={'With placeholder'}/>
        </XStack>
        <h4>Default value:</h4>
        <XStack space={'$4'}>
            <LmInput size={'$2'} defaultValue={'With default value'}/>
            <LmInput size={'$3'} placeholder={'With placeholder'} defaultValue={'With default value'}/>
            <LmInput size={'$4'} defaultValue={'With default value'}/>
        </XStack>
        <h4>With label:</h4>
        <XStack space={'$4'}>
            <LmInput size={'$2'} label={'With Label:'}/>
            <LmInput size={'$3'} label={'With Label:'}/>
            <LmInput size={'$4'} label={'With Label:'}/>
        </XStack>
        <h4>With inline label:</h4>
        <XStack space={'$4'}>
            <LmInput size={'$2'} label={'Inline Label:'} labelInline/>
            <LmInput size={'$3'} label={'Inline Label:'} labelInline/>
            <LmInput size={'$4'} label={'Inline Label:'} labelInline/>
        </XStack>
        <h4>With required:</h4>
        <XStack space={'$4'}>
            <LmInput size={'$2'} label={'Inline Label:'} labelInline required/>
            <LmInput size={'$3'} label={'Inline Label:'} labelInline required/>
            <LmInput size={'$4'} label={'Inline Label:'} labelInline required/>
        </XStack>


    </YStack>
)

export const WithHelperText = () => (
    <YStack space>
        <h4>With helper text:</h4>
        <XStack space={'$4'}>
            <LmInput size={'$2'} label={'Inline Label:'} helperText={'Helper text..'}/>
            <LmInput size={'$3'} label={'Inline Label:'} helperText={'Helper text..'}/>
            <LmInput size={'$4'} label={'Inline Label:'} helperText={'Helper text..'}/>
        </XStack>
        <h4>With helper text inline:</h4>
        <XStack space={'$4'}>
            <LmInput size={'$2'} label={'Inline Label:'} helperText={'Helper text..'} labelInline/>
            <LmInput size={'$3'} label={'Inline Label:'} helperText={'Helper text..'} labelInline/>
            <LmInput size={'$4'} label={'Inline Label:'} helperText={'Helper text..'} labelInline/>
        </XStack>
    </YStack>
)

export const WithError = () => (
    <YStack space>
        <h4>With error:</h4>
        <XStack space={'$4'}>
            <LmInput size={'$2'} label={'Inline Label:'} required error/>
            <LmInput size={'$3'} label={'Inline Label:'} required error/>
            <LmInput size={'$4'} label={'Inline Label:'} required error/>
        </XStack>

        <h4>With error inline:</h4>
        <XStack space={'$4'}>
            <LmInput size={'$2'} label={'Inline Label:'} labelInline required error/>
            <LmInput size={'$3'} label={'Inline Label:'} labelInline required error/>
            <LmInput size={'$4'} label={'Inline Label:'} labelInline required error/>
        </XStack>
    </YStack>
)

export const HelperError = () => (
    <YStack space>
        <h4>With helper text error:</h4>
        <XStack space={'$4'}>
            <LmInput size={'$2'} label={'Inline Label:'} required error helperText={'Some error occured'}/>
            <LmInput size={'$3'} label={'Inline Label:'} required error helperText={'Some error occured'}/>
            <LmInput size={'$4'} label={'Inline Label:'} required error helperText={'Some error occured'}/>
        </XStack>

        <h4>With helper text error inline:</h4>
        <XStack space={'$4'}>
            <LmInput size={'$2'} label={'Inline Label:'} labelInline required error helperText={'Some error occured'}/>
            <LmInput size={'$3'} label={'Inline Label:'} labelInline required error helperText={'Some error occured'}/>
            <LmInput size={'$4'} label={'Inline Label:'} labelInline required error helperText={'Some error occured'}/>
        </XStack>
    </YStack>
)

export const ThemeColors = () => (
    <YStack space>
        <XStack space={'$4'}>
            <LmInput theme={'pink_alt1'} placeholder={'Placeholder..'}/>
            <LmInput theme={'pink_alt2'} placeholder={'Placeholder..'}/>
            <LmInput theme={'orange'} placeholder={'Placeholder..'}/>
        </XStack>
        <XStack space={'$4'}>
            <LmInput theme={'pink_alt1'} label={'Some label'}/>
            <LmInput theme={'pink_alt2'} label={'Some label'}/>
            <LmInput theme={'orange'} label={'Some label'}/>
        </XStack>
        <XStack space={'$4'}>
            <LmInput theme={'pink_alt1'} label={'Some label'} labelInline/>
            <LmInput theme={'pink_alt2'} label={'Some label'} labelInline/>
            <LmInput theme={'orange'} label={'Some label'} labelInline/>
        </XStack>
    </YStack>
)
