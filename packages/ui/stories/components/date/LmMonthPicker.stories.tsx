import {LmMonthsPicker} from "../../../src";

export default {
    title: 'ui/Date/MonthPicker',
    component: LmMonthsPicker
}

const Template = (args) => <LmMonthsPicker {...args}/>

export const Basic = Template.bind({})
Basic.args = {
    label: 'Month Picker'
}

export const BasicInline = Template.bind({})
BasicInline.args = {
    label: 'Month Picker',
    labelInline: true
}