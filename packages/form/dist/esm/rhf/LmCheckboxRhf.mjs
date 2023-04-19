import { jsx } from "react/jsx-runtime";
import { Controller } from "react-hook-form";
import { LmCheckbox } from "../LmCheckbox";
function LmCheckboxRhf({
  name,
  rules = {},
  control,
  defaultValue,
  ...inputProps
}) {
  if (inputProps.required) {
    rules.required = "This field is required";
  }
  return /* @__PURE__ */ jsx(
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
          value: value ?? false,
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
//# sourceMappingURL=LmCheckboxRhf.mjs.map
