import { Button, ButtonProps, SizeTokens, XStack } from 'tamagui'
import { useId, useState } from 'react'
import { LmFormFieldContainer } from './LmFormFieldContainer'
import { LmFormContainerBaseTypes } from './formContainerTypes'
import { Star } from 'tamagui-phosphor-icons'

type StarProps = Omit<ButtonProps, 'size'> & {
  filled: boolean
  size?: SizeTokens
}

function StarIcon({ filled, size = '$2', ...props }: StarProps) {
  return (
    <Button
      {...props}
      size={size}
      circular
      unstyled
      icon={<Star size={size} weight={filled ? 'fill' : 'regular'} />}
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
  label,
  labelInline,
  labelProps,
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
      label={label}
      labelInline={labelInline}
      labelProps={labelProps}
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
