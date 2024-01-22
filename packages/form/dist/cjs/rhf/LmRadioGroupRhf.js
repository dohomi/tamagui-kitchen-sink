var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
var LmRadioGroupRhf_exports = {};
__export(LmRadioGroupRhf_exports, {
  LmRadioGroupRhf: () => LmRadioGroupRhf
});
module.exports = __toCommonJS(LmRadioGroupRhf_exports);
var import_LmRadioGroup = require("../LmRadioGroup"), import_react_hook_form = require("react-hook-form"), import_jsx_runtime = require("react/jsx-runtime");
function LmRadioGroupRhf({
  name,
  control,
  rules = {},
  defaultValue,
  ...rest
}) {
  return rest.required && (rules.required = "This field is required"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react_hook_form.Controller,
    {
      name,
      control,
      rules,
      defaultValue,
      render: ({ field: { onChange, value }, fieldState: { error } }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_LmRadioGroup.LmRadioGroup,
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
//# sourceMappingURL=LmRadioGroupRhf.js.map
