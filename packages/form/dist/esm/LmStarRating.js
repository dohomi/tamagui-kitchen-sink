import { jsx } from "react/jsx-runtime";
import { Button, XStack } from "tamagui";
import { useId, useState } from "react";
import { LmFormFieldContainer } from "./LmFormFieldContainer";
import { StarFill, StarRegular } from "@tamagui-extras/core";
function StarIcon({ filled, size = "$1", ...props }) {
  return /* @__PURE__ */ jsx(
    Button,
    {
      ...props,
      size,
      circular: true,
      unstyled: true,
      icon: filled ? /* @__PURE__ */ jsx(StarFill, { size }) : /* @__PURE__ */ jsx(StarRegular, { size })
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
//# sourceMappingURL=LmStarRating.js.map
