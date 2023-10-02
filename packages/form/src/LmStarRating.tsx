import { Button, ButtonProps, SizeTokens, XStack } from 'tamagui'
import { useId, useState } from 'react'
import { LmFormFieldContainer } from './LmFormFieldContainer'
import { LmFormContainerBaseTypes } from './formContainerTypes'
import { StarFill, StarRegular } from '@tamagui-extras/core'

type StarProps = Omit<ButtonProps, 'size'> & {
  filled: boolean
  size?: SizeTokens
}

function StarIcon({ filled, size = '$1', ...props }: StarProps) {
  // due to missing PR this needs to be done manually
  return (
    <Button
      {...props}
      size={size}
      circular
      unstyled
      icon={filled ? <StarFill size={size} /> : <StarRegular size={size} />}
    />
  )
}

export type LmStarRatingProps = LmFormContainerBaseTypes & {
  count?: number
  onChange?: (rating: number | null) => void
  value?: number | null
  size?: SizeTokens
  disabled?: boolean
}

export function LmStarRating({
  count = 5,
  onChange,
  value = null,
  disabled,
  required,
  error,
  helperText,
  helperTextProps,
  label,
  labelInline,
  labelProps,
  containerProps,
  ...iconProps
}: LmStarRatingProps) {
  const id = useId()
  const [rating, setRating] = useState<number | null>(value)
  const arr = Array.from(Array(count).keys())
  return (
    <LmFormFieldContainer
      id={id}
      required={required}
      error={error}
      helperText={helperText}
      helperTextProps={helperTextProps}
      label={label}
      labelInline={labelInline}
      labelProps={labelProps}
      {...containerProps}
    >
      <XStack>
        {arr.map((value) => {
          const currentRating = value + 1
          return (
            <StarIcon
              key={currentRating}
              {...iconProps}
              filled={currentRating <= (rating || 0)}
              onPress={() => {
                if (disabled) {
                  return
                }
                let newRating = rating === currentRating ? null : currentRating
                setRating(newRating)
                if (typeof onChange === 'function') {
                  onChange(newRating)
                }
              }}
            />
          )
        })}
      </XStack>
    </LmFormFieldContainer>
  )
}
