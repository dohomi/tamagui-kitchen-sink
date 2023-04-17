import { LmYoutubeEmbed } from '@tamagui-extras/youtube'
import { Meta, StoryObj } from '@storybook/react'
import { H3, YStack } from 'tamagui'

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

export const AspectRatio = () => (
  <YStack width={300} backgroundColor={'$green5'} height={600} space>
    <H3 paddingBottom={'$4'}>Parent Container: 300x600</H3>
    <LmYoutubeEmbed youtubeId={'JxS5E-kZc2s'} aspectRatio={4 / 3} />
    <LmYoutubeEmbed youtubeId={'JxS5E-kZc2s'} aspectRatio={2 / 3} />
  </YStack>
)
