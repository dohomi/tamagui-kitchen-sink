import { Controller } from "react-hook-form";
import { LmSwitch } from "../LmSwitch";
import { jsx } from "react/jsx-runtime";
function LmSwitchRhf({
  name,
  control,
  rules = {},
  defaultValue,
  ...inputProps
}) {
  return /* @__PURE__ */ jsx(
    Controller,
    {
      name,
      rules,
      control,
      defaultValue,
      render: ({ field: { onChange, value } }) => /* @__PURE__ */ jsx(LmSwitch, { ...inputProps, onCheckedChange: onChange, value, checked: !!value })
    }
  );
}
export {
  LmSwitchRhf
};
//# sourceMappingURL=LmSwitchRhf.js.map
