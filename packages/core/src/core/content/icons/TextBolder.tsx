import { memo } from 'react'
import { Path as _Path, Rect as _Rect, Svg as _Svg } from 'react-native-svg'
import { themed } from './themed'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <_Svg viewBox="0 0 256 256" {...otherProps} height={size} width={size}>
      <_Rect width="256" height="256" fill="none" />
      <_Path
        d="M64,120h88a40,40,0,0,1,0,80H64V48h76a36,36,0,0,1,0,72"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}
Icon.displayName = 'TextBolderRegular'
const TextBolderRegular = memo(themed(Icon))
export { TextBolderRegular }
