import { LmFormRhfProvider, LmStarRating, LmStarRatingRhf } from '../../../../form/src'
import { YStack } from 'tamagui'
import { Meta, StoryObj } from '@storybook/react'
import { SunRegular } from '@tamagui-extras/core'

const meta = {
  title: 'form/StarRating',
  component: LmStarRating,
} satisfies Meta<typeof LmStarRating>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}

export const Label: Story = {
  args: {
    label: 'Label',
  },
}

export const LabelInline: Story = {
  args: {
    label: 'Label',
    labelInline: true,
  },
}

export const Rating10: Story = {
  args: {
    count: 10,
  },
}

export const CustomIcon: Story = {
  args: {
    Icon: SunRegular,
  },
}

export const Color: Story = {
  args: {
    color: '$green7',
    colorActive: '$blue10',
    colorHover: '$blue7',
    colorActiveHover: '$blue8',
  },
}

export const Size: Story = {
  args: {
    size: '$6',
    gap: '$5',
  },
}

export const ReadOnly = {
  args: {
    value: 3,
    disabled: true,
  },
}

export const ReactHookForm = () => (
  <LmFormRhfProvider defaultValues={{ star_rating_pre: 3 }}>
    <YStack gap={'$2'}>
      <LmStarRatingRhf name={'star_rating'} label={'Standard'} />
      <LmStarRatingRhf name={'star_rating_pre'} label={'With Default'} />
    </YStack>
  </LmFormRhfProvider>
)
