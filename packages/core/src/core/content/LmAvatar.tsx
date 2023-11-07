import { Avatar, AvatarProps, FontSizeTokens, ImageProps, Paragraph, ParagraphProps } from 'tamagui'

export type LmAvatarProps = AvatarProps & {
  color?: AvatarProps['backgroundColor']
  src?: string
  letter?: string
  letterProps?: ParagraphProps
  imageProps?: ImageProps
}

export function LmAvatar({ color, src, letter, letterProps, imageProps, ...rest }: LmAvatarProps) {
  return (
    <Avatar
      circular={rest.circular ?? true}
      {...rest}
      backgroundColor={src ? undefined : color || '$gray10'}
    >
      {src || imageProps?.source ? (
        <>
          <Avatar.Image
            {...imageProps}
            {...(imageProps?.source
              ? {
                  source: imageProps.source,
                }
              : {
                  src: src || imageProps?.src,
                })}
          />
          <Avatar.Fallback delayMs={600} backgroundColor={color || '$gray10'} />
        </>
      ) : letter ? (
        <Paragraph
          fontSize={rest.size as FontSizeTokens}
          color={'white'}
          backgroundColor={'$gray10'}
          {...letterProps}
        >
          {letter}
        </Paragraph>
      ) : (
        <Avatar.Fallback backgroundColor={color || '$gray10'} />
      )}
    </Avatar>
  )
}
