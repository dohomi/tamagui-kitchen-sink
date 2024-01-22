import { Controller } from "react-hook-form";
import { LmInput } from "../LmInput";
import { jsx } from "react/jsx-runtime";
function LmInputRhf({
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
      render: ({ field: { onChange, value, onBlur, ref }, fieldState: { error } }) => /* @__PURE__ */ jsx(
        LmInput,
        {
          ...inputProps,
          ref,
          value: value ?? "",
          onBlur,
          error: !!error,
          onChangeText: onChange,
          helperText: error ? error.message : inputProps.helperText
        }
      )
    }
  );
}
export {
  LmInputRhf
};
//# sourceMappingURL=LmInputRhf.js.map
