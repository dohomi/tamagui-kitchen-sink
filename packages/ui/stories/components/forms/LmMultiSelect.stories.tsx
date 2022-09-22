import {ComponentMeta, ComponentStory} from "@storybook/react";
import {LmMultiSelectProps, LmMultiSelect} from "../../../src";
import {fruitItemsFixtures} from "../../../fixtures/selectItems";

export default {
    title: 'ui/forms/MultiSelect',
    component: LmMultiSelect
} as ComponentMeta<typeof LmMultiSelect>;

const options = fruitItemsFixtures

const Template: ComponentStory<typeof LmMultiSelect> = (args: LmMultiSelectProps) => <LmMultiSelect {...args} />
export const Basic = Template.bind({})
Basic.args = {
    options,
    placeholder: "Multi Select",
    isMulti: true,
    isSearchable: true,
    isDisabled: false
}


