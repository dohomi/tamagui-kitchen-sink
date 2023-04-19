import { jsx, jsxs } from "react/jsx-runtime";
import { Slider, styled, Text, XStack } from "tamagui";
import { useId, useState } from "react";
import { LmFormFieldContainer } from "./LmFormFieldContainer";
const CustomSliderTrack = styled(Slider.Track, {
  variants: {
    colorCustom: {
      ":string": (color) => {
        return {
          backgroundColor: color
        };
      }
    }
  }
});
const CustomSliderTrackActive = styled(Slider.TrackActive, {
  variants: {
    colorCustom: {
      ":string": (color) => {
        return {
          backgroundColor: color
        };
      }
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
  const id = useId();
  const [value, setValue] = useState(defaultValue);
  const trackColor = color ? `${color}Dark` : void 0;
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
      children: /* @__PURE__ */ jsxs(XStack, { space: true, alignItems: "center", children: [
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
              setValue(v);
              if (typeof sliderProps.onValueChange === "function") {
                sliderProps.onValueChange(v);
              }
            },
            children: [
              /* @__PURE__ */ jsx(CustomSliderTrack, { colorCustom: !colorActiveOnly ? trackColor : void 0, children: /* @__PURE__ */ jsx(CustomSliderTrackActive, { colorCustom: trackColor }) }),
              /* @__PURE__ */ jsx(
                Slider.Thumb,
                {
                  bordered: false,
                  circular: true,
                  pressTheme: false,
                  hoverTheme: false,
                  focusTheme: false,
                  size: "$2",
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
//# sourceMappingURL=LmSlider.mjs.map
