import { LmDateSelection, LmDateSelectionRhf, LmSubmitButtonRhf } from '../../../src'
import { LmFormRhfProvider, YStack } from 'tamagui-extras'
import React from 'react'

export default {
  title: 'ui/Date/DateSelection',
  component: LmDateSelection,
}

const Template = (args) => <LmDateSelection {...args} />

export const Single = Template.bind({})
Single.args = {
  label: 'Pick a date',
}

export const German = Template.bind({})
German.args = {
  label: 'Geburtstag',
  locale: 'de',
}

export const ReactHookForm = () => {
  return (
    <LmFormRhfProvider
      defaultValues={{
        preselect: '1980-02-21',
      }}
    >
      <YStack space>
        <LmDateSelectionRhf name={'birthday'} label={'Birthday'} required />
        <LmDateSelectionRhf name={'preselect'} label={'Preselect'} required />
        <LmSubmitButtonRhf
          onSubmit={(form) => {
            console.log(form)
          }}
        >
          Submit
        </LmSubmitButtonRhf>
      </YStack>
    </LmFormRhfProvider>
  )
}
