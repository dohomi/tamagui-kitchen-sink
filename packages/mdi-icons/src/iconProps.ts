import {SvgProps} from 'react-native-svg'
import {SizeTokens} from "@tamagui/core";

export type IconProps = SvgProps & {
    size?: SizeTokens | number
    color?: string
}