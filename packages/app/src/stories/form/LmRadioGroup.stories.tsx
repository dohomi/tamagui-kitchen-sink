import {
  LmFormRhfProvider,
  LmRadioGroup,
  LmRadioGroupRhf,
  LmSubmitButtonRhf,
} from '@tamagui-extras/form'
import { action } from '@storybook/addon-actions'
import { YStack } from 'tamagui'
import { fruitItemsFixtures } from 'app/src/fixtures/selectItems'

export default {
  title: 'form/RadioGroup',
  component: LmRadioGroup,
}

const options = fruitItemsFixtures.slice(0, 8)

export const Basic = {
  args: {
    label: 'Radio Group Label',
    name: 'radio',
    options,
  },
}

export const Required = {
  args: {
    label: 'Radio Group Label',
    name: 'radio',
    required: true,
    options,
  },
}

export const Inline = {
  args: {
    label: 'Radio Group Label',
    name: 'radio',
    flexDirection: 'row',
    options,
  },
}

export const LargeSize = {
  args: {
    label: 'Radio Group Label',
    name: 'radio',
    size: '$5',
    spaceItem: '$4',
    options,
  },
}

export const ReactHookForm = () => (
  <YStack space={'$4'}>
    <LmFormRhfProvider defaultValues={{ pre: options?.[1]?.value }}>
      <LmRadioGroupRhf options={options.slice(4, 7)} name={'first'} label={'First Option'} />
      <LmRadioGroupRhf
        options={fruitItemsFixtures.slice(9, 11)}
        name={'req'}
        label={'Required Option'}
        required
      />
      <LmRadioGroupRhf options={options.slice(0, 3)} name={'pre'} label={'Predefined Option'} />
      <LmSubmitButtonRhf onSubmit={action('submit')}>Submit</LmSubmitButtonRhf>
    </LmFormRhfProvider>
  </YStack>
)
