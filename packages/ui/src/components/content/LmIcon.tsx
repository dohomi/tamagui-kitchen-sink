import {getTokens, SizeTokens, Theme, ThemeProps} from "tamagui";
import FontAwesome from '@expo/vector-icons/FontAwesome'

export type FontAwesomeIconNames = keyof typeof FontAwesome.glyphMap

type colors = '$blue' | '$gray' | '$green'
type saturation = '3' | '5' | '10'
type mode = 'Dark' | 'Light'

export type LmIconProps = {
    iconName: FontAwesomeIconNames,
    size?: SizeTokens | number,
    color?: `${colors}${saturation}${mode}`
    themeColor?: ThemeProps['name']
}


const tokens = getTokens()

export function LmIcon({iconName, size, color, themeColor}: LmIconProps) {
    let sizeInNumber: number = 24
    let colorValue: string = 'inherit'

    if (typeof size === 'number') { // required for LmButton with LmIcon
        sizeInNumber = size
    } else if (size) {
        sizeInNumber = Number(tokens.size[size].val)
    }

    if (color && tokens.color[color]) {
        colorValue = tokens.color[color]?.val as string
    } else if (color && typeof color === 'string') {
        colorValue = color
    }

    console.log(sizeInNumber, color, colorValue)
    return themeColor ? (
        <Theme name={themeColor}>
            <FontAwesome name={iconName} size={sizeInNumber} color={'inherit'}/>
        </Theme>
    ) : (
        <FontAwesome name={iconName} size={sizeInNumber} color={colorValue}/>
    )
}