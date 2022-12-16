import { Controller } from 'react-hook-form'
import { LmRhfProps } from './lmRhfProps'
import { LmCheckbox, LmCheckboxProps } from '../LmCheckbox'

type LmCheckboxRhfProps = LmCheckboxProps & LmRhfProps

export function LmCheckboxRhf({
  name,
  rules = {},
  control,
  defaultValue,
  ...inputProps
}: LmCheckboxRhfProps) {
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
