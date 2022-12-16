import { Controller } from 'react-hook-form'
import { LmRhfProps } from './lmRhfProps'
import { LmSwitch, LmSwitchProps } from '../LmSwitch'

export type LmSwitchRhfProps = LmSwitchProps & LmRhfProps & {}

export function LmSwitchRhf({
  name,
  control,
  rules = {},
  defaultValue,
  ...inputProps
}: LmSwitchRhfProps) {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value } }) => (
        <LmSwitch {...inputProps} onCheckedChange={onChange} value={value ?? false} />
      )}
    />
  )
}
