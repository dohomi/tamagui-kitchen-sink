import { ColorTokens, getVariable, SizeTokens, useTheme } from 'tamagui'
import { getSize } from '@tamagui/get-size'
import { Path, Svg } from 'react-native-svg'
import type * as MDI from '@mdi/js'

export type LmMdiIcon = {
  size?: SizeTokens
  color?: ColorTokens | string
  name: keyof typeof MDI
}

export function LmMdiIcon({ size, color = '$color', name }: LmMdiIcon) {
  const theme = useTheme()
  const calculatedColor = getVariable(theme[color] || color || theme.color)
  const calculatedSize = getSize(size)
  // @ts-ignore
  const sized = calculatedSize?.val || 24
  return (
    <Svg width={sized} height={sized} viewBox={'0 0 24 24'} fill={calculatedColor as string}>
      <Path d={require('@mdi/js')[name]} />
    </Svg>
  )
}
