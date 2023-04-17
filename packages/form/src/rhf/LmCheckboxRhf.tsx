import { Controller, FieldValues } from 'react-hook-form'
import { LmRhfProps } from './lmRhfProps'
import { LmCheckbox, LmCheckboxProps } from '../LmCheckbox'

type LmCheckboxRhfProps<T extends FieldValues> = LmCheckboxProps & LmRhfProps<T>

export function LmCheckboxRhf<T extends FieldValues>({
  name,
  rules = {},
  control,
  defaultValue,
  ...inputProps
}: LmCheckboxRhfProps<T>) {
  if (inputProps.required) {
    rules.required = 'This field is required'
  }
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <LmCheckbox
          {...inputProps}
          value={value ?? false}
          error={!!error}
          onChange={onChange}
          helperText={error ? error.message : inputProps.helperText}
        />
      )}
    />
  )
}
