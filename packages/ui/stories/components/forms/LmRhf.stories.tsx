import { XStack, YStack } from 'tamagui'
import {
  LmAlert,
  LmCard,
  LmCheckboxRhf,
  LmDatepickerRhf,
  LmFormRhfProvider,
  LmInputRhf,
  LmResetButtonRhf,
  LmSelectRhf,
  LmSliderRhf,
  LmSubmitButtonRhf,
  LmSwitchRhf,
} from '../../../src'
import React from 'react'
import { fruitItemsFixtures } from '../../../fixtures/selectItems'
import { action } from '@storybook/addon-actions'
import { LmButton } from 'tamagui-extras'

export default {
  title: 'ui/Forms/ReactHookForm',
}

export const ReactHookForm = () => {
  return (
    <XStack padding={'$3'}>
      <LmFormRhfProvider
        defaultValues={{
          slider_pre: 2,
        }}
      >
        <LmCard>
          <YStack space padding={'$3'}>
            <LmInputRhf
              name={'name'}
              label={'Name'}
              placeholder={'Type your name...'}
              labelInline
              required
            />
            <LmInputRhf
              name={'description'}
              label={'Description'}
              placeholder={'A long description...'}
              labelInline
              multiline
            />
            <LmSelectRhf
              name={'fruit'}
              options={fruitItemsFixtures}
              label={'Select fruit'}
              labelInline
              required
            />

            <LmCheckboxRhf name={'check_this'} required label={'Do you agree to our T&C?'} />
            <LmSwitchRhf name={'switch'} labelRight={'Some switch'} />
            <LmDatepickerRhf start="datepicker" label={'Choose a date'} />
            <LmSliderRhf name={'slider'} />
            <LmSliderRhf name={'slider_pre'} />
            <XStack space>
              <LmResetButtonRhf>Reset</LmResetButtonRhf>
              <LmSubmitButtonRhf onSubmit={action('submit')}>Submit</LmSubmitButtonRhf>
            </XStack>
          </YStack>
        </LmCard>
      </LmFormRhfProvider>
    </XStack>
  )
}

export const FormAsRenderFunction = () => {
  return (
    <LmFormRhfProvider
      defaultValues={{
        name: '',
        email: undefined,
      }}
    >
      {({ control, handleSubmit, reset }) => (
        <YStack gap={'$3'}>
          <LmAlert severity={'info'} outlined>
            If you use a render function you enable stronger typings by forwarding "control". You
            are responsible to pass "control" to all form elements, otherwise an error is thrown.
          </LmAlert>
          <LmInputRhf
            name={'name'}
            control={control}
            label={'Name'}
            placeholder={'Type your name...'}
            labelInline
            required
          />
          <LmInputRhf
            name={'email'}
            control={control}
            label={'Name'}
            placeholder={'Type your email...'}
            labelInline
          />
          <LmButton
            onPress={handleSubmit(({ name, email }) => {
              console.log(name, email)
            })}
          >
            Submit
          </LmButton>
        </YStack>
      )}
    </LmFormRhfProvider>
  )
}
