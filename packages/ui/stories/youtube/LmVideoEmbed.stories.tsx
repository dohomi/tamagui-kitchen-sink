import { LmYoutubeEmbed } from '../../src/youtube'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'youtube/Youtube Embed',
  component: LmYoutubeEmbed,
} satisfies Meta<typeof LmYoutubeEmbed>

export default meta

type Story = StoryObj<typeof meta>

export const Youtube: Story = {
  args: {
    youtubeId: 'JxS5E-kZc2s',
  },
}
