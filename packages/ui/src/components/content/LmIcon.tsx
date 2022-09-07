import {SizeTokens, Square, SquareProps} from "tamagui";
import FontAwesome from '@expo/vector-icons/FontAwesome'

export type FontAwesomeIconNames = keyof typeof FontAwesome.glyphMap

export type LmIconProps = SquareProps & {
    iconName: FontAwesomeIconNames,
    size: number | SizeTokens,
    iconSize: number,
    circular: boolean,
    backgroundColor: SquareProps['backgroundColor']
}

export function LmIcon({iconName, size, iconSize, backgroundColor,  ...rest}: LmIconProps) {
    return (
        <Square {...rest} circular={rest.circular} size={size || '$4'} backgroundColor={backgroundColor || '$green10Light'}>
            <FontAwesome name={iconName} size={iconSize || 24}/>
        </Square>
    )
}