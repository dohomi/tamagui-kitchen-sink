import { memo } from 'react'
import {
  Line as _Line,
  Path as _Path,
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
      <_Line
        x1="104"
        y1="128"
        x2="216"
        y2="128"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="104"
        y1="64"
        x2="216"
        y2="64"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="104"
        y1="192"
        x2="216"
        y2="192"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Polyline
        points="40 60 56 52 56 108"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M41.1,152.6a14,14,0,1,1,24.5,13.2L40,200H68"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}
Icon.displayName = 'ListNumbersRegular'
const ListNumbersRegular = memo(themed(Icon))
export { ListNumbersRegular }
