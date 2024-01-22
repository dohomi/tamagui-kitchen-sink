import { useId } from "react";
import {
  Checkbox,
  Label,
  Paragraph,
  XStack,
  YStack
} from "tamagui";
import { CheckRegular, MinusRegular } from "@tamagui-extras/core";
import { jsx, jsxs } from "react/jsx-runtime";
function LmCheckbox({
  label,
  onChange,
  error,
  helperText,
  size = "$3",
  value,
  required,
  theme,
  helperTextProps,
  checkboxProps,
  labelProps,
  disabled,
  ...stackProps
}) {
  const id = useId();
  return /* @__PURE__ */ jsxs(XStack, { space: !0, alignItems: "center", ...stackProps, children: [
    /* @__PURE__ */ jsx(
      Checkbox,
      {
        id,
        theme: error ? "red" : theme,
        ...checkboxProps,
        disabled,
        defaultChecked: value || checkboxProps?.defaultChecked,
        borderColor: error ? "$red8" : checkboxProps?.borderColor ?? "$borderColor",
        size,
        onCheckedChange: (checked) => {
          typeof onChange == "function" && onChange(checked);
        },
        children: /* @__PURE__ */ jsx(Checkbox.Indicator, { children: checkboxProps?.checked === "indeterminate" ? /* @__PURE__ */ jsx(MinusRegular, {}) : /* @__PURE__ */ jsx(CheckRegular, {}) })
      }
    ),
    label && /* @__PURE__ */ jsxs(YStack, { children: [
      /* @__PURE__ */ jsxs(Label, { size, htmlFor: id, ...labelProps, disabled, children: [
        required ? "* " : "",
        label
      ] }),
      helperText && /* @__PURE__ */ jsx(
        Paragraph,
        {
          paddingLeft: "$2",
          marginTop: 0,
          size,
          ...helperTextProps,
          color: error ? "$red10" : helperTextProps?.color,
          children: helperText
        }
      )
    ] })
  ] });
}
export {
  LmCheckbox
};
//# sourceMappingURL=LmCheckbox.js.map
