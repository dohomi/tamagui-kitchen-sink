import {getTokens, SizeTokens, Theme, ThemeProps, useTheme, useThemeName} from "tamagui";
import {FontAwesomeIcon, Props} from '@fortawesome/react-native-fontawesome'
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {variableToString} from '@tamagui/core'

type colors = '$blue' | '$gray' | '$green'
type saturation = '3' | '5' | '10'
type mode = 'Dark' | 'Light'

type ThemedIconProps = Omit<Props, 'size' | 'icon'> & {
    size?: SizeTokens
    iconName: IconProp
}

function ThemedIcon({iconName, size, ...props}: ThemedIconProps) {
    const tokens = getTokens()
    const themeName = useThemeName()
    const theme = useTheme()
    let sizeInNumber: number = 24

    if (typeof size === 'number') { // required for LmButton with LmIcon
        sizeInNumber = size
    } else if (size) {
        sizeInNumber = Number(tokens.size[size].val)
    }
    const color = variableToString(props.color || theme.color || '#000')
    console.log("color of icon", color, theme.color, themeName)
    return (
        <FontAwesomeIcon icon={iconName}
                         size={sizeInNumber}
                         color={color}/>
    )
}

export type LmIconProps = ThemedIconProps & {
    themeColor?: ThemeProps['name']
}

export function LmIcon({themeColor, ...rest}: LmIconProps) {

    return themeColor ? (
        <Theme name={themeColor}>
            <ThemedIcon {...rest}/>
        </Theme>
    ) : (
        <ThemedIcon {...rest}/>
    )
}
