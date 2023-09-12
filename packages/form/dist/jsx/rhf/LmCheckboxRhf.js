import { Controller } from "react-hook-form";
import { LmCheckbox } from "../LmCheckbox";
function LmCheckboxRhf({
  name,
  rules = {},
  control,
  defaultValue,
  ...inputProps
}) {
  return inputProps.required && (rules.required = "This field is required"), <Controller
    name={name}
    rules={rules}
    control={control}
    defaultValue={defaultValue}
    render={({ field: { onChange, value }, fieldState: { error } }) => <LmCheckbox
      {...inputProps}
      value={value ?? !1}
      error={!!error}
      onChange={onChange}
      helperText={error ? error.message : inputProps.helperText}
    />}
  />;
}
export {
  LmCheckboxRhf
};
//# sourceMappingURL=LmCheckboxRhf.js.map
