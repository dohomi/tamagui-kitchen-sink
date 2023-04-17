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
        setValue(v);
        if (typeof sliderProps.onValueChange === "function") {
          sliderProps.onValueChange(v);
        }
      }}
    >
      <CustomSliderTrack colorCustom={!colorActiveOnly ? trackColor : void 0}><CustomSliderTrackActive colorCustom={trackColor} /></CustomSliderTrack>
      <Slider.Thumb
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
    </Slider>
    {showValue && <Text>{value[0]}</Text>}
  </XStack></LmFormFieldContainer>;
}
export {
  LmSlider
};
//# sourceMappingURL=LmSlider.js.map
