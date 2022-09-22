import {ComponentMeta, ComponentStory} from "@storybook/react";
import {LmSlider} from "../../../src/components/forms/LmSlider";
import {YStack} from "tamagui";

export default {
    title: 'ui/forms/slider',
    component: LmSlider
} as ComponentMeta<typeof LmSlider>;

const Template: ComponentStory<typeof LmSlider> = (args) => <LmSlider {...args} />
export const Basic = Template.bind({})
Basic.args = {}

export const Colors = () => (
    <YStack space={'$4'}>
        <LmSlider color={'$blue10'}/>
        <LmSlider color={'$red10'}/>
    </YStack>
)

export const ColorsActiveOnly = () => (
    <YStack space={'$4'}>
        <LmSlider color={'$blue10'} colorActiveOnly/>
        <LmSlider color={'$red10'} colorActiveOnly/>
    </YStack>
)