import {getTokens, SizeTokens, Theme, ThemeProps} from "tamagui";
import FontAwesome from '@expo/vector-icons/FontAwesome'

export type FontAwesomeIconNames = keyof typeof FontAwesome.glyphMap

type colors = '$blue' | '$gray' | '$green'
type saturation = '3' | '5' | '10'
type mode = 'Dark' | 'Light'

export type LmIconProps = {
    iconName: FontAwesomeIconNames,
    size?: SizeTokens,
    color?: `${colors}${saturation}${mode}`
    themeColor?: ThemeProps['name']
}


const tokens = getTokens()

export function LmIcon({iconName, size, color, themeColor}: LmIconProps) {
    console.log(tokens)
    const sizeInNumber: number = size ? Number(tokens.size[size].val) : 24;
    const colorValue: string = color ? tokens.color[color]?.val as string : 'inherit';
    console.log(sizeInNumber, colorValue)
    return themeColor ? (
        <Theme name={themeColor}>
            <FontAwesome name={iconName} size={sizeInNumber} color={'inherit'}/>
        </Theme>
    ) : (
        <FontAwesome name={iconName} size={sizeInNumber} color={colorValue}/>
    )
}