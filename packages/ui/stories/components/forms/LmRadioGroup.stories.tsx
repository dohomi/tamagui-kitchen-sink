import { LmRadioGroup } from '../../../src/components/forms/LmRadioGroup'
import { LmRadioGroupRhf } from '../../../src/components/forms/rhf/LmRadioGroupRhf'
import { LmSubmitButtonRhf } from '../../../src/components/forms/rhf/LmSubmitButtonRhf'
import { LmFormRhfProvider } from '../../../src/components/forms/rhf/LmFormRhfProvider'
import { fruitItemsFixtures } from '../../../fixtures/selectItems'
import { action } from '@storybook/addon-actions'
import { YStack } from 'tamagui-extras'

export default {
  title: 'ui/Forms/RadioGroup',
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
