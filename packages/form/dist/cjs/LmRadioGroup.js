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
var LmRadioGroup_exports = {};
__export(LmRadioGroup_exports, {
  LmRadioGroup: () => LmRadioGroup
});
module.exports = __toCommonJS(LmRadioGroup_exports);
var import_tamagui = require("tamagui");
var import_LmFormFieldContainer = require("./LmFormFieldContainer");
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
  ...rest
}) {
  return <import_LmFormFieldContainer.LmFormFieldContainer error={error} required={required} labelProps={labelProps} label={label} size={size} labelInline={labelInline} helperText={helperText} helperTextProps={helperTextProps}><import_tamagui.RadioGroup space={rest.flexDirection === "row" ? "$4" : "$1"} required={required} {...rest}>{options.map((option, i) => <import_tamagui.XStack key={`${rest.name}-${option.value}-${i}`} alignItems="center" space={spaceItem}>
    <import_tamagui.RadioGroup.Item value={option.value} id={`${rest.name}-${option.value}-${i}`} size={size} pressTheme><import_tamagui.RadioGroup.Indicator /></import_tamagui.RadioGroup.Item>
    <import_tamagui.Label size={size} htmlFor={`${rest.name}-${option.value}-${i}`} cursor="pointer">{option.label}</import_tamagui.Label>
  </import_tamagui.XStack>)}</import_tamagui.RadioGroup></import_LmFormFieldContainer.LmFormFieldContainer>;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LmRadioGroup
});
//# sourceMappingURL=LmRadioGroup.js.map
