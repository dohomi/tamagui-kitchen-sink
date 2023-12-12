import { action } from '@storybook/addon-actions'
import { LmFile } from '../../../../file/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'file/File Picker',
  component: LmFile,
} satisfies Meta<typeof LmFile>
export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    onUpload: action('upload'),
  },
}

export const DirectUpload = {
  args: {
    pickerButtonProps: {
      label: 'Choose Avatar',
    },
    directUpload: true,
    onUpload: action('upload'),
  },
}
