import { Controller } from "react-hook-form";
import { LmSwitch } from "../LmSwitch";
function LmSwitchRhf({
  name,
  control,
  rules = {},
  defaultValue,
  ...inputProps
}) {
  return <Controller name={name} rules={rules} control={control} defaultValue={defaultValue} render={({ field: { onChange, value } }) => <LmSwitch {...inputProps} onCheckedChange={onChange} value={value} />} />;
}
export {
  LmSwitchRhf
};
//# sourceMappingURL=LmSwitchRhf.js.map
