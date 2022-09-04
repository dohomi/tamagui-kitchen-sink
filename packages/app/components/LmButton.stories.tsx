import {LmButton} from "./LmButton";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'forms/LmButtonApp',
    component: LmButton
} as ComponentMeta<typeof LmButton>;

const Template: ComponentStory<typeof LmButton> = (args) => <LmButton {...args} />
export const Primary = Template.bind({})
Primary.args = {
    children: 'Standard Button'
}
