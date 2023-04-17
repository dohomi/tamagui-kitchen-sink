import { LmAspectRatio } from '../../../src/core/content/LmAspectRatio'
import { Card, H2, H3, Paragraph, Stack, XStack, YStack } from 'tamagui'
import { LmImage } from '../../../src'
import { LmVideo } from '../../../src/video'
import { LmYoutubeEmbed } from '../../../src/youtube'

export default {
  title: 'core/Content/Aspect Ratio',
}
export const RatioStack = () => (
  <Stack backgroundColor={'red'} aspectRatio={16 / 9} width={200}></Stack>
)

const CustomCard = () => (
  <Card elevate bordered aspectRatio={16 / 9} width={250} marginBottom={'$4'}>
    <Card.Header padded>
      <H2>16/9 cards </H2>
      <Paragraph>Fixed 250 width</Paragraph>
    </Card.Header>
    <Card.Background aspectRatio={16 / 9}>
      <LmAspectRatio />
    </Card.Background>
  </Card>
)

export const CardsFixedWidth = () => (
  <XStack space={'$4'} flexWrap={'wrap'}>
    <CustomCard />
    <CustomCard />
    <CustomCard />
    <CustomCard />
    <CustomCard />
  </XStack>
)

export const ImageAspectRatio = () => (
  <YStack width={300} backgroundColor={'$green5'} height={600}>
    <H3 paddingBottom={'$4'}>Parent Container: 300x600</H3>
    <LmImage
      source={{ uri: 'https://placekitten.com/400/300', width: 400, height: 300 }}
      aspectRatio={4 / 3}
    />
  </YStack>
)

export const VideoAspectRatio = () => (
  <YStack width={300} backgroundColor={'$green5'} height={600}>
    <H3 paddingBottom={'$4'}>Parent Container: 300x600</H3>
    <LmVideo src={'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'} aspectRatio={4 / 3} />
    <Paragraph>waiting for new expo-av release...</Paragraph>
  </YStack>
)

export const YoutubeEmbedRatio = () => (
  <YStack width={300} backgroundColor={'$green5'} height={600} space>
    <H3 paddingBottom={'$4'}>Parent Container: 300x600</H3>
    <LmYoutubeEmbed youtubeId={'JxS5E-kZc2s'} aspectRatio={4 / 3} />
    <LmYoutubeEmbed youtubeId={'JxS5E-kZc2s'} aspectRatio={2 / 3} />
  </YStack>
)
