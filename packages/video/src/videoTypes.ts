import { ImageSourcePropType, StyleProp, View } from 'react-native'
import { VideoProps } from 'expo-av'
import { SizableStackProps } from 'tamagui'

export type LmVideoProps = Omit<VideoProps, 'style' | 'source'> & {
  src: string
  width?: number
  height?: number
  style?: Omit<StyleProp<View>, 'width' | 'height'>
  aspectRatio?: number
  containerProps?: SizableStackProps
  posterSource?: ImageSourcePropType
}
