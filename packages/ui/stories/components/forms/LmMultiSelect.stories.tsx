import {ComponentMeta, ComponentStory} from "@storybook/react";
import {LmMultiSelectProps, LmMultiSelect, LmInput, XStack, YStack} from "../../../src";
import {fruitItemsFixtures} from "../../../fixtures/selectItems";
import React from "react";

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


export const WithFormContainer = () => (
    <YStack space>
        <h4>With helper text:</h4>
        <XStack space={'$4'}>
            <LmMultiSelect label={'Label:'} helperText={'Helper text..'} options={options}/>
        </XStack>
        <h4>With helper text inline:</h4>
        <XStack space={'$4'}>
            <LmMultiSelect label={'Inline Label:'} helperText={'Helper text..'} labelInline options={options}/>
        </XStack>
        <h4>With error:</h4>
        <XStack space={'$4'}>
            <LmMultiSelect label={'Label:'} required error options={options} isMulti/>
        </XStack>
        <h4>With helper text error:</h4>
        <XStack space={'$4'}>
            <LmMultiSelect label={'Label:'} helperText={'Helper text..'} required error options={options} isMulti/>
        </XStack>
    </YStack>
)