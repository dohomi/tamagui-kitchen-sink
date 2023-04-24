import React from 'react'
import { LmVideo } from '../../../../video/src'
import { H3, Paragraph, YStack } from 'tamagui'
import { Meta, StoryObj } from '@storybook/react'
import { ResizeMode } from 'expo-av'

const meta = {
  title: 'video/Video',
  component: LmVideo, // can not parse ...
} satisfies Meta<typeof LmVideo>

export default meta

type Story = StoryObj<typeof meta>

const uri = 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
export const Basic: Story = {
  args: {
    src: uri,
  },
}

export const Width200: Story = {
  args: {
    src: uri,
    width: 200,
  },
}

export const Height200: Story = {
  args: {
    src: uri,
    height: 200,
  },
}

export const Height200Contain: Story = {
  args: {
    src: uri,
    height: 200,
    resizeMode: ResizeMode.CONTAIN,
  },
}

export const AspectRatio: Story = {
  args: {
    ...Basic.args,
  },
  render: (args) => (
    <YStack width={300} backgroundColor={'$green5'} height={600}>
      <H3 paddingBottom={'$4'}>Parent Container: 300x600</H3>
      <LmVideo src={args.src} aspectRatio={4 / 3} />
      <Paragraph>waiting for new expo-av release...</Paragraph>
    </YStack>
  ),
}
