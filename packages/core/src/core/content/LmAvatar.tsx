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
      {src ? (
        <>
          <Avatar.Image source={{ uri: src }} {...imageProps} />
          <Avatar.Fallback backgroundColor={color || '$gray10'} />
        </>
      ) : (
        <Paragraph
          fontSize={rest.size as FontSizeTokens}
          color={'white'}
          backgroundColor={'$gray10'}
          {...letterProps}
        >
          {letter}
        </Paragraph>
      )}
    </Avatar>
  )
}
