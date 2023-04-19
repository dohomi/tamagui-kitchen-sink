import { LmSelect } from "../LmSelect";
import { Controller } from "react-hook-form";
function LmSelectRhf({
  name,
  control,
  rules = {},
  defaultValue,
  ...inputProps
}) {
  if (inputProps.required) {
    rules.required = "This field is required";
  }
  return <Controller name={name} rules={rules} control={control} defaultValue={defaultValue} render={({ field: { onChange, value }, fieldState: { error, invalid } }) => <LmSelect {...inputProps} value={value ?? ""} error={invalid} onValueChange={onChange} helperText={error ? error.message : inputProps.helperText} />} />;
}
export {
  LmSelectRhf
};
//# sourceMappingURL=LmSelectRhf.mjs.map
