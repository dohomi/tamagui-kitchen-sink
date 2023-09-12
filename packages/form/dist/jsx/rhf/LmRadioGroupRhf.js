import { LmRadioGroup } from "../LmRadioGroup";
import { Controller } from "react-hook-form";
function LmRadioGroupRhf({
  name,
  control,
  rules = {},
  defaultValue,
  ...rest
}) {
  return rest.required && (rules.required = "This field is required"), <Controller
    name={name}
    control={control}
    rules={rules}
    defaultValue={defaultValue}
    render={({ field: { onChange, value }, fieldState: { error } }) => <LmRadioGroup
      {...rest}
      name={name}
      value={value}
      onValueChange={onChange}
      error={!!error}
      helperText={error ? error.message : rest.helperText}
    />}
  />;
}
export {
  LmRadioGroupRhf
};
//# sourceMappingURL=LmRadioGroupRhf.js.map
