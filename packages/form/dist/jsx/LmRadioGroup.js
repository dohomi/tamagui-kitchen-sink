import { Label, RadioGroup, XStack } from "tamagui";
import { LmFormFieldContainer } from "./LmFormFieldContainer";
import { jsx, jsxs } from "react/jsx-runtime";
function LmRadioGroup({
  options,
  required,
  error,
  helperText,
  helperTextProps,
  label,
  labelInline,
  labelProps,
  size = "$3",
  spaceItem = "$2",
  containerProps,
  ...rest
}) {
  return /* @__PURE__ */ jsx(
    LmFormFieldContainer,
    {
      error,
      required,
      labelProps,
      label,
      size,
      labelInline,
      helperText,
      helperTextProps,
      ...containerProps,
      children: /* @__PURE__ */ jsx(RadioGroup, { space: rest.flexDirection === "row" ? "$4" : "$1", required, ...rest, children: options.map((option, i) => /* @__PURE__ */ jsxs(XStack, { alignItems: "center", space: spaceItem, children: [
        /* @__PURE__ */ jsx(
          RadioGroup.Item,
          {
            value: option.value,
            id: `${rest.name}-${option.value}-${i}`,
            size,
            pressTheme: !0,
            children: /* @__PURE__ */ jsx(RadioGroup.Indicator, {})
          }
        ),
        /* @__PURE__ */ jsx(Label, { size, htmlFor: `${rest.name}-${option.value}-${i}`, cursor: "pointer", children: option.label })
      ] }, `${rest.name}-${option.value}-${i}`)) })
    }
  );
}
export {
  LmRadioGroup
};
//# sourceMappingURL=LmRadioGroup.js.map
