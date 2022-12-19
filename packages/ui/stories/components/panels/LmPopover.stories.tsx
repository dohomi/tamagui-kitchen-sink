import { LmPopover, LmPopoverProps } from '../../../src'
import { Text } from 'tamagui'

export default {
  title: 'ui/Panels/Popover',
  component: LmPopover,
}

const Template = (args) => <LmPopover {...args} />

export const Basic = Template.bind({})
Basic.args = {
  showArrow: true,
  trigger: <Text>Open Popover</Text>,
  children: <Text padding={'$4'}>Some Popover content</Text>,
} as LmPopoverProps

export const SquarePopover = Template.bind({})
SquarePopover.args = {
  showArrow: true,
  trigger: <Text>Open Popover</Text>,
  children: <Text padding={'$4'}>Some Popover content</Text>,
  contentProps: {
    elevation: '$4',
    borderRadius: 0,
  },
} as LmPopoverProps
