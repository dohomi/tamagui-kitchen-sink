import {LmAutocomplete} from "../../../src";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {fruitItemsFixtures} from "../../../fixtures/selectItems";
import {LmFormRhfProvider} from "@my/ui";
import {LmAutocompleteRhf} from "../../../src/components/forms/rhf/LmAutocompleteRhf";

export default {
    title: 'ui/forms/autocomplete',
    component: LmAutocomplete
} as ComponentMeta<typeof LmAutocomplete>;
const options = fruitItemsFixtures

const Template: ComponentStory<typeof LmAutocomplete> = (args) => <LmAutocomplete {...args} />
export const Single = Template.bind({})
Single.args = {
    options,
    label: 'Autocomplete Label'
}

export const SingleInline = Template.bind({})
SingleInline.args = {
    options,
    labelInline: true,
    label: 'Autocomplete Label'
}

export const Multiple = Template.bind({})
Multiple.args = {
    options,
    multiple: true
}

export const SingleRhf = () => (
    <LmFormRhfProvider defaultValues={{
        pre: {value: 'Pear'},
        pre_matched: 'Pear'
    }}>
        <LmAutocompleteRhf label={'Single'} name={'autocomplete'} options={options}/>
        <LmAutocompleteRhf label={'Single Preselected'} name={'pre'} options={options}/>
        <LmAutocompleteRhf label={'Single Preselected'} name={'pre_matched'} matchId={true} options={options}/>
    </LmFormRhfProvider>
)

export const MultipleRhf = () => (
    <LmFormRhfProvider defaultValues={{
        pre: [{value: 'Pear'}],
        pre_matched: ['Pear']
    }}>
        <LmAutocompleteRhf label={'Multiple'} name={'autocomplete'} options={options} multiple/>
        <LmAutocompleteRhf label={'Multiple Preselected'} name={'pre'} options={options} multiple/>
        <LmAutocompleteRhf label={'Multiple Preselected'} name={'pre_matched'} matchId options={options} multiple/>
    </LmFormRhfProvider>
)