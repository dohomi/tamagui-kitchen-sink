import { Controller, FieldValues } from 'react-hook-form'
import { LmDateSelection, LmDateSelectionProps } from '../../index'
import { LmRhfProps } from '../../../form/rhf/lmRhfProps'

export type LmDateSelectionRhfProps<T extends FieldValues> = LmRhfProps<T> & LmDateSelectionProps

export function LmDateSelectionRhf<T extends FieldValues>({
  name,
  defaultValue,
  control,
  rules = {},
  ...rest
}: LmDateSelectionRhfProps<T>) {
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
