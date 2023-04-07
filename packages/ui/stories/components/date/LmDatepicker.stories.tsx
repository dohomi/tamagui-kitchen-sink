import { LmDatepicker, LmDatepickerRhf } from '../../../src/date'
import { LmFormRhfProvider, LmSubmitButtonRhf } from '../../../src/form'
import { YStack } from 'tamagui'
import { action } from '@storybook/addon-actions'

export default {
  title: 'date/Datepicker',
  component: LmDatepicker,
}

export const Single = {
  args: {
    label: 'Pick a date',
  },
}

export const SinglePreselect = {
  args: {
    label: 'Preselected date',
    startDate: new Date('2022-03-01'),
  },
}

export const RangePicker = {
  args: {
    label: 'Pick a range',
    isRangePicker: true,
  },
}

export const RangePickerPreselect = {
  args: {
    isRangePicker: true,
    label: 'Range preselected',
    startDate: new Date('2022-03-01'),
    endDate: new Date('2022-03-15'),
  },
}

export const ThreeMonths = {
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
      <LmDatepickerRhf start={'start'} label={'Single Date'} labelInline />
      <LmDatepickerRhf start={'required'} label={'Required'} required labelInline />
      <LmDatepickerRhf start={'single'} label={'With String'} labelInline />
      <LmDatepickerRhf start={'singleDate'} label={'With Date'} labelInline />
      <LmDatepickerRhf start={'rangeStart'} end={'rangeEnd'} label={'Range'} labelInline />
      <LmDatepickerRhf
        start={'rangeReq'}
        end={'rangeEndReq'}
        label={'Range Required'}
        required
        labelInline
      />
      <LmDatepickerRhf
        start={'rangeStartP'}
        end={'rangeEndP'}
        label={'Range Preselect'}
        labelInline
      />
      <LmSubmitButtonRhf onSubmit={action('submit')}>Submit</LmSubmitButtonRhf>
    </YStack>
  </LmFormRhfProvider>
)
