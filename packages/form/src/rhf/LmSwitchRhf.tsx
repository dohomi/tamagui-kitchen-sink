import { Controller, FieldValues } from 'react-hook-form'
import { LmRhfProps } from './lmRhfProps'
import { LmSwitch, LmSwitchProps } from '../LmSwitch'

export type LmSwitchRhfProps<T extends FieldValues> = LmSwitchProps & LmRhfProps<T> & {}

export function LmSwitchRhf<T extends FieldValues>({
  name,
  control,
  rules = {},
  defaultValue,
  ...inputProps
}: LmSwitchRhfProps<T>) {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value } }) => (
        <LmSwitch {...inputProps} onCheckedChange={onChange} value={value} checked={!!value} />
      )}
    />
  )
}
