import {ComponentMeta, ComponentStory} from "@storybook/react";
import {LmMultiSelectProps, LmMultiSelectWeb} from "../../../src";
import {fruitItemsFixtures} from "../../../fixtures/selectItems";

export default {
    title: 'ui/forms/MultiSelect',
    component: LmMultiSelectWeb
} as ComponentMeta<typeof LmMultiSelectWeb>;

const options = fruitItemsFixtures

const Template: ComponentStory<typeof LmMultiSelectWeb> = (args: LmMultiSelectProps) => <LmMultiSelectWeb {...args} />
export const Basic = Template.bind({})
Basic.args = {
    options,
    placeholder: "Multi Select",
    isMulti: true,
    isSearchable: true,
    isDisabled: false
}


