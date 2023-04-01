import { Meta, StoryFn } from '@storybook/react'
import { LmSlider } from '../../../src'
import { YStack } from 'tamagui'

export default {
  title: 'ui/Forms/Slider',
  component: LmSlider,
} as Meta<typeof LmSlider>

export const Basic = {
  args: {},
}

export const ShowValue = {
  args: {
    showValue: true,
  },
}

export const Colors = () => (
  <YStack space={'$4'}>
    <LmSlider color={'$blue10'} />
    <LmSlider color={'$red10'} />
  </YStack>
)

export const ColorsActiveOnly = () => (
  <YStack space={'$4'}>
    <LmSlider color={'$blue10'} colorActiveOnly />
    <LmSlider color={'$red10'} colorActiveOnly />
  </YStack>
)

export const WithLabel = () => (
  <YStack space={'$4'}>
    <LmSlider color={'$blue10'} label={'First Slider'} colorActiveOnly />
    <LmSlider color={'$red10'} label={'Second Slider'} colorActiveOnly />
    <LmSlider color={'$blue10'} label={'First Slider'} colorActiveOnly labelInline />
    <LmSlider color={'$red10'} label={'Second Slider'} colorActiveOnly labelInline />
  </YStack>
)
