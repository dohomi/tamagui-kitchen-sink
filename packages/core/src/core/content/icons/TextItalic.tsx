import { memo } from 'react'
import { Line as _Line, Rect as _Rect, Svg as _Svg } from 'react-native-svg'
import { themed } from './themed'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <_Svg viewBox="0 0 256 256" {...otherProps} height={size} width={size}>
      <_Rect width="256" height="256" fill="none" />
      <_Line
        x1="152"
        y1="56"
        x2="104"
        y2="200"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="64"
        y1="200"
        x2="144"
        y2="200"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="112"
        y1="56"
        x2="192"
        y2="56"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}
Icon.displayName = 'TextItalicRegular'
const TextItalicRegular = memo(themed(Icon))
export { TextItalicRegular }
