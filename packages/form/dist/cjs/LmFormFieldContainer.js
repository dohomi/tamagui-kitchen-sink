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
var LmFormFieldContainer_exports = {};
__export(LmFormFieldContainer_exports, {
  LmFormFieldContainer: () => LmFormFieldContainer
});
module.exports = __toCommonJS(LmFormFieldContainer_exports);
var import_tamagui = require("tamagui");
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
        space: true,
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
  return <StackContainer space={!!rest.labelInline} {...rest}>
    {label && <import_tamagui.Label
      htmlFor={id}
      size={size || "$3"}
      {...labelProps}
      color={error ? "$red10" : void 0}
      width={rest.labelInline ? 150 : void 0}
      justifyContent={rest.labelInline ? "flex-end" : void 0}
    >
      {label}
      {" "}
      {required && ` *`}
    </import_tamagui.Label>}
    <import_tamagui.YStack>
      {children}
      {helperText && <import_tamagui.Paragraph
        paddingLeft="$2"
        marginTop="$2"
        size={size}
        {...helperTextProps}
        color={error ? "$red10" : void 0}
      >{helperText}</import_tamagui.Paragraph>}
    </import_tamagui.YStack>
  </StackContainer>;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LmFormFieldContainer
});
//# sourceMappingURL=LmFormFieldContainer.js.map
