import { action } from '@storybook/addon-actions'
import { LmFile } from '../src'

export default {
  title: 'file/File Picker',
  component: LmFile,
}

const Template = (args) => <LmFile {...args} />

export const Basic = Template.bind({})
Basic.args = {
  onUpload: action('upload'),
}

export const DirectUpload = Template.bind({})
DirectUpload.args = {
  pickerButtonProps: {
    label: 'Choose Avatar',
  },
  directUpload: true,
  onUpload: action('upload'),
}
