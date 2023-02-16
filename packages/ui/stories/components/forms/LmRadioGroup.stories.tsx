import { LmRadioGroup, LmRadioGroupRhf, LmSubmitButtonRhf } from '../../../src'
import { fruitItemsFixtures } from '../../../fixtures/selectItems'
import { LmFormRhfProvider, YStack } from 'tamagui-extras'
import { action } from '@storybook/addon-actions'

export default {
  title: 'ui/Forms/RadioGroup',
  component: LmRadioGroup,
}

const options = fruitItemsFixtures.slice(0, 8)

const Template = (args) => <LmRadioGroup {...args} />

export const Basic = Template.bind({})
Basic.args = {
  label: 'Radio Group Label',
  name: 'radio',
  options,
}

export const Required = Template.bind({})
Required.args = {
  label: 'Radio Group Label',
  name: 'radio',
  required: true,
  options,
}

export const Inline = Template.bind({})
Inline.args = {
  label: 'Radio Group Label',
  name: 'radio',
  flexDirection: 'row',
  options,
}

export const LargeSize = Template.bind({})
LargeSize.args = {
  label: 'Radio Group Label',
  name: 'radio',
  size: '$5',
  spaceItem: '$4',
  options,
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
