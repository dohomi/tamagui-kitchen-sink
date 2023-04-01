import { LmRhfProps } from './lmRhfProps'
import { Controller, FieldValues } from 'react-hook-form'
import { LmRichText, LmRichTextProps } from '../richText/LmRichText'

export type LmRichTextRhfProps<T extends FieldValues> = LmRichTextProps & LmRhfProps<T> & {}

export function LmRichTextRhf<T extends FieldValues>({
  name,
  control,
  rules = {},
  defaultValue,
  ...inputProps
}: LmRichTextRhfProps<T>) {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value } }) => (
        <LmRichText
          {...inputProps}
          onChange={(text) => {
            onChange(text)
            if (typeof inputProps.onChange === 'function') {
              inputProps.onChange(text)
            }
          }}
          value={value ?? ''}
        />
      )}
    />
  )
}
