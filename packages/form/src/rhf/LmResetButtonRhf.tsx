import { useFormContext } from 'react-hook-form'
import { LmButton, LmButtonProps } from '@tamagui-extras/core'

export function LmResetButtonRhf(props: LmButtonProps) {
  const { reset } = useFormContext()
  return (
    <LmButton
      {...props}
      onPress={(e) => {
        reset()
        if (typeof props.onPress === 'function') {
          props.onPress(e)
        }
      }}
    />
  )
}
