import {LmButton} from "../../../src";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {XStack} from "tamagui";

export default {
    title: 'ui/forms/button',
    component: LmButton
} as ComponentMeta<typeof LmButton>;

const Template: ComponentStory<typeof LmButton> = (args) => <LmButton {...args} />
export const Primary = Template.bind({})
Primary.args = {
    children: 'Standard Button'
}

export const Sizes = () => (
    <XStack space={'$4'}>
        <LmButton size={'$2'}>size 2</LmButton>
        <LmButton size={'$4'}>size 4</LmButton>
        <LmButton size={'$6'}>size 6</LmButton>
        <LmButton size={'$8'}>size 8</LmButton>
    </XStack>
)

export const Colors = () => (
    <XStack space={'$4'}>
        <LmButton colorVariant={'primary'}>primary</LmButton>
        <LmButton colorVariant={'secondary'}>secondary</LmButton>
        <LmButton colorVariant={'success'}>success</LmButton>
        <LmButton colorVariant={'info'}>info</LmButton>
        <LmButton colorVariant={'warning'}>warning</LmButton>
        <LmButton colorVariant={'error'}>error</LmButton>
        <LmButton themeName={'dark_gray_alt2'}>dark gray alt</LmButton>
    </XStack>
)

export const Loading = () => (
    <XStack space={'$4'}>
        <LmButton size={'$2'} loading>size 2</LmButton>
        <LmButton size={'$4'} loading>size 4</LmButton>
        <LmButton size={'$6'} loading>size 6</LmButton>
        <LmButton size={'$8'} loading>size 8</LmButton>
    </XStack>
)