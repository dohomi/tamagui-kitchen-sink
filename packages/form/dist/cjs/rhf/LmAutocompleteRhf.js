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
var LmAutocompleteRhf_exports = {};
__export(LmAutocompleteRhf_exports, {
  LmAutocompleteRhf: () => LmAutocompleteRhf
});
module.exports = __toCommonJS(LmAutocompleteRhf_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react_hook_form = require("react-hook-form");
var import_LmAutocomplete = require("../LmAutocomplete");
function LmAutocompleteRhf({
  name,
  rules,
  control,
  defaultValue,
  matchId,
  options,
  multiple,
  ...inputProps
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react_hook_form.Controller,
    {
      name,
      rules,
      control,
      defaultValue,
      render: ({ field: { onChange, value }, fieldState: { error } }) => {
        let currentValue = multiple ? value || [] : value || null;
        if (matchId) {
          currentValue = multiple ? (value || []).map((i) => options.find((j) => (j.value || j) === i)) : options.find((i) => (i.value || i) === value) || null;
        }
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_LmAutocomplete.LmAutocomplete,
          {
            ...inputProps,
            value: currentValue,
            multiple,
            options,
            error: !!error,
            onChange: (v) => {
              let changedVal = v;
              if (matchId) {
                changedVal = Array.isArray(v) ? v.map((i) => (i == null ? void 0 : i.value) || i) : (v == null ? void 0 : v.value) || v;
              }
              onChange(changedVal);
              if (typeof inputProps.onChange === "function") {
                inputProps.onChange(v);
              }
            },
            helperText: error ? error.message : inputProps.helperText
          }
        );
      }
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LmAutocompleteRhf
});
//# sourceMappingURL=LmAutocompleteRhf.js.map
