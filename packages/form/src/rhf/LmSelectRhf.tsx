import { LmSelect, LmSelectProps } from '../LmSelect'
import { Controller, FieldValues } from 'react-hook-form'
import { LmRhfProps } from './lmRhfProps'

export type LmSelectRhfProps<T extends FieldValues> = LmSelectProps & LmRhfProps<T> & {}

export function LmSelectRhf<T extends FieldValues>({
  name,
  control,
  rules = {},
  defaultValue,
  ...inputProps
}: LmSelectRhfProps<T>) {
  if (inputProps.required) {
    rules.required = 'This field is required'
  }
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value, ref }, fieldState: { error, invalid } }) => (
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
