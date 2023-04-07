import { LmFormRhfProvider, LmStarRating, LmStarRatingRhf } from '../../../src/form'
import { YStack } from 'tamagui'

export default {
  title: 'form/StarRating',
  component: LmStarRating,
}

export const Basic = {
  args: {},
}

export const Label = {
  args: {
    label: 'Label',
  },
}

export const LabelInline = {
  args: {
    label: 'Label',
    labelInline: true,
  },
}

export const Rating10 = {
  args: {
    count: 10,
  },
}

export const Color = {
  args: {
    color: '$blue10',
  },
}

export const Size = {
  args: {
    size: '$6',
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
    <YStack space>
      <LmStarRatingRhf name={'star_rating'} label={'Standard'} />
      <LmStarRatingRhf name={'star_rating_pre'} label={'With Default'} />
    </YStack>
  </LmFormRhfProvider>
)
