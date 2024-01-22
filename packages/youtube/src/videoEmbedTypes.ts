import { StackProps } from 'tamagui'

export type LmYoutubeEmbedProps = Omit<StackProps, 'children' | 'asChild'> & {
  youtubeId: string
}
