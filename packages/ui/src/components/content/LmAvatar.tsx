import {Avatar, AvatarProps, Text} from "tamagui";

export type LmAvatarProps = AvatarProps & {
    color?: AvatarProps['backgroundColor'],
    src?: string
    letter?: string
}

export function LmAvatar({color, src, letter, ...rest}: LmAvatarProps) {
    return (
        <Avatar theme={'dark'} circular={rest.circular ?? true} {...rest}
                backgroundColor={src ? undefined : color || '$gray10'}>
            {src ? (
                <>
                    <Avatar.Image src={{uri: src}}/>
                    <Avatar.Fallback backgroundColor={color || '$gray10'}/>
                </>
            ) : (
                <Text fontSize={'$8'} backgroundColor={'$gray10'}>{letter}</Text>
            )}
        </Avatar>
    )
}