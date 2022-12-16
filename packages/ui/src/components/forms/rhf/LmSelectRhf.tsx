import { LmSelect, LmSelectProps } from '../LmSelect'
import { Controller } from 'react-hook-form'
import { LmRhfProps } from './lmRhfProps'

export type LmSelectRhfProps = LmSelectProps & LmRhfProps & {}

export function LmSelectRhf({
  name,
  control,
  rules = {},
  defaultValue,
  ...inputProps
}: LmSelectRhfProps) {
  if (inputProps.required) {
    rules.required = 'This field is required'
  }
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error, invalid } }) => (
        <LmSelect
          {...inputProps}
          value={value ?? ''}
          error={invalid}
          onValueChange={onChange}
          helperText={error ? error.message : inputProps.helperText}
        />
      )}
    />
  )
}
