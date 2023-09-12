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
var LmCheckboxRhf_exports = {};
__export(LmCheckboxRhf_exports, {
  LmCheckboxRhf: () => LmCheckboxRhf
});
module.exports = __toCommonJS(LmCheckboxRhf_exports);
var import_react_hook_form = require("react-hook-form"), import_LmCheckbox = require("../LmCheckbox"), import_jsx_runtime = require("react/jsx-runtime");
function LmCheckboxRhf({
  name,
  rules = {},
  control,
  defaultValue,
  ...inputProps
}) {
  return inputProps.required && (rules.required = "This field is required"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react_hook_form.Controller,
    {
      name,
      rules,
      control,
      defaultValue,
      render: ({ field: { onChange, value }, fieldState: { error } }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_LmCheckbox.LmCheckbox,
        {
          ...inputProps,
          value: value ?? !1,
          error: !!error,
          onChange,
          helperText: error ? error.message : inputProps.helperText
        }
      )
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LmCheckboxRhf
});
//# sourceMappingURL=LmCheckboxRhf.js.map
