import { memo } from 'react'
import {
  Circle as _Circle,
  Polyline as _Polyline,
  Rect as _Rect,
  Svg as _Svg,
} from 'react-native-svg'
import { themed } from './themed'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <_Svg viewBox="0 0 256 256" {...otherProps} height={size} width={size}>
      <_Rect width="256" height="256" fill="none" />
      <_Circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Polyline
        points="120 120 128 120 128 176 136 176"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Circle cx="126" cy="84" r="12" fill={`${color}`} />
    </_Svg>
  )
}
Icon.displayName = 'InfoRegular'
const InfoRegular = memo(themed(Icon))
export { InfoRegular }
