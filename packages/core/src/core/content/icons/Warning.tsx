import { memo } from 'react'
import {
  Circle as _Circle,
  Line as _Line,
  Path as _Path,
  Rect as _Rect,
  Svg as _Svg,
} from 'react-native-svg'
import { themed } from './themed'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <_Svg viewBox="0 0 256 256" {...otherProps} height={size} width={size}>
      <_Rect width="256" height="256" fill="none" />
      <_Line
        x1="128"
        y1="104"
        x2="128"
        y2="144"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M114.2,40l-88,152A16,16,0,0,0,40,216H216a16,16,0,0,0,13.8-24l-88-152A15.9,15.9,0,0,0,114.2,40Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Circle cx="128" cy="180" r="12" fill={`${color}`} />
    </_Svg>
  )
}
Icon.displayName = 'WarningRegular'
const WarningRegular = memo(themed(Icon))
export { WarningRegular }
