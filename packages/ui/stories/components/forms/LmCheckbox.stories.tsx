import { LmCheckbox, LmCheckboxRhf, LmFormRhfProvider, LmSubmitButtonRhf } from '../../../src'
import { YStack } from 'tamagui'
import React from 'react'
import { action } from '@storybook/addon-actions'

export default {
  title: 'ui/Forms/Checkbox',
  component: LmCheckbox,
}

export const Basic = {
  args: {
    label: 'Please check this out',
  },
}

export const Blue = {
  args: {
    label: 'Blue theme',
    theme: 'blue',
  },
}

export const Sizes = () => (
  <YStack space>
    <LmCheckbox label={'size default'} />
    <LmCheckbox label={'size $4'} size={'$4'} />
    <LmCheckbox label={'size $6'} size={'$6'} />
  </YStack>
)

export const ReactHookForm = () => {
  return (
    <LmFormRhfProvider
      defaultValues={{
        pre: true,
      }}
    >
      <LmCheckboxRhf name={'check'} label={'Normal Checkbox'} />
      <LmCheckboxRhf name={'pre'} label={'Already Checked'} />
      <LmCheckboxRhf name={'required'} label={'Required Checkbox'} required={true} />
      <LmSubmitButtonRhf onSubmit={action('submit')}>Submit</LmSubmitButtonRhf>
    </LmFormRhfProvider>
  )
}
