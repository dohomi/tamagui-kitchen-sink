import {ComponentMeta, ComponentStory} from "@storybook/react";
import {XStack, YStack} from "tamagui";
import {LmMultiSelect} from "../../../src";
import {fruitItemsFixtures} from "../../../fixtures/selectItems";

export default {
    title: 'ui/forms/MultiSelect',
    component: LmMultiSelect
} as ComponentMeta<typeof LmMultiSelect>;

const options = fruitItemsFixtures

const Template: ComponentStory<typeof LmMultiSelect> = (args) => <LmMultiSelect {...args} />
export const Basic = Template.bind({})
Basic.args = {
    options
}

export const Multiple = Template.bind({})
Multiple.args = {
    options,
    placeholder: "Multiple",
    isMulti: true
}
