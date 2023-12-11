import { LmDatepicker, LmDatepickerRhf, LmDateRangePickerRhf } from '../../../../date/src'
import { LmFormRhfProvider, LmInputRhf, LmSubmitButtonRhf } from '@tamagui-extras/form'
import { YStack } from 'tamagui'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import { LmGrid } from '@tamagui-extras/core'

const meta = {
  title: 'date/Datepicker',
  component: LmDatepicker,
} satisfies Meta<typeof LmDatepicker>
export default meta
type Story = StoryObj<typeof meta>
export const Single: Story = {
  args: {
    label: 'Pick a date',
  },
}

export const SinglePreselect: Story = {
  args: {
    label: 'Preselected date',
    startDate: new Date('2022-03-01'),
  },
}

export const FullWidth: Story = {
  args: {
    label: 'Full width',
    fullWidth: true,
  },
}

export const RangePicker: Story = {
  args: {
    label: 'Pick a range',
    isRangePicker: true,
  },
}

export const RangePickerPreselect: Story = {
  args: {
    isRangePicker: true,
    label: 'Range preselected',
    startDate: new Date('2022-03-01'),
    endDate: new Date('2022-03-15'),
  },
}

export const RangePickerFullWidth: Story = {
  args: {
    label: 'Pick a range',
    isRangePicker: true,
    fullWidth: true,
  },
}

export const ThreeMonths: Story = {
  args: {
    label: 'Range with 3 months',
    isRangePicker: true,
    numberOfMonths: 3,
  },
}

export const ReactHookForm = () => (
  <LmFormRhfProvider
    defaultValues={{
      single: '2022-12-24',
      singleDate: new Date('2022-12-31'),
      rangeStartP: '2022-12-24',
      rangeEndP: '2022-12-31',
    }}
  >
    <YStack space>
      <LmDatepickerRhf name={'start'} label={'Single Date'} labelInline />
      <LmDatepickerRhf name={'required'} label={'Required'} required labelInline />
      <LmDatepickerRhf name={'single'} label={'With String'} labelInline />
      <LmDatepickerRhf name={'singleDate'} label={'With Date'} labelInline />
      <LmDateRangePickerRhf start={'rangeStart'} end={'rangeEnd'} label={'Range'} labelInline />
      <LmDateRangePickerRhf
        start={'rangeReq'}
        end={'rangeEndReq'}
        label={'Range Required'}
        required
        labelInline
      />
      <LmDateRangePickerRhf
        start={'rangeStartP'}
        end={'rangeEndP'}
        label={'Range Preselect'}
        labelInline
      />
      <LmSubmitButtonRhf onSubmit={action('submit')}>Submit</LmSubmitButtonRhf>
    </YStack>
  </LmFormRhfProvider>
)

export const ReactHookFormMixed = () => (
  <LmFormRhfProvider
    defaultValues={{
      single: '2022-12-24',
      singleDate: new Date('2022-12-31'),
      rangeStartP: '2022-12-24',
      rangeEndP: '2022-12-31',
    }}
  >
    <YStack space width={'100%'}>
      <LmGrid container row width={'100%'} gap={'$2'}>
        <LmGrid>
          <LmInputRhf name={'input'} label={'Input Field'} />
          <LmDatepickerRhf name={'required'} label={'Required'} required fullWidth />
        </LmGrid>
        <LmGrid xs>
          <LmInputRhf name={'input'} label={'Input Field'} />
          <LmInputRhf name={'required'} label={'Required'} required fullWidth />
        </LmGrid>
      </LmGrid>
      <LmSubmitButtonRhf onSubmit={action('submit')}>Submit</LmSubmitButtonRhf>
    </YStack>
  </LmFormRhfProvider>
)
