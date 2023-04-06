import { WebView } from 'react-native-webview'
import { useState } from 'react'
import { LmYoutubeEmbedProps } from './videoEmbedTypes'
import { Platform } from 'react-native'
import { Stack } from 'tamagui'
import { LmSkeleton } from '../components/core/content'

export function LmYoutubeEmbed({
  youtubeId = 'JxS5E-kZc2s',
  aspectRatio = 16 / 9,
  width = '100%',
  ...stackProps
}: LmYoutubeEmbedProps) {
  const [state, setState] = useState<any>({})
  return (
    <Stack {...stackProps} width={width} aspectRatio={aspectRatio} position={'relative'}>
      {!state?.isReady && <LmSkeleton />}
      <WebView
        source={{
          uri: `https://www.youtube-nocookie.com/embed/${youtubeId}?controls=1`,
        }}
        style={{ height: '100%', width: '100%' }}
        androidLayerType={Platform.OS === 'android' && Platform.Version <= 22 ? 'hardware' : 'none'}
        allowsFullscreenVideo={true}
        mediaPlaybackRequiresUserAction
        useNativeResumeAndPauseLifecycleEvents
        javaScriptEnabled
        allowsInlineMediaPlayback
        useWebKit={true}
        originWhitelist={['*']}
        automaticallyAdjustContentInsets
        onError={(e: any) => {
          setState((s) => ({
            ...s,
            isReady: false,
            error: e.error,
          }))
        }}
        onLoadEnd={() =>
          setState((s) => ({
            ...s,
            isReady: true,
          }))
        }
      />
    </Stack>
  )
}
