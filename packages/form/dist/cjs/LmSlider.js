var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var LmSlider_exports = {};
__export(LmSlider_exports, {
  LmSlider: () => LmSlider
});
module.exports = __toCommonJS(LmSlider_exports);
var import_tamagui = require("tamagui");
var import_react = require("react");
var import_LmFormFieldContainer = require("./LmFormFieldContainer");
const CustomSliderTrack = (0, import_tamagui.styled)(import_tamagui.Slider.Track, {
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
const CustomSliderTrackActive = (0, import_tamagui.styled)(import_tamagui.Slider.TrackActive, {
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
  const id = (0, import_react.useId)();
  const [value, setValue] = (0, import_react.useState)(defaultValue);
  const trackColor = color ? `${color}Dark` : void 0;
  return <import_LmFormFieldContainer.LmFormFieldContainer
    id={id}
    label={label}
    error={error}
    required={required}
    labelProps={labelProps}
    size={sliderProps.size}
    labelInline={labelInline}
    helperText={helperText}
    helperTextProps={helperTextProps}
    alignItems={labelInline ? "center" : void 0}
  ><import_tamagui.XStack space alignItems="center">
    <import_tamagui.Slider
      size="$2"
      width={150}
      defaultValue={value}
      max={5}
      step={1}
      {...sliderProps}
      onValueChange={(v) => {
        setValue(v);
        if (typeof sliderProps.onValueChange === "function") {
          sliderProps.onValueChange(v);
        }
      }}
    >
      <CustomSliderTrack colorCustom={!colorActiveOnly ? trackColor : void 0}><CustomSliderTrackActive colorCustom={trackColor} /></CustomSliderTrack>
      <import_tamagui.Slider.Thumb
        bordered={false}
        circular
        pressTheme={false}
        hoverTheme={false}
        focusTheme={false}
        size="$2"
        index={0}
        backgroundColor={color}
        {...thumbProps}
      />
    </import_tamagui.Slider>
    {showValue && <import_tamagui.Text>{value[0]}</import_tamagui.Text>}
  </import_tamagui.XStack></import_LmFormFieldContainer.LmFormFieldContainer>;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LmSlider
});
//# sourceMappingURL=LmSlider.js.map
