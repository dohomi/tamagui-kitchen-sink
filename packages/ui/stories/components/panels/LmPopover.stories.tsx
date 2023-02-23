import {
  LmCard,
  LmDialog,
  LmDialogContent,
  LmPopover,
  LmPopoverProps,
  usePopoverState,
} from '../../../src'
import { Button, ListItem, Text, XStack } from 'tamagui'
import { LmButton } from 'tamagui-extras'
import { Smiley } from 'tamagui-phosphor-icons'

export default {
  title: 'ui/Panels/Popover',
  component: LmPopover,
}

const Template = (args) => <LmPopover {...args} />

export const Basic = Template.bind({})
Basic.args = {
  showArrow: true,
  trigger: <Text>Open Popover</Text>,
  children: (
    <XStack space alignItems={'center'}>
      <Smiley />
      <Text padding={'$4'}>Some Popover content</Text>
    </XStack>
  ),
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
      <XStack padding={'$4'}>Some content</XStack>
    </LmPopover>
    <LmPopover trigger={<LmButton>Open LmButton</LmButton>}>
      <XStack padding={'$4'}>Some content</XStack>
    </LmPopover>
  </XStack>
)

export const OpenDialog = () => {
  const popoverState = usePopoverState()
  const dialogState = usePopoverState()
  return (
    <>
      <LmCard title={'Complex Popover'} subTitle={'Open Dialog inside Popover'}>
        <LmPopover
          {...popoverState}
          trigger={<Button onPress={() => popoverState.onOpenChange(true)}>Open Popover</Button>}
        >
          <ListItem
            onPress={() => {
              popoverState.onOpenChange(false)
              dialogState.onOpenChange(true)
            }}
          >
            Open Dialog
          </ListItem>
        </LmPopover>
      </LmCard>
      <LmDialog {...dialogState}>
        <LmDialogContent>Some Content</LmDialogContent>
      </LmDialog>
    </>
  )
}
