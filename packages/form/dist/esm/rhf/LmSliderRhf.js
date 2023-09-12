import { LmSlider } from "../LmSlider";
import { Controller } from "react-hook-form";
import { jsx } from "react/jsx-runtime";
function LmSliderRhf({
  name,
  control,
  rules = {},
  defaultValue,
  ...sliderProps
}) {
  return /* @__PURE__ */ jsx(
    Controller,
    {
      name,
      control,
      rules,
      render: ({ field: { value, onChange }, fieldState, formState }) => {
        const preparedValue = Array.isArray(value) ? value : [value];
        return /* @__PURE__ */ jsx(
          LmSlider,
          {
            ...sliderProps,
            defaultValue: preparedValue,
            onValueChange: (v) => {
              v.length === 1 ? onChange(v[0]) : onChange(v), typeof sliderProps.onValueChange == "function" && sliderProps.onValueChange(v);
            }
          }
        );
      }
    }
  );
}
export {
  LmSliderRhf
};
//# sourceMappingURL=LmSliderRhf.js.map
