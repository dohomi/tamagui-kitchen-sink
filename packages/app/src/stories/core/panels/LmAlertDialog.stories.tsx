import { LmAlertDialog, usePopoverState } from '../../../../../core/src'
import { Meta, StoryObj } from '@storybook/react'
import { Button, YStack } from 'tamagui'

const meta = {
  title: 'core/Panels/Alert Dialog',
  component: LmAlertDialog,
  argTypes: {
    trigger: {
      name: 'trigger',
      type: 'string',
    },
    actionButton: {
      name: 'actionButton',
      type: 'string',
    },
    cancelButton: {
      name: 'cancelButton',
      type: 'string',
    },
  },
} satisfies Meta<typeof LmAlertDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    trigger: <Button>Open Alert</Button>,
    title: 'Accept',
    description: 'By pressing yes, you accept our terms and conditions.',
    actionButton: <Button theme={'active'}>Accept</Button>,
    cancelButton: <Button>Cancel</Button>,
  },
}

export const ControlledState: Story = {
  args: {
    ...Basic.args,
  },
  render({ trigger, ...rest }) {
    const dialogState = usePopoverState()
    return (
      <YStack>
        <Button onPress={() => dialogState.onOpenChange(true)}>Custom trigger button</Button>
        <LmAlertDialog {...rest} {...dialogState} />
      </YStack>
    )
  },
}
