import { LmFormRhfProvider, LmSubmitButtonRhf } from '../../../src/form'
import { LmDateSelection, LmDateSelectionRhf } from '../../../src/date'

import { YStack } from 'tamagui'
import React from 'react'

export default {
  title: 'ui/Date/DateSelection',
  component: LmDateSelection,
}

export const Single = {
  args: {
    label: 'Pick a date',
  },
}

export const German = {
  args: {
    label: 'Geburtstag',
    locale: 'de',
  },
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
