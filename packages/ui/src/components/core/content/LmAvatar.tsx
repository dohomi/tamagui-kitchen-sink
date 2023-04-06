import { Avatar, AvatarProps, SizableText, TextProps } from 'tamagui'

export type LmAvatarProps = AvatarProps & {
  color?: AvatarProps['backgroundColor']
  src?: string
  letter?: string
  letterProps?: TextProps
}

export function LmAvatar({ color, src, letter, letterProps, ...rest }: LmAvatarProps) {
  return (
    <Avatar
      circular={rest.circular ?? true}
      {...rest}
      backgroundColor={src ? undefined : color || '$gray10'}
    >
      {src ? (
        <>
          <Avatar.Image src={{ uri: src }} />
          <Avatar.Fallback backgroundColor={color || '$gray10'} />
        </>
      ) : (
        <SizableText fontSize={'$8'} color={'white'} backgroundColor={'$gray10'} {...letterProps}>
          {letter}
        </SizableText>
      )}
    </Avatar>
  )
}
