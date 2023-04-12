import { Image, ImageProps, Stack } from 'tamagui'

export type LmImageProps = ImageProps

export function LmImage({ aspectRatio, ...props }: LmImageProps) {
  if (aspectRatio) {
    return (
      <Stack width={'100%'} aspectRatio={aspectRatio} position={'relative'}>
        <Image
          {...props}
          aspectRatio={aspectRatio}
          width={'100%!important'}
          height={'100%!important'}
          resizeMode={'contain'}
        />
      </Stack>
    )
  }
  return <Image {...props} />
}
