import {LmButton} from "../src";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'forms/LmButton',
    component: LmButton
} as ComponentMeta<typeof LmButton>;

const Template: ComponentStory<typeof LmButton> = (args) => <LmButton {...args} />
export const Primary = Template.bind({})
Primary.args = {
    children: 'Standard Button'
}
