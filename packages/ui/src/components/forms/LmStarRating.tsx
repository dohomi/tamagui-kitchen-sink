import {Button, ButtonProps, ColorTokens, SizeTokens, XStack} from "tamagui";
import {useId, useState} from "react";
import {LmFormFieldContainer} from "./LmFormFieldContainer";
import {LmFormContainerBaseTypes} from "./formContainerTypes";
import {Star} from "@tamagui/lucide-icons"

type StarProps = Omit<ButtonProps, 'color' | 'size'> & {
    filled: boolean
    color?: ColorTokens
    size?: SizeTokens
}

function StarIcon({filled, color, size = '$2', ...props}: StarProps) {
    // todo waiting for fill property on lucide icons
    return (
        <Button
            {...props}
            size={size}
            chromeless
            circular
            icon={filled
                ? <Star color={color || 'red'} size={size as number} fillRule={'nonzero'} fill={color || 'red'}/>
                : <Star color={color} size={size as number}/>}
        />
    )
}

export type LmStarRatingProps = LmFormContainerBaseTypes & {
    count?: number
    onChange?: (rating: number | null) => void
    value?: number | null
    color?: ColorTokens
    size?: SizeTokens
    disabled?: boolean
}

export function LmStarRating({
                                 count = 5,
                                 onChange,
                                 value = null,
                                 disabled,
                                 required, error, helperText, label, labelInline, labelProps,
                                 ...iconProps
                             }: LmStarRatingProps) {
    const id = useId()
    const [rating, setRating] = useState<number | null>(value);
    const arr = Array.from(Array(count).keys())
    return (
        <LmFormFieldContainer id={id}
                              required={required}
                              error={error}
                              helperText={helperText}
                              label={label}
                              labelInline={labelInline}
                              labelProps={labelProps}
        >

            <XStack>
                {arr.map(value => {
                    const currentRating = value + 1;
                    return (
                        <StarIcon key={currentRating}
                                  {...iconProps}
                                  filled={currentRating <= (rating || 0)}
                                  onPress={() => {
                                      if (disabled) {
                                          return
                                      }
                                      let newRating = rating === currentRating ? null : currentRating;
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