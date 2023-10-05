var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
var LmSlider_exports = {};
__export(LmSlider_exports, {
  LmSlider: () => LmSlider
});
module.exports = __toCommonJS(LmSlider_exports);
var import_tamagui = require("tamagui"), import_react = require("react"), import_LmFormFieldContainer = require("./LmFormFieldContainer"), import_jsx_runtime = require("react/jsx-runtime");
const CustomSliderTrack = (0, import_tamagui.styled)(import_tamagui.Slider.Track, {
  variants: {
    colorCustom: {
      ":string": (color) => ({
        backgroundColor: color
      })
    }
  }
}), CustomSliderTrackActive = (0, import_tamagui.styled)(import_tamagui.Slider.TrackActive, {
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
  containerProps,
  ...sliderProps
}) {
  const id = (0, import_react.useId)(), [value, setValue] = (0, import_react.useState)(defaultValue), trackColor = color ? `${color}Dark` : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_LmFormFieldContainer.LmFormFieldContainer,
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
      ...containerProps,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.XStack, { space: !0, alignItems: "center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          import_tamagui.Slider,
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
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomSliderTrack, { colorCustom: colorActiveOnly ? void 0 : trackColor, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomSliderTrackActive, { colorCustom: trackColor }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_tamagui.Slider.Thumb,
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
        showValue && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Text, { children: value[0] })
      ] })
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LmSlider
});
//# sourceMappingURL=LmSlider.js.map
