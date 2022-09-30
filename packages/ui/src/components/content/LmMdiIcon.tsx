import {ColorTokens, SizeTokens, useTheme} from "tamagui";
import {getSize, getVariable} from "@tamagui/core";
import {Path, Svg} from "react-native-svg";
import type * as MDI from '@mdi/js'

export type LmMdiIcon = {
    size?: SizeTokens | number
    color?: ColorTokens | string
    name: keyof typeof MDI
}

export function LmMdiIcon({size, color = '$color', name}: LmMdiIcon) {
    const theme = useTheme()
    const calculatedSize = typeof size === 'string' ? getSize(size) : (size || 24)
    const calculatedColor = getVariable(
        theme[color] || color || theme.color || '#000'
    )
    let sized = calculatedSize?.val || calculatedSize;

    return (
        <Svg width={sized}
             height={sized}
             viewBox={'0 0 24 24'}
             fill={calculatedColor}>
            <Path d={require('@mdi/js')[name]}/>
        </Svg>
    )
}

