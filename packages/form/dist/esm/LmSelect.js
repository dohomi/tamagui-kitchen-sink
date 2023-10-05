import { Select, YStack } from "tamagui";
import { LinearGradient } from "@tamagui/linear-gradient";
import {
  CaretDownRegular,
  CaretUpRegular,
  CheckRegular,
  colormap
} from "@tamagui-extras/core";
import { useId, useState } from "react";
import { LmFormFieldContainer } from "./LmFormFieldContainer";
import { jsx, jsxs } from "react/jsx-runtime";
function LmSelect({
  value,
  colorVariant,
  themeName,
  options = [],
  width = 180,
  placeholder = "",
  dropDownLabel,
  required,
  error,
  helperText,
  helperTextProps,
  label,
  labelInline,
  labelProps,
  fullWidth,
  defaultValue,
  onValueChange,
  containerProps,
  ...rest
}) {
  const [selectVal, setSelectVal] = useState(value ?? defaultValue ?? ""), id = useId();
  return rest.size = rest.size || "$3", /* @__PURE__ */ jsx(
    LmFormFieldContainer,
    {
      id,
      theme: colorVariant ? colormap[colorVariant] : themeName || void 0,
      error,
      required,
      labelProps,
      label,
      size: rest.size,
      fullWidth,
      labelInline,
      helperText,
      helperTextProps,
      ...containerProps,
      children: /* @__PURE__ */ jsxs(
        Select,
        {
          id,
          ...rest,
          value: selectVal,
          onValueChange: (val) => {
            setSelectVal(val), typeof onValueChange == "function" && onValueChange(val);
          },
          children: [
            /* @__PURE__ */ jsx(
              Select.Trigger,
              {
                width: fullWidth ? "100%" : width,
                iconAfter: /* @__PURE__ */ jsx(CaretDownRegular, {}),
                paddingVertical: 0,
                minHeight: rest.size,
                children: /* @__PURE__ */ jsx(Select.Value, { placeholder, paddingVertical: 0 })
              }
            ),
            /* @__PURE__ */ jsx(Select.Adapt, { when: "sm", children: /* @__PURE__ */ jsxs(Select.Sheet, { modal: !0, dismissOnSnapToBottom: !0, children: [
              /* @__PURE__ */ jsx(Select.Sheet.Frame, { children: /* @__PURE__ */ jsx(Select.Sheet.ScrollView, { children: /* @__PURE__ */ jsx(Select.Adapt.Contents, {}) }) }),
              /* @__PURE__ */ jsx(Select.Sheet.Overlay, {})
            ] }) }),
            /* @__PURE__ */ jsxs(Select.Content, { zIndex: 2e5, children: [
              /* @__PURE__ */ jsxs(
                Select.ScrollUpButton,
                {
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  width: "100%",
                  height: "$3",
                  children: [
                    /* @__PURE__ */ jsx(YStack, { zIndex: 10, children: /* @__PURE__ */ jsx(CaretUpRegular, { size: 20 }) }),
                    /* @__PURE__ */ jsx(
                      LinearGradient,
                      {
                        start: [0, 0],
                        end: [0, 1],
                        fullscreen: !0,
                        colors: ["$background", "$backgroundTransparent"],
                        borderRadius: "$4"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsx(Select.Viewport, { children: /* @__PURE__ */ jsxs(Select.Group, { children: [
                dropDownLabel && /* @__PURE__ */ jsx(Select.Label, { children: dropDownLabel }),
                options.map((item, i) => /* @__PURE__ */ jsxs(Select.Item, { index: i, value: `${item.value}`, children: [
                  /* @__PURE__ */ jsx(Select.ItemText, { children: item.label }),
                  /* @__PURE__ */ jsx(Select.ItemIndicator, { marginLeft: "auto", children: /* @__PURE__ */ jsx(CheckRegular, { size: 16 }) })
                ] }, item.value))
              ] }) }),
              /* @__PURE__ */ jsxs(
                Select.ScrollDownButton,
                {
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  width: "100%",
                  height: "$3",
                  children: [
                    /* @__PURE__ */ jsx(YStack, { zIndex: 10, children: /* @__PURE__ */ jsx(CaretDownRegular, { size: 20 }) }),
                    /* @__PURE__ */ jsx(
                      LinearGradient,
                      {
                        start: [0, 0],
                        end: [0, 1],
                        fullscreen: !0,
                        colors: ["$backgroundTransparent", "$background"],
                        borderRadius: "$4"
                      }
                    )
                  ]
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
export {
  LmSelect
};
//# sourceMappingURL=LmSelect.js.map
