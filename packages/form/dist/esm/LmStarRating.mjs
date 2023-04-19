import { jsx } from "react/jsx-runtime";
import { Button, getTokens, getVariableValue, XStack } from "tamagui";
import { useId, useState } from "react";
import { LmFormFieldContainer } from "./LmFormFieldContainer";
import { Star } from "tamagui-phosphor-icons";
function StarIcon({ filled, size = "$2", ...props }) {
  const iconSize = typeof size === "string" ? getVariableValue(getTokens().size[size] || size) : size;
  return /* @__PURE__ */ jsx(
    Button,
    {
      ...props,
      size,
      circular: true,
      unstyled: true,
      icon: /* @__PURE__ */ jsx(Star, { size: iconSize, weight: filled ? "fill" : "regular" })
    }
  );
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
  return /* @__PURE__ */ jsx(
    LmFormFieldContainer,
    {
      id,
      required,
      error,
      helperText,
      helperTextProps,
      label,
      labelInline,
      labelProps,
      children: /* @__PURE__ */ jsx(XStack, { children: arr.map((value2) => {
        const currentRating = value2 + 1;
        return /* @__PURE__ */ jsx(
          StarIcon,
          {
            ...iconProps,
            filled: currentRating <= (rating || 0),
            onPress: () => {
              if (disabled) {
                return;
              }
              let newRating = rating === currentRating ? null : currentRating;
              setRating(newRating);
              if (typeof onChange === "function") {
                onChange(newRating);
              }
            }
          },
          currentRating
        );
      }) })
    }
  );
}
export {
  LmStarRating
};
//# sourceMappingURL=LmStarRating.mjs.map
