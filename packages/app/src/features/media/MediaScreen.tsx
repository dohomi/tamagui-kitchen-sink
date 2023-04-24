import { H3, YStack } from 'tamagui'
import { LmAppShell } from 'app/src/components/layouts/LmAppShell'
import { LmVideo } from '@tamagui-extras/video'
import { LmYoutubeEmbed } from '@tamagui-extras/youtube'

export function MediaScreen() {
  return (
    <LmAppShell title={'Media'}>
      <YStack space>
        <YStack space>
          <H3>Video</H3>
          <LmVideo
            width={500}
            height={300}
            src={'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}
          />
        </YStack>
        <YStack space>
          <H3>Youtube</H3>
          <LmYoutubeEmbed youtubeId={'JxS5E-kZc2s'} />
        </YStack>
      </YStack>
    </LmAppShell>
  )
}
