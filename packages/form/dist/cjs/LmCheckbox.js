"use strict";
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
var LmCheckbox_exports = {};
__export(LmCheckbox_exports, {
  LmCheckbox: () => LmCheckbox
});
module.exports = __toCommonJS(LmCheckbox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
var import_tamagui = require("tamagui");
var import_tamagui_phosphor_icons = require("tamagui-phosphor-icons");
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
  ...stackProps
}) {
  const id = (0, import_react.useId)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.XStack, { space: true, alignItems: "center", ...stackProps, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_tamagui.Checkbox,
      {
        id,
        theme: error ? "red" : theme,
        size,
        defaultChecked: value,
        onCheckedChange: (checked) => {
          if (typeof onChange === "function") {
            onChange(!!checked);
          }
        },
        borderColor: error ? "$red8" : "$borderColor",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Checkbox.Indicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui_phosphor_icons.Check, {}) })
      }
    ),
    label && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.YStack, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.Label, { size, htmlFor: id, children: [
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
          color: error ? "$red10" : helperTextProps == null ? void 0 : helperTextProps.color,
          children: helperText
        }
      )
    ] })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LmCheckbox
});
//# sourceMappingURL=LmCheckbox.js.map
