import { Slider, styled, Text, XStack } from "tamagui";
import { useId, useState } from "react";
import { LmFormFieldContainer } from "./LmFormFieldContainer";
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
  return <LmFormFieldContainer
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
  ><XStack space alignItems="center">
    <Slider
      size="$2"
      width={150}
      defaultValue={value}
      max={5}
      step={1}
      {...sliderProps}
      onValueChange={(v) => {
        setValue(v), typeof sliderProps.onValueChange == "function" && sliderProps.onValueChange(v);
      }}
    >
      <CustomSliderTrack colorCustom={colorActiveOnly ? void 0 : trackColor}><CustomSliderTrackActive colorCustom={trackColor} /></CustomSliderTrack>
      <Slider.Thumb
        bordered={!1}
        circular
        pressTheme={!1}
        hoverTheme={!1}
        focusTheme={!1}
        size="$1"
        index={0}
        backgroundColor={color}
        {...thumbProps}
      />
    </Slider>
    {showValue && <Text>{value[0]}</Text>}
  </XStack></LmFormFieldContainer>;
}
export {
  LmSlider
};
//# sourceMappingURL=LmSlider.js.map
