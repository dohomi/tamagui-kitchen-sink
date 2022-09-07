import {LmIcon} from "../../../src/components/content/LmIcon";

export default {
    title: 'ui/content/icon',
    component: LmIcon
}

const Template = (args) => <LmIcon {...args}/>

export const Basic = Template.bind({})
Basic.args = {
    iconName: 'download'
}

export const Size = Template.bind({})
Size.args = {
    iconName: 'bug',
    size: '$8',
    iconSize: 80
}

export const BgColor = Template.bind({})
BgColor.args = {
    iconName: 'bug',
    size: '$8',
    iconSize: 60,
    backgroundColor: '$red1'
}