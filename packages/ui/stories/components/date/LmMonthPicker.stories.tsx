import {LmMonthsPicker} from "../../../src/date/LmMonthsPicker";

export default {
    title: 'ui/Date/MonthPicker',
    component: LmMonthsPicker
}

const Template = (args) => <LmMonthsPicker {...args}/>

export const Basic = Template.bind({})
Basic.args = {
    label: 'Datepicker'
}

export const BasicInline = Template.bind({})
BasicInline.args = {
    label: 'Datepicker',
    labelInline: true
}