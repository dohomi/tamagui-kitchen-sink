import { jsx } from "react/jsx-runtime";
import { Controller } from "react-hook-form";
import { LmInput } from "../LmInput";
function LmInputRhf({
  name,
  control,
  rules = {},
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
      render: ({ field: { onChange, value, onBlur }, fieldState: { error } }) => /* @__PURE__ */ jsx(
        LmInput,
        {
          ...inputProps,
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
