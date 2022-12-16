import { Controller } from 'react-hook-form'
import { LmDateSelection, LmDateSelectionProps } from '../date'
import { LmRhfProps } from './lmRhfProps'

export type LmDateSelectionRhfProps = LmRhfProps & LmDateSelectionProps

export function LmDateSelectionRhf({
  name,
  defaultValue,
  control,
  rules = {},
  ...rest
}: LmDateSelectionRhfProps) {
  if (rest.required) {
    rules.required = 'This field is required'
  }
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field: { onChange, name, value }, fieldState: { error } }) => {
        return (
          <LmDateSelection
            {...rest}
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : rest.helperText}
          />
        )
      }}
    />
  )
}
