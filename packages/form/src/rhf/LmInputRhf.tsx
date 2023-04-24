import { Controller, FieldValues } from 'react-hook-form'
import { LmInput, LmInputProps } from '../LmInput'
import { LmRhfProps } from './lmRhfProps'

export type LmInputRhfProps<T extends FieldValues = FieldValues> = LmInputProps & LmRhfProps<T>

export function LmInputRhf<T extends FieldValues = FieldValues>({
  name,
  control,
  rules = {},
  defaultValue,
  ...inputProps
}: LmInputRhfProps<T>) {
  if (inputProps.required) {
    rules.required = 'This field is required'
  }
  return (
    <Controller<T>
      name={name}
      rules={rules}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
        <LmInput
          {...inputProps}
          value={value ?? ''}
          onBlur={onBlur}
          error={!!error}
          onChangeText={onChange}
          helperText={error ? error.message : inputProps.helperText}
        />
      )}
    />
  )
}
