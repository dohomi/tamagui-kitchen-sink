import {LmAlert} from "../../../src";

export default {
    title: 'ui/content/alert',
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
