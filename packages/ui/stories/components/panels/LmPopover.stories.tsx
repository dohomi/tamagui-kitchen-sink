import { LmPopover, LmPopoverProps } from '../../../src'
import { Button, Text, XStack } from 'tamagui'
import { LmButton } from 'tamagui-extras'

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

export const CustomPosition = () => (
  <XStack space>
    <LmPopover trigger={<Button>Open Tamagui Button</Button>}>
      <XStack p={'$4'}>Some content</XStack>
    </LmPopover>
    <LmPopover trigger={<LmButton>Open LmButton</LmButton>}>
      <XStack p={'$4'}>Some content</XStack>
    </LmPopover>
  </XStack>
)
