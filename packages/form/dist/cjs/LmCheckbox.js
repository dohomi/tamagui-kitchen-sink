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
var LmCheckbox_exports = {};
__export(LmCheckbox_exports, {
  LmCheckbox: () => LmCheckbox
});
module.exports = __toCommonJS(LmCheckbox_exports);
var import_react = require("react"), import_tamagui = require("tamagui"), import_core = require("@tamagui-extras/core"), import_jsx_runtime = require("react/jsx-runtime");
function LmCheckbox({
  label,
  onChange,
  error,
  helperText,
  size = "$3",
  value,
  required,
  theme,
  helperTextProps,
  checkboxProps,
  labelProps,
  disabled,
  ...stackProps
}) {
  const id = (0, import_react.useId)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.XStack, { space: !0, alignItems: "center", ...stackProps, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_tamagui.Checkbox,
      {
        id,
        theme: error ? "red" : theme,
        ...checkboxProps,
        disabled,
        defaultChecked: value || checkboxProps?.defaultChecked,
        borderColor: error ? "$red8" : checkboxProps?.borderColor ?? "$borderColor",
        size,
        onCheckedChange: (checked) => {
          typeof onChange == "function" && onChange(checked);
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Checkbox.Indicator, { children: checkboxProps?.checked === "indeterminate" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.MinusRegular, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.CheckRegular, {}) })
      }
    ),
    label && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.YStack, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.Label, { size, htmlFor: id, ...labelProps, disabled, children: [
        required ? "* " : "",
        label
      ] }),
      helperText && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_tamagui.Paragraph,
        {
          paddingLeft: "$2",
          marginTop: 0,
          size,
          ...helperTextProps,
          color: error ? "$red10" : helperTextProps?.color,
          children: helperText
        }
      )
    ] })
  ] });
}
//# sourceMappingURL=LmCheckbox.js.map
