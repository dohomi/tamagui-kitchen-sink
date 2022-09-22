import {getTokens, getVariable, SizeTokens, Theme, ThemeProps, useTheme} from "tamagui";
import {FontAwesomeIcon, Props} from '@fortawesome/react-native-fontawesome'
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type ThemedIconProps = Omit<Props, 'size' | 'icon'> & {
    size?: SizeTokens
    iconName: IconProp
}

function ThemedIcon({iconName, size, ...props}: ThemedIconProps) {
    const tokens = getTokens()
    const theme = useTheme()
    let sizeInNumber: number = 24

    if (typeof size === 'number') { // required for LmButton with LmIcon
        sizeInNumber = size
    } else if (size) {
        sizeInNumber = Number(tokens.size[size].val)
    }
    return (
        <FontAwesomeIcon icon={iconName}
                         size={sizeInNumber}
                         color={getVariable(props.color || theme.color || '#000')}/>
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
