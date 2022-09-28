import {LmPopover} from "../../../src/components/panels/LmPopover";
import {Text} from "tamagui";

export default {
    title: 'ui/Panels/Popover',
    component: LmPopover
}

const Template = (args) => <LmPopover {...args}/>

export const Basic = Template.bind({})
Basic.args = {
    showArrow: true,
    trigger: (
        <Text>Open Popover</Text>
    ),
    children: (
        <Text padding={'$4'}>Some Popover content</Text>
    )
}