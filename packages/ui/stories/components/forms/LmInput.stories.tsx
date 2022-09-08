import {LmInput} from "../../../src";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {XStack} from "tamagui";

export default {
    title: 'ui/forms/input',
    component: LmInput
} as ComponentMeta<typeof LmInput>;

const Template: ComponentStory<typeof LmInput> = (args) => <LmInput {...args} />
export const Primary = Template.bind({})
Primary.args = {
}

export const Sizes = () => (
    <XStack space={'$4'}>
        <LmInput size={'$2'} />
        <LmInput size={'$4'} />
        <LmInput size={'$6'} />
        <LmInput size={'$8'} />
        <LmInput size={'$10'} />
    </XStack>
)

export const Colors = () => (
    <XStack space={'$4'}>
        <LmInput colorVariant={'primary'} />
        <LmInput colorVariant={'secondary'} />
        <LmInput colorVariant={'success'} />
        <LmInput colorVariant={'info'} />
        <LmInput colorVariant={'warning'} />
        <LmInput colorVariant={'error'} />
        <LmInput themeName={'dark_gray_alt2'} />
    </XStack>
)
