import { Controller, FieldValues } from 'react-hook-form'
import { LmRhfProps } from './lmRhfProps'
import { LmAutocomplete, LmAutocompleteProps } from '../LmAutocomplete'

export type LmAutocompleteRhfProps<T extends FieldValues> = LmRhfProps<T> &
  LmAutocompleteProps & {
    matchId?: boolean
  }

export function LmAutocompleteRhf<T extends FieldValues = FieldValues>({
  name,
  rules,
  control,
  defaultValue,
  matchId,
  options,
  multiple,
  ...inputProps
}: LmAutocompleteRhfProps<T>) {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        let currentValue = multiple ? value || [] : value || null
        if (matchId) {
          // @ts-ignore
          currentValue = multiple
            ? (value || []).map((i: any) => options.find((j) => (j.value || j) === i))
            : options.find((i) => (i.value || i) === value) || null
        }

        return (
          <LmAutocomplete
            {...inputProps}
            value={currentValue}
            multiple={multiple}
            options={options}
            error={!!error}
            onChange={(v) => {
              let changedVal = v
              if (matchId) {
                // @ts-ignore
                changedVal = Array.isArray(v) ? v.map((i: any) => i?.value || i) : v?.value || v
              }
              onChange(changedVal)
              if (typeof inputProps.onChange === 'function') {
                inputProps.onChange(v)
              }
            }}
            helperText={error ? error.message : inputProps.helperText}
          />
        )
      }}
    />
  )
}
