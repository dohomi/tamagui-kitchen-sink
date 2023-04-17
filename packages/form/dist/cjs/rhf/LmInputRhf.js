var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var LmInputRhf_exports = {};
__export(LmInputRhf_exports, {
  LmInputRhf: () => LmInputRhf
});
module.exports = __toCommonJS(LmInputRhf_exports);
var import_react_hook_form = require("react-hook-form");
var import_LmInput = require("../LmInput");
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
  return <import_react_hook_form.Controller
    name={name}
    rules={rules}
    control={control}
    defaultValue={defaultValue}
    render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => <import_LmInput.LmInput
      {...inputProps}
      value={value ?? ""}
      onBlur={onBlur}
      error={!!error}
      onChangeText={onChange}
      helperText={error ? error.message : inputProps.helperText}
    />}
  />;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LmInputRhf
});
//# sourceMappingURL=LmInputRhf.js.map
