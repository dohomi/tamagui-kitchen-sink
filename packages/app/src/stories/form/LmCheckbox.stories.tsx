import {
  LmCheckbox,
  LmCheckboxRhf,
  LmFormRhfProvider,
  LmSubmitButtonRhf,
} from '../../../../form/src'
import { YStack } from 'tamagui'
import React from 'react'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'form/Checkbox',
  component: LmCheckbox,
} satisfies Meta<typeof LmCheckbox>
export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    label: 'Please check this out',
  },
}

export const Blue: Story = {
  args: {
    label: 'Blue theme',
    theme: 'blue',
  },
}

export const Custom: Story = {
  args: {
    label: 'Blue theme',
    labelProps: {
      color: '$orange10',
    },
    checkboxProps: {
      borderColor: '$orange10',
    },
  },
}

export const Checked: Story = {
  args: {
    label: 'Checked',
    value: true,
  },
}

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate',
    checkboxProps: {
      checked: 'indeterminate',
    },
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
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
