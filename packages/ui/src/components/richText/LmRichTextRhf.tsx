import { LmRhfProps } from '../form/rhf/lmRhfProps'
import { Controller, FieldValues } from 'react-hook-form'
import { LmRichText } from './LmRichText'
import { LmRichTextProps } from './richTextTypes'

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
