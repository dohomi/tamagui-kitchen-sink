import { memo } from 'react'
import { Path as _Path, Polyline as _Polyline, Rect as _Rect, Svg as _Svg } from 'react-native-svg'
import { themed } from './themed'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <_Svg viewBox="0 0 256 256" {...otherProps} height={size} width={size}>
      <_Rect width="256" height="256" fill="none" />
      <_Polyline
        points="79.8 99.7 31.8 99.7 31.8 51.7"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}
Icon.displayName = 'ArrowCounterClockwiseRegular'
const ArrowCounterClockwiseRegular = memo(themed(Icon))
export { ArrowCounterClockwiseRegular }
