import { SizableStack, XStack } from "tamagui";
import { useId, useState } from "react";
import { LmFormFieldContainer } from "./LmFormFieldContainer";
import { StarFill } from "@tamagui-extras/core";
function LmStarRating({
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
  iconProps,
  gap,
  Icon = StarFill,
  size = "$1",
  colorHover = "$yellow7",
  colorActiveHover = "$yellow8",
  colorActive = "$yellow10",
  color = "$gray7",
  ...sizeableStackProps
}) {
  const id = useId(), [rating, setRating] = useState(value), [hoverRating, setHoverRating] = useState(null), arr = Array.from(Array(count).keys());
  return <LmFormFieldContainer
    id={id}
    required={required}
    error={error}
    helperText={helperText}
    helperTextProps={helperTextProps}
    label={label}
    labelInline={labelInline}
    labelProps={labelProps}
    {...containerProps}
  ><XStack gap={gap}>{arr.map((value2) => {
    const currentRating = value2 + 1, filled = currentRating <= (rating || 0), hovered = currentRating <= (hoverRating || 0), currentColor = filled ? hovered ? colorActiveHover : colorActive : hovered ? colorHover : color;
    return <SizableStack
      key={`${currentRating}`}
      {...sizeableStackProps}
      size={size}
      circular
      onHoverIn={() => {
        disabled || setHoverRating(currentRating);
      }}
      onHoverOut={() => {
        disabled || setHoverRating(null);
      }}
      onPress={() => {
        if (disabled)
          return;
        const newRating = rating === currentRating ? null : currentRating;
        setRating(newRating), typeof onChange == "function" && onChange(newRating);
      }}
    ><Icon {...iconProps} size={size} color={currentColor} /></SizableStack>;
  })}</XStack></LmFormFieldContainer>;
}
export {
  LmStarRating
};
//# sourceMappingURL=LmStarRating.js.map
