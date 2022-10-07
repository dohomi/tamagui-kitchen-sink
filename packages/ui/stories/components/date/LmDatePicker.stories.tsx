import {LmDatepicker} from "../../../src/components/forms/date/datepicker/LmDatepicker";

export default {
    title: 'ui/Date/DatePicker',
    component: LmDatepicker
}

const Template = (args) => <LmDatepicker {...args}/>

export const Single = Template.bind({})

export const SinglePreselect = Template.bind({})
SinglePreselect.args = {
    startDate: new Date('2022-03-01')
}

export const RangePicker = Template.bind({})
RangePicker.args = {
    isRangePicker: true
}

export const RangePickerPreselect = Template.bind({})
RangePickerPreselect.args = {
    isRangePicker: true,
    startDate: new Date('2022-03-01'),
    endDate: new Date('2022-03-15')
}

export const ThreeMonths = Template.bind({})
ThreeMonths.args = {
    isRangePicker: true,
    numberOfMonths: 3
}