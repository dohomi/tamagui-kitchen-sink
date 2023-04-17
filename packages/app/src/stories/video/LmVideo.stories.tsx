import React from 'react'
import { LmVideo } from '@tamagui-extras/video'
import { H3, Paragraph, YStack } from 'tamagui'

export default {
  title: 'video/Video',
  component: LmVideo, // can not parse ...
}

const uri = 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
export const Basic = {
  args: {
    src: uri,
  },
}

export const Width200 = {
  args: {
    src: uri,
    width: 200,
  },
}

export const Height200 = {
  args: {
    src: uri,
    height: 200,
  },
}

export const AspectRatio = () => (
  <YStack width={300} backgroundColor={'$green5'} height={600}>
    <H3 paddingBottom={'$4'}>Parent Container: 300x600</H3>
    <LmVideo src={'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'} aspectRatio={4 / 3} />
    <Paragraph>waiting for new expo-av release...</Paragraph>
  </YStack>
)
