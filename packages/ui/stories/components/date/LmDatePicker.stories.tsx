import {LmDatepicker} from "../../../src/date/datepicker/LmDatepicker";

export default {
    title: 'ui/Date/DatePicker',
    component: LmDatepicker
}

const Template = (args) => <LmDatepicker {...args}/>

export const Single = Template.bind({})

export const RangePicker = Template.bind({})
RangePicker.args = {
    isRangePicker: true
}

export const ThreeMonths = Template.bind({})
ThreeMonths.args = {
    isRangePicker: true,
    numberOfMonths: 3
}