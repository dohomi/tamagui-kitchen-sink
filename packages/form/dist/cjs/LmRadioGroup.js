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
var LmRadioGroup_exports = {};
__export(LmRadioGroup_exports, {
  LmRadioGroup: () => LmRadioGroup
});
module.exports = __toCommonJS(LmRadioGroup_exports);
var import_tamagui = require("tamagui"), import_LmFormFieldContainer = require("./LmFormFieldContainer"), import_jsx_runtime = require("react/jsx-runtime");
function LmRadioGroup({
  options,
  required,
  error,
  helperText,
  helperTextProps,
  label,
  labelInline,
  labelProps,
  size = "$3",
  spaceItem = "$2",
  containerProps,
  ...rest
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_LmFormFieldContainer.LmFormFieldContainer,
    {
      error,
      required,
      labelProps,
      label,
      size,
      labelInline,
      helperText,
      helperTextProps,
      ...containerProps,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.RadioGroup, { space: rest.flexDirection === "row" ? "$4" : "$1", required, ...rest, children: options.map((option, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.XStack, { alignItems: "center", space: spaceItem, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_tamagui.RadioGroup.Item,
          {
            value: option.value,
            id: `${rest.name}-${option.value}-${i}`,
            size,
            pressTheme: !0,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.RadioGroup.Indicator, {})
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Label, { size, htmlFor: `${rest.name}-${option.value}-${i}`, cursor: "pointer", children: option.label })
      ] }, `${rest.name}-${option.value}-${i}`)) })
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LmRadioGroup
});
//# sourceMappingURL=LmRadioGroup.js.map
