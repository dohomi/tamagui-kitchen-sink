import { Image, ImageProps, Stack } from 'tamagui'

export type LmImageProps = ImageProps

export function LmImage(props: LmImageProps) {
  if (props.aspectRatio) {
    return (
      <Stack aspectRatio={props.aspectRatio}>
        <Image {...props} width={'100%'} height={'100%'} source={props.source} />
      </Stack>
    )
  }
  return <Image {...props} />
}
