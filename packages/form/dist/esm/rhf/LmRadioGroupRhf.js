import { jsx } from "react/jsx-runtime";
import { LmRadioGroup } from "../LmRadioGroup";
import { Controller } from "react-hook-form";
function LmRadioGroupRhf({
  name,
  control,
  rules = {},
  defaultValue,
  ...rest
}) {
  if (rest.required) {
    rules.required = "This field is required";
  }
  return /* @__PURE__ */ jsx(
    Controller,
    {
      name,
      control,
      rules,
      defaultValue,
      render: ({ field: { onChange, value }, fieldState: { error } }) => /* @__PURE__ */ jsx(
        LmRadioGroup,
        {
          ...rest,
          name,
          value,
          onValueChange: onChange,
          error: !!error,
          helperText: error ? error.message : rest.helperText
        }
      )
    }
  );
}
export {
  LmRadioGroupRhf
};
//# sourceMappingURL=LmRadioGroupRhf.js.map
