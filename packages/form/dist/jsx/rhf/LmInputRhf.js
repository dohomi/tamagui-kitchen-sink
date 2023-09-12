import { Controller } from "react-hook-form";
import { LmInput } from "../LmInput";
function LmInputRhf({
  name,
  control,
  rules = {},
  defaultValue,
  ...inputProps
}) {
  return inputProps.required && (rules.required = "This field is required"), <Controller
    name={name}
    rules={rules}
    control={control}
    defaultValue={defaultValue}
    render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => <LmInput
      {...inputProps}
      value={value ?? ""}
      onBlur={onBlur}
      error={!!error}
      onChangeText={onChange}
      helperText={error ? error.message : inputProps.helperText}
    />}
  />;
}
export {
  LmInputRhf
};
//# sourceMappingURL=LmInputRhf.js.map
