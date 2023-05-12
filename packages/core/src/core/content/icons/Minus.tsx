import React, { memo } from 'react'
import { Line as _Line, Rect as _Rect, Svg as _Svg } from 'react-native-svg'

import { themed } from './themed'
import { IconProps } from './IconProps'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <_Svg viewBox="0 0 256 256" {...otherProps} height={size} width={size}>
      <_Rect width="256" height="256" fill="none" />
      <_Line
        x1="40"
        y1="128"
        x2="216"
        y2="128"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'MinusRegular'

export const MinusRegular = memo<IconProps>(themed(Icon))
