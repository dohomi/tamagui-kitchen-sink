import {getTokens, SizeTokens, Theme, ThemeProps, useTheme, useThemeName} from "tamagui";
// import Ionicons from '@expo/vector-icons/Ionicons'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {Platform} from "react-native";
// export type IoniconIconNames = keyof typeof Ionicons.glyphMap;


type colors = '$blue' | '$gray' | '$green'
type saturation = '3' | '5' | '10'
type mode = 'Dark' | 'Light'

export type LmIconProps = {
    iconName: IconProp//IoniconIconNames
    size?: SizeTokens | number
    color?: `${colors}${saturation}${mode}`
    themeColor?: ThemeProps['name']
}


export function LmIcon({iconName, size, color, themeColor}: LmIconProps) {
    const tokens = getTokens()
    const currentTheme = useThemeName()
    const {color: c} = useTheme(currentTheme)
    let sizeInNumber: number = 24
    let colorValue: string = 'inherit'

    if (typeof size === 'number') { // required for LmButton with LmIcon
        sizeInNumber = size
    } else if (size) {
        sizeInNumber = Number(tokens.size[size].val)
    }

    if (color && tokens.color[color]) {
        colorValue = tokens.color[color]?.val as string
    } else if (color) {
        colorValue = color
    }

    console.log(c, currentTheme, sizeInNumber, color, colorValue)

    return themeColor ? (
        <Theme name={themeColor}>
            <FontAwesomeIcon icon={iconName} size={sizeInNumber} color={colorValue}/>
        </Theme>
    ) : (
        <Theme name={currentTheme as any}>
            <FontAwesomeIcon icon={iconName} size={sizeInNumber} color={Platform.OS === 'web' ? 'currentColor' : c.val} />
        </Theme>
    )
}
