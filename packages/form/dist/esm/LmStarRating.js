import { SizableStack, XStack } from "tamagui";
import { useId, useState } from "react";
import { LmFormFieldContainer } from "./LmFormFieldContainer";
import { StarFill } from "@tamagui-extras/core";
import { jsx } from "react/jsx-runtime";
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
      ...containerProps,
      children: /* @__PURE__ */ jsx(XStack, { gap, children: arr.map((value2) => {
        const currentRating = value2 + 1, filled = currentRating <= (rating || 0), hovered = currentRating <= (hoverRating || 0);
        return /* @__PURE__ */ jsx(
          SizableStack,
          {
            ...sizeableStackProps,
            size,
            circular: !0,
            onHoverIn: () => {
              disabled || setHoverRating(currentRating);
            },
            onHoverOut: () => {
              disabled || setHoverRating(null);
            },
            onPress: () => {
              if (disabled)
                return;
              const newRating = rating === currentRating ? null : currentRating;
              setRating(newRating), typeof onChange == "function" && onChange(newRating);
            },
            children: /* @__PURE__ */ jsx(Icon, { ...iconProps, size, color: filled ? hovered ? colorActiveHover : colorActive : hovered ? colorHover : color })
          }
        );
      }) })
    }
  );
}
export {
  LmStarRating
};
//# sourceMappingURL=LmStarRating.js.map
