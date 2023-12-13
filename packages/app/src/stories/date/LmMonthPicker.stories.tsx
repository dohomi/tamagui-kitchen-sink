import { LmMonthsPicker } from '../../../../date/src'

export default {
  title: 'date/Months Picker',
  component: LmMonthsPicker,
}

export const Basic = {
  args: {
    label: 'Month Picker',
  },
}

export const BasicInline = {
  args: {
    label: 'Month Picker',
    labelInline: true,
  },
}

export const Size = {
  args: {
    label: 'Month Picker',
    size: '$6',
    width: 250,
  },
}
