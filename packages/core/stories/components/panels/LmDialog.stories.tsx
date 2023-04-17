import React from 'react'
import { Button, Text, XStack, YStack } from 'tamagui'
import { LmDialog, usePopoverState } from '../../../src'

import { X } from 'tamagui-phosphor-icons'

export default {
  title: 'core/Panels/Dialog',
  component: LmDialog,
}

export const Basic = {
  args: {
    title: 'Some Title',
    description: 'This is the description of the Dialog',
    trigger: <Text>Open Dialog</Text>,
    children: <Text padding={'$4'}>Dialog content</Text>,
  },
}

export const FullScreen = {
  args: {
    title: 'Some Title',
    description: 'This is the description of the Dialog',
    trigger: <Text>Open Dialog</Text>,
    children: (
      <LmDialog.Content>
        <Text>Dialog content</Text>
      </LmDialog.Content>
    ),
    fullScreen: true,
  },
}

export const OnlyContent = {
  args: {
    trigger: <Text>Open Dialog</Text>,
    children: <Text padding={'$4'}>Dialog content</Text>,
    hideCloseButton: true,
  },
}

export const FixedWidthHeight = {
  args: {
    trigger: <Text>Open Dialog</Text>,
    children: <Text padding={'$4'}>Dialog content</Text>,
    hideCloseButton: true,
    dialogWidth: 600,
    dialogHeight: 400,
  },
}

export const ControlledState = () => {
  const dialogState = usePopoverState()
  return (
    <YStack>
      <Button onPress={() => dialogState.onOpenChange(true)}>Open Dialog</Button>
      <LmDialog {...dialogState} hideCloseButton={true}>
        <LmDialog.Content>
          <XStack space alignItems={'center'} justifyContent={'space-between'} marginBottom={'$2'}>
            <Text>This is some Content.</Text>
            <Button
              onPress={() => dialogState.onOpenChange(false)}
              chromeless
              circular
              icon={<X />}
            />
          </XStack>
          <Text>
            Some other content follows. You have full control of the opening state of the dialog.
          </Text>
        </LmDialog.Content>
      </LmDialog>
    </YStack>
  )
}
