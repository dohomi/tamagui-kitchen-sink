import { Controller, FieldValues } from 'react-hook-form'
import { LmRhfProps } from './lmRhfProps'
import { LmStarRating, LmStarRatingProps } from '../LmStarRating'

export type LmStarRatingRhfProps<T extends FieldValues> = LmStarRatingProps & LmRhfProps<T> & {}

export function LmStarRatingRhf<T extends FieldValues>({
  name,
  control,
  rules = {},
  defaultValue,
  ...inputProps
}: LmStarRatingRhfProps<T>) {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value } }) => (
        <LmStarRating {...inputProps} onChange={onChange} value={value ?? null} />
      )}
    />
  )
}
