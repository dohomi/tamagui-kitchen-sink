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
  return <import_LmFormFieldContainer.LmFormFieldContainer
    id={id}
    error={error}
    required={required}
    labelProps={labelProps}
    label={label}
    fullWidth={fullWidth}
    size={rest.size}
    labelInline={labelInline}
    helperText={helperText}
    helperTextProps={helperTextProps}
    {...containerProps}
  >{multiline ? <import_tamagui.TextArea {...styleProps} /> : secureTextEntry ? <import_tamagui.Stack position="relative" width={fullWidth ? "100%" : "fit-content"}>
    <import_tamagui.Input {...styleProps} secureTextEntry={!show} autoCapitalize="none" />
    <import_react_native.Pressable
      style={{
        position: "absolute",
        bottom: 0,
        top: 0,
        marginTop: "auto",
        marginBottom: "auto",
        height: "20px",
        right: "10px"
      }}
      onPress={() => {
        setShow((state) => !state);
      }}
    >{show ? <import_tamagui_phosphor_icons.EyeSlash {...passwordIconProps} /> : <import_tamagui_phosphor_icons.Eye {...passwordIconProps} />}</import_react_native.Pressable>
  </import_tamagui.Stack> : <import_tamagui.Input {...styleProps} autoCapitalize="none" />}</import_LmFormFieldContainer.LmFormFieldContainer>;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LmInput
});
//# sourceMappingURL=LmInput.js.map
