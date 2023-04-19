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
var LmInput_exports = {};
__export(LmInput_exports, {
  LmInput: () => LmInput
});
module.exports = __toCommonJS(LmInput_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_tamagui = require("tamagui");
var import_react = require("react");
var import_LmFormFieldContainer = require("./LmFormFieldContainer");
var import_tamagui_phosphor_icons = require("tamagui-phosphor-icons");
var import_react_native = require("react-native");
function LmInput({
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
}) {
  const genId = (0, import_react.useId)();
  const [show, setShow] = (0, import_react.useState)(false);
  const id = rest.id || genId;
  const styleProps = {
    ...rest
  };
  if (error) {
    styleProps.theme = "red";
    styleProps.borderColor = error ? "$red8" : void 0;
  }
  if (fullWidth) {
    styleProps.minWidth = "100%";
  }
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
      children: multiline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.TextArea, { ...styleProps }) : secureTextEntry ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.Stack, { position: "relative", width: fullWidth ? "100%" : styleProps == null ? void 0 : styleProps.width, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Input, { ...styleProps, secureTextEntry: !show, autoCapitalize: "none" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_react_native.Pressable,
          {
            style: {
              position: "absolute",
              top: "50%",
              transform: [{ translateY: -0.5 * 20 }],
              height: 20,
              right: 15
            },
            onPress: () => {
              setShow((state) => !state);
            },
            children: show ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui_phosphor_icons.EyeSlash, { ...passwordIconProps }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui_phosphor_icons.Eye, { ...passwordIconProps })
          }
        )
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Input, { ...styleProps, autoCapitalize: "none" })
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LmInput
});
//# sourceMappingURL=LmInput.js.map
