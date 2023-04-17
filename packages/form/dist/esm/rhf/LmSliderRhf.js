import { LmSlider } from "../LmSlider";
import { Controller } from "react-hook-form";
function LmSliderRhf({
  name,
  control,
  rules = {},
  defaultValue,
  ...sliderProps
}) {
  return <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field: { value, onChange }, fieldState, formState }) => {
      const preparedValue = Array.isArray(value) ? value : [value];
      return <LmSlider
        {...sliderProps}
        defaultValue={preparedValue}
        onValueChange={(v) => {
          if (v.length === 1) {
            onChange(v[0]);
          } else {
            onChange(v);
          }
          if (typeof sliderProps.onValueChange === "function") {
            sliderProps.onValueChange(v);
          }
        }}
      />;
    }}
  />;
}
export {
  LmSliderRhf
};
//# sourceMappingURL=LmSliderRhf.js.map
