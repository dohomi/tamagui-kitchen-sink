import { ResizeMode, Video } from 'expo-av'
import { LmVideoProps } from './videoTypes'
import { ForwardedRef, forwardRef } from 'react'
import { StyleProp } from 'react-native'

export const LmVideo = forwardRef(function LmVideoFunc(
  {
    aspectRatio = 16 / 9,
    src,
    width,
    height,
    useNativeControls = true,
    resizeMode = ResizeMode.COVER,
    style,
    ...rest
  }: LmVideoProps,
  ref: ForwardedRef<Video>
) {
  return (
    <Video
      {...rest}
      source={{
        uri: src,
      }}
      ref={ref}
      style={{
        width: width || '100%', // currently not working well..
        height: height,
        aspectRatio,
        ...style,
      }}
      videoStyle={{
        width: '100%',
        height: height,
        ...(rest.videoStyle as StyleProp<any>),
      }}
      resizeMode={resizeMode}
      useNativeControls={useNativeControls}
    />
  )
})
