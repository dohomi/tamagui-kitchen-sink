import { Controller } from "react-hook-form";
import { LmCheckbox } from "../LmCheckbox";
import { jsx } from "react/jsx-runtime";
function LmCheckboxRhf({
  name,
  rules = {},
  control,
  defaultValue,
  ...inputProps
}) {
  return inputProps.required && (rules.required = "This field is required"), /* @__PURE__ */ jsx(
    Controller,
    {
      name,
      rules,
      control,
      defaultValue,
      render: ({ field: { onChange, value }, fieldState: { error } }) => /* @__PURE__ */ jsx(
        LmCheckbox,
        {
          ...inputProps,
          value: value ?? !1,
          error: !!error,
          onChange,
          helperText: error ? error.message : inputProps.helperText
        }
      )
    }
  );
}
export {
  LmCheckboxRhf
};
//# sourceMappingURL=LmCheckboxRhf.js.map
