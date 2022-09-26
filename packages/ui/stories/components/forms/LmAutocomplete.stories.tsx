import {LmAutocomplete} from "../../../src";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {fruitItemsFixtures} from "../../../fixtures/selectItems";

export default {
    title: 'ui/forms/autocomplete',
    component: LmAutocomplete
} as ComponentMeta<typeof LmAutocomplete>;
const options = fruitItemsFixtures

const Template: ComponentStory<typeof LmAutocomplete> = (args) => <LmAutocomplete {...args} />
export const Single = Template.bind({})
Single.args = {
    options
}

export const Multiple = Template.bind({})
Multiple.args = {
    options,
    multiple: true
}
