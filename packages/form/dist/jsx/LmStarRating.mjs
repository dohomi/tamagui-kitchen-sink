import { Button, getTokens, getVariableValue, XStack } from "tamagui";
import { useId, useState } from "react";
import { LmFormFieldContainer } from "./LmFormFieldContainer";
import { Star } from "tamagui-phosphor-icons";
function StarIcon({ filled, size = "$2", ...props }) {
  const iconSize = typeof size === "string" ? getVariableValue(getTokens().size[size] || size) : size;
  return <Button {...props} size={size} circular unstyled icon={<Star size={iconSize} weight={filled ? "fill" : "regular"} />} />;
}
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
  ...iconProps
}) {
  const id = useId();
  const [rating, setRating] = useState(value);
  const arr = Array.from(Array(count).keys());
  return <LmFormFieldContainer id={id} required={required} error={error} helperText={helperText} helperTextProps={helperTextProps} label={label} labelInline={labelInline} labelProps={labelProps}><XStack>{arr.map((value2) => {
    const currentRating = value2 + 1;
    return <StarIcon key={currentRating} {...iconProps} filled={currentRating <= (rating || 0)} onPress={() => {
      if (disabled) {
        return;
      }
      let newRating = rating === currentRating ? null : currentRating;
      setRating(newRating);
      if (typeof onChange === "function") {
        onChange(newRating);
      }
    }} />;
  })}</XStack></LmFormFieldContainer>;
}
export {
  LmStarRating
};
//# sourceMappingURL=LmStarRating.mjs.map
