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
var LmInput_exports = {};
__export(LmInput_exports, {
  LmInput: () => LmInput
});
module.exports = __toCommonJS(LmInput_exports);
var import_tamagui = require("tamagui"), import_react = require("react"), import_LmFormFieldContainer = require("./LmFormFieldContainer"), import_react_native = require("react-native-web"), import_core = require("@tamagui-extras/core"), import_jsx_runtime = require("react/jsx-runtime");
const LmInput = (0, import_react.forwardRef)(function({
  required,
  error,
  helperText,
  helperTextProps,
  label,
  labelProps,
  labelInline,
  multiline,
  containerProps,
  isPassword,
  passwordIconProps,
  fullWidth,
  ...rest
}, ref) {
  const genId = (0, import_react.useId)(), [show, setShow] = (0, import_react.useState)(!1), id = rest.id || genId, currentInputProps = {
    ...rest
  };
  error && (currentInputProps.theme = "red", currentInputProps.borderColor = error ? "$red8" : void 0), fullWidth && (currentInputProps.minWidth = "100%");
  let secureTextEntry = !!(rest.secureTextEntry || isPassword);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_LmFormFieldContainer.LmFormFieldContainer,
    {
      id,
      error,
      required,
      labelProps,
      label,
      fullWidth,
      size: rest.size,
      labelInline,
      helperText,
      helperTextProps,
      ...containerProps,
      children: multiline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_tamagui.TextArea,
        {
          ...currentInputProps,
          placeholderTextColor: rest.placeholderTextColor,
          ref
        }
      ) : secureTextEntry ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.Stack, { position: "relative", width: fullWidth ? "100%" : currentInputProps?.width, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_tamagui.Input,
          {
            ...currentInputProps,
            ref,
            secureTextEntry: !show,
            autoCapitalize: "none",
            placeholderTextColor: rest.placeholderTextColor
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_react_native.Pressable,
          {
            style: {
              position: "absolute",
              top: "50%",
              transform: [{ translateY: -0.5 * 20 }],
              height: 20,
              ...rest?.direction === "rtl" ? {
                left: 15
              } : {
                right: 15
              }
            },
            onPress: () => {
              setShow((state) => !state);
            },
            children: show ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.EyeSlashRegular, { ...passwordIconProps }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.EyeRegular, { ...passwordIconProps })
          }
        )
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Input, { ...currentInputProps, autoCapitalize: "none", ref })
    }
  );
});
//# sourceMappingURL=LmInput.js.map
