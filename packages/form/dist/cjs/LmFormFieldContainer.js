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
var LmFormFieldContainer_exports = {};
__export(LmFormFieldContainer_exports, {
  LmFormFieldContainer: () => LmFormFieldContainer
});
module.exports = __toCommonJS(LmFormFieldContainer_exports);
var import_tamagui = require("tamagui"), import_jsx_runtime = require("react/jsx-runtime");
const StackContainer = (0, import_tamagui.styled)(import_tamagui.ThemeableStack, {
  variants: {
    fullWidth: {
      true: {
        width: "100%"
      }
    },
    labelInline: {
      true: {
        flexDirection: "row",
        space: !0,
        alignItems: "center"
      }
    }
  }
});
function LmFormFieldContainer({
  label,
  children,
  helperText,
  id,
  size,
  labelProps,
  required,
  error,
  helperTextProps,
  ...rest
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StackContainer, { space: !!rest.labelInline, ...rest, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_tamagui.Label,
      {
        htmlFor: id,
        size: size || "$3",
        ...labelProps,
        color: error ? "$red10" : void 0,
        width: rest.labelInline ? 150 : void 0,
        justifyContent: rest.labelInline ? "flex-end" : void 0,
        children: [
          label,
          " ",
          required && " *"
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.YStack, { children: [
      children,
      helperText && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_tamagui.Paragraph,
        {
          paddingLeft: "$2",
          marginTop: "$2",
          size,
          ...helperTextProps,
          color: error ? "$red10" : void 0,
          children: helperText
        }
      )
    ] })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LmFormFieldContainer
});
//# sourceMappingURL=LmFormFieldContainer.js.map
