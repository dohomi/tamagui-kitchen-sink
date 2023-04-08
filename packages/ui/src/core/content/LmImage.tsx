import { Image, ImageProps, Stack } from 'tamagui'

export type LmImageProps = ImageProps

export function LmImage(props: LmImageProps) {
  if (props.aspectRatio) {
    return (
      <Stack aspectRatio={props.aspectRatio}>
        <Image {...props} width={'100%' as any} height={'100%' as any} src={props.src} />
      </Stack>
    )
  }
  return <Image {...props} />
}
