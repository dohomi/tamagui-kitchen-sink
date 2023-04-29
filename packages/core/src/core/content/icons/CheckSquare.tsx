import { memo } from 'react'
import { Polyline as _Polyline, Rect as _Rect, Svg as _Svg } from 'react-native-svg'
import { themed } from './themed'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <_Svg viewBox="0 0 256 256" {...otherProps} height={size} width={size}>
      <_Rect width="256" height="256" fill="none" />
      <_Polyline
        points="172 104 113.3 160 84 132"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="8"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}
Icon.displayName = 'CheckSquareRegular'
const CheckSquareRegular = memo(themed(Icon))
export { CheckSquareRegular }
