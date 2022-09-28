import {LmAlert} from "../../../src";

export default {
    title: 'ui/Content/Alert',
    component: LmAlert
}

const Template = (args) => <LmAlert {...args} />

export const Basic = Template.bind({})
Basic.args = {
    text: 'Some basic alert text.'
}

export const Error = Template.bind({})
Error.args = {
    text: 'Some basic alert text.',
    severity: 'error'
}

export const Info = Template.bind({})
Info.args = {
    text: 'Some basic alert text.',
    severity: 'info'
}

export const Warning = Template.bind({})
Warning.args = {
    text: 'Some basic alert text.',
    severity: 'warning'
}


export const WarningOutlined = Template.bind({})
WarningOutlined.args = {
    text: 'Some basic alert text.',
    severity: 'warning',
    outlined: true
}
