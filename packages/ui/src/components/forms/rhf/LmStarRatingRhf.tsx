import { Controller } from 'react-hook-form'
import { LmRhfProps } from './lmRhfProps'
import { LmStarRating, LmStarRatingProps } from '../LmStarRating'

export type LmStarRatingRhfProps = LmStarRatingProps & LmRhfProps & {}

export function LmStarRatingRhf({
  name,
  control,
  rules = {},
  defaultValue,
  ...inputProps
}: LmStarRatingRhfProps) {
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
