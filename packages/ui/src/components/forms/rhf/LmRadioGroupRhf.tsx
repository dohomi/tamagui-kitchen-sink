import { LmRhfProps } from './lmRhfProps'
import { LmRadioGroup, LmRadioGroupProps } from '../LmRadioGroup'
import { Controller } from 'react-hook-form'

export type LmRadioGroupRhfProps = LmRadioGroupProps & LmRhfProps & {}

export function LmRadioGroupRhf({
  name,
  control,
  rules = {},
  defaultValue,
  ...rest
}: LmRadioGroupRhfProps) {
  if (rest.required) {
    rules.required = 'This field is required'
  }
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <LmRadioGroup
          {...rest}
          name={name}
          value={value}
          onValueChange={onChange}
          error={!!error}
          helperText={error ? error.message : rest.helperText}
        />
      )}
    />
  )
}
