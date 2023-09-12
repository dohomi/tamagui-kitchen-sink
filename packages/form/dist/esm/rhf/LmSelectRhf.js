import { LmSelect } from "../LmSelect";
import { Controller } from "react-hook-form";
import { jsx } from "react/jsx-runtime";
function LmSelectRhf({
  name,
  control,
  rules = {},
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
      render: ({ field: { onChange, value }, fieldState: { error, invalid } }) => /* @__PURE__ */ jsx(
        LmSelect,
        {
          ...inputProps,
          value: value ?? "",
          error: invalid,
          onValueChange: onChange,
          helperText: error ? error.message : inputProps.helperText
        }
      )
    }
  );
}
export {
  LmSelectRhf
};
//# sourceMappingURL=LmSelectRhf.js.map
