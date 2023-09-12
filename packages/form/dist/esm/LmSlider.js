import { Slider, styled, Text, XStack } from "tamagui";
import { useId, useState } from "react";
import { LmFormFieldContainer } from "./LmFormFieldContainer";
import { jsx, jsxs } from "react/jsx-runtime";
const CustomSliderTrack = styled(Slider.Track, {
  variants: {
    colorCustom: {
      ":string": (color) => ({
        backgroundColor: color
      })
    }
  }
}), CustomSliderTrackActive = styled(Slider.TrackActive, {
  variants: {
    colorCustom: {
      ":string": (color) => ({
        backgroundColor: color
      })
    }
  }
});
function LmSlider({
  thumbProps,
  color,
  defaultValue = [0],
  label,
  labelProps,
  error,
  required,
  helperText,
  helperTextProps,
  labelInline,
  colorActiveOnly,
  showValue,
  ...sliderProps
}) {
  const id = useId(), [value, setValue] = useState(defaultValue), trackColor = color ? `${color}Dark` : void 0;
  return /* @__PURE__ */ jsx(
    LmFormFieldContainer,
    {
      id,
      label,
      error,
      required,
      labelProps,
      size: sliderProps.size,
      labelInline,
      helperText,
      helperTextProps,
      alignItems: labelInline ? "center" : void 0,
      children: /* @__PURE__ */ jsxs(XStack, { space: !0, alignItems: "center", children: [
        /* @__PURE__ */ jsxs(
          Slider,
          {
            size: "$2",
            width: 150,
            defaultValue: value,
            max: 5,
            step: 1,
            ...sliderProps,
            onValueChange: (v) => {
              setValue(v), typeof sliderProps.onValueChange == "function" && sliderProps.onValueChange(v);
            },
            children: [
              /* @__PURE__ */ jsx(CustomSliderTrack, { colorCustom: colorActiveOnly ? void 0 : trackColor, children: /* @__PURE__ */ jsx(CustomSliderTrackActive, { colorCustom: trackColor }) }),
              /* @__PURE__ */ jsx(
                Slider.Thumb,
                {
                  bordered: !1,
                  circular: !0,
                  pressTheme: !1,
                  hoverTheme: !1,
                  focusTheme: !1,
                  size: "$1",
                  index: 0,
                  backgroundColor: color,
                  ...thumbProps
                }
              )
            ]
          }
        ),
        showValue && /* @__PURE__ */ jsx(Text, { children: value[0] })
      ] })
    }
  );
}
export {
  LmSlider
};
//# sourceMappingURL=LmSlider.js.map
