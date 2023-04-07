import { LmAlert, LmButton, LmCard } from '../../../src'
import { Form, Paragraph, XStack, YStack } from 'tamagui'
import {
  LmCheckboxRhf,
  LmFormRhfProvider,
  LmInputRhf,
  LmResetButtonRhf,
  LmSelectRhf,
  LmSliderRhf,
  LmSubmitButtonRhf,
  LmSwitchRhf,
} from '../../../src/form'
import { LmDatepickerRhf } from '../../../src/date'
import React from 'react'
import { fruitItemsFixtures } from '../../../fixtures/selectItems'
import { action } from '@storybook/addon-actions'
import { useForm } from 'react-hook-form'
import { StoryObj } from '@storybook/react'

export default {
  title: 'form/React Hook Form',
}

export const ReactHookForm: StoryObj = {
  render: () => (
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
  ),
}

export const FormAsRenderFunction = () => {
  return (
    <LmFormRhfProvider
      defaultValues={{
        name: '',
        email: null,
      }}
    >
      {({ control, handleSubmit, reset }) => (
        <YStack gap={'$3'}>
          <LmAlert severity={'info'} outlined>
            <Paragraph>
              If you use a render function you enable stronger typings by forwarding "control". You
              are responsible to pass "control" to all form elements, otherwise an error is thrown.
            </Paragraph>
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
          <XStack gap={'$3'}>
            <LmButton onPress={() => reset()}>Reset</LmButton>
            <LmButton
              colorVariant={'primary'}
              onPress={handleSubmit(({ name, email }) => {
                console.log(name, email)
              })}
            >
              Submit
            </LmButton>
          </XStack>
        </YStack>
      )}
    </LmFormRhfProvider>
  )
}

export const WithTamaguiForm_1 = () => {
  return (
    <LmFormRhfProvider
      defaultValues={{
        name: '',
        email: undefined,
      }}
    >
      {({ control, handleSubmit, reset }) => (
        <Form
          gap={'$3'}
          onSubmit={handleSubmit((data) => {
            console.log(data)
          })}
        >
          <LmAlert severity={'info'} outlined>
            <Paragraph>
              To be type safe use render function as child of LmFormRhfProvider and pass `control`
              to all form components.
            </Paragraph>
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
          <XStack gap={'$3'}>
            <LmButton onPress={() => reset()}>Reset</LmButton>
            <Form.Trigger asChild>
              <LmButton colorVariant={'primary'}>Submit</LmButton>
            </Form.Trigger>
          </XStack>
        </Form>
      )}
    </LmFormRhfProvider>
  )
}

export const WithTamaguiForm_2: StoryObj = {
  render: () => {
    const { control, handleSubmit, reset } = useForm({
      defaultValues: {
        name: '',
        email: undefined,
      },
    })
    return (
      <Form
        gap={'$3'}
        onSubmit={handleSubmit((data) => {
          console.log(data)
        })}
      >
        <LmAlert severity={'info'} outlined>
          <Paragraph>You can use `useForm` directly from "react-hook-form".</Paragraph>
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
        <XStack gap={'$3'}>
          <LmButton onPress={() => reset()}>Reset</LmButton>
          <Form.Trigger asChild>
            <LmButton colorVariant={'primary'}>Submit</LmButton>
          </Form.Trigger>
        </XStack>
      </Form>
    )
  },
}
