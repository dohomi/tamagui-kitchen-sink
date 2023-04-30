import {
  LmButton,
  LmCard,
  LmDialog,
  LmPopover,
  LmPopoverProps,
  StarRegular,
  usePopoverState,
} from '../../../../../core/src'
import { Button, ListItem, Text, XStack } from 'tamagui'

export default {
  title: 'core/Panels/Popover',
  component: LmPopover,
}

export const Basic = {
  args: {
    showArrow: true,
    trigger: <Text>Open Popover</Text>,
    children: (
      <XStack space alignItems={'center'}>
        <StarRegular />
        <Text padding={'$4'}>Some Popover content</Text>
      </XStack>
    ),
  } as LmPopoverProps,
}

export const SquarePopover = {
  args: {
    showArrow: true,
    trigger: <Text>Open Popover</Text>,
    children: <Text padding={'$4'}>Some Popover content</Text>,
    contentProps: {
      elevation: '$4',
      borderRadius: 0,
    },
  } as LmPopoverProps,
}

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
        <LmDialog.Content>Some Content</LmDialog.Content>
      </LmDialog>
    </>
  )
}
