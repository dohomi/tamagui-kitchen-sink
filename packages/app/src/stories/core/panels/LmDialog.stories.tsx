import React from 'react'
import { Button, SizableText, Text, XStack, YStack } from 'tamagui'
import { LmDialog, usePopoverState, XRegular } from '../../../../../core/src'
import { userEvent, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'core/Panels/Dialog',
  component: LmDialog,
  argTypes: {
    trigger: {
      name: 'trigger',
      type: 'string',
    },
    children: {
      type: 'string',
    },
  },
} satisfies Meta<typeof LmDialog>
export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    title: 'Some Title',
    description: 'This is the description of the Dialog',
    trigger: <SizableText>Open Dialog</SizableText>,
    children: <SizableText padding={'$4'}>Dialog content</SizableText>,
  },
}

export const BasicPlay: Story = {
  args: {
    title: 'Some Title',
    description: 'This is the description of the Dialog',
    trigger: <Button>Open Dialog</Button>,
    children: <SizableText padding={'$4'}>Dialog content</SizableText>,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    // step('click on the button', async () => {
    // })
    await userEvent.click(canvas.getByText('Open Dialog'))
    setTimeout(async () => {
      await expect(canvas.getByText('Some Title')).toBeInTheDocument()
      await expect(canvas.getByText('This is the description of the Dialog')).toBeInTheDocument()
    }, 500)
  },
}

export const FullScreen: Story = {
  args: {
    title: 'Some Title',
    description: 'This is the description of the Dialog',
    trigger: <SizableText>Open Dialog</SizableText>,
    children: (
      <LmDialog.Content>
        <SizableText>Dialog content</SizableText>
      </LmDialog.Content>
    ),
    fullScreen: true,
  },
}

export const OnlyContent: Story = {
  args: {
    trigger: <SizableText>Open Dialog</SizableText>,
    children: <SizableText padding={'$4'}>Dialog content</SizableText>,
    hideCloseButton: true,
  },
}

export const FixedWidthHeight: Story = {
  args: {
    trigger: <SizableText>Open Dialog</SizableText>,
    children: <SizableText padding={'$4'}>Dialog content</SizableText>,
    hideCloseButton: true,
    dialogWidth: 600,
    dialogHeight: 400,
  },
}

export const PreventClickOutside: Story = {
  args: {
    trigger: <SizableText>Needs investigation...</SizableText>,
    children: <SizableText padding={'$4'}>Dialog content</SizableText>,
    hideCloseButton: true,
    dialogWidth: 600,
    dialogHeight: 400,
  },
}

export const ControlledState: Story = {
  render() {
    const dialogState = usePopoverState()
    return (
      <YStack>
        <Button onPress={() => dialogState.onOpenChange(true)}>Open Dialog</Button>
        <LmDialog {...dialogState} hideCloseButton={true}>
          <LmDialog.Content>
            <XStack
              space
              alignItems={'center'}
              justifyContent={'space-between'}
              marginBottom={'$2'}
            >
              <Text>This is some Content.</Text>
              <Button
                onPress={() => dialogState.onOpenChange(false)}
                chromeless
                circular
                icon={<XRegular />}
              />
            </XStack>
            <Text>
              Some other content follows. You have full control of the opening state of the dialog.
            </Text>
          </LmDialog.Content>
        </LmDialog>
      </YStack>
    )
  },
}
