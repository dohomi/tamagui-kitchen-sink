import { LmButton, LmButtonProps } from '../../components/core/form/LmButton'
import { useFormContext } from 'react-hook-form'

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
