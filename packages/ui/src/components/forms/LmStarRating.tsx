import {Button, ButtonProps, ColorTokens, SizeTokens, XStack} from "tamagui";
import {useId, useState} from "react";
import {MdiStar, MdiStarOutline} from "@tamagui-extras/mdi-icons"
import {LmFormFieldContainer} from "./LmFormFieldContainer";
import {LmFormContainerBaseTypes} from "./formContainerTypes";

type StarProps = Omit<ButtonProps, 'color' | 'size'> & {
    filled: boolean
    color?: ColorTokens
    size?: SizeTokens
}

function StarIcon({filled, color, size = '$2', ...props}: StarProps) {
    return (
        <Button
            {...props}
            size={size}
            chromeless
            circular
            icon={filled ? <MdiStar color={color} size={size as number}/> :
                <MdiStarOutline color={color} size={size as number}/>}
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