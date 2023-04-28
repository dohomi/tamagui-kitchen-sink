import { LmAlert, LmButton, LmCard, LmDialog, usePopoverState } from '@tamagui-extras/core'
import { Button, Form, Paragraph, XStack, YStack } from 'tamagui'
import {
  LmCheckboxRhf,
  LmFormRhfProvider,
  LmInputRhf,
  LmResetButtonRhf,
  LmSelectRhf,
  LmSliderRhf,
  LmSubmitButtonRhf,
  LmSwitchRhf,
} from '../../../../form/src'
import { LmDatepickerRhf } from '@tamagui-extras/date'
import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { useForm } from 'react-hook-form'
import { StoryObj } from '@storybook/react'
import { WarningCircle } from 'tamagui-phosphor-icons'
import { fruitItemsFixtures } from 'app/src/fixtures/selectItems'

export default {
  title: 'form/React Hook Form',
}
type FormValues = {
  name: string
  description?: string
}

export const ReactHookForm: StoryObj = {
  render: () => (
    <XStack padding={'$3'}>
      <LmFormRhfProvider
        defaultValues={{
          name: '',
          description: '',
          slider_pre: 2,
        }}
      >
        <LmCard>
          <YStack space padding={'$3'}>
            <LmInputRhf<FormValues>
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
            <LmDatepickerRhf name="datepicker" label={'Choose a date'} />
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
        password: undefined,
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
        <LmInputRhf
          name={'password'}
          control={control}
          label={'Password'}
          isPassword
          placeholder={'Your password...'}
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

export const FormInsideDialog = () => {
  const { open, onOpenChange } = usePopoverState()
  const [loading, setLoading] = useState(false)

  const fakeSubmit = async (data) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      onOpenChange(false)
      console.log(data)
    }, 3000)
  }
  return (
    <YStack>
      <Button onPress={() => onOpenChange(true)}>Open Dialog</Button>
      <LmDialog onOpenChange={onOpenChange} open={open} title={'Contact data'}>
        <LmFormRhfProvider>
          <LmDialog.Content>
            <LmSelectRhf
              name={'title'}
              label={'Title'}
              required
              options={[
                { value: 'mrs', label: 'Mrs.' },
                { value: 'mr', label: 'Mr.' },
              ]}
            />
            <LmInputRhf name={'firstName'} label={'First Name'} required />
            <LmInputRhf name={'lastName'} label={'Last Name'} required />

            <LmDialog
              title={'Some Info'}
              description={'This is a nested dialog'}
              trigger={<LmButton icon={<WarningCircle />} />}
            ></LmDialog>
          </LmDialog.Content>

          <LmDialog.Actions>
            <LmSubmitButtonRhf onSubmit={fakeSubmit} loading={loading}>
              Submit
            </LmSubmitButtonRhf>
          </LmDialog.Actions>
        </LmFormRhfProvider>
      </LmDialog>
    </YStack>
  )
}
