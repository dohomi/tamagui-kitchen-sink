import { MediaScreen } from 'app/src/features/media/MediaScreen'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'demo/Media',
  component: MediaScreen,
} satisfies Meta<typeof MediaScreen>

export default meta

type Story = StoryObj<typeof meta>

export const Media: Story = {}
