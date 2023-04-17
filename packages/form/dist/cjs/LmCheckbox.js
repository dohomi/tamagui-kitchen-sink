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
  return <import_tamagui.XStack space alignItems="center" {...stackProps}>
    <import_tamagui.Checkbox
      id={id}
      theme={error ? "red" : theme}
      size={size}
      defaultChecked={value}
      onCheckedChange={(checked) => {
        if (typeof onChange === "function") {
          onChange(!!checked);
        }
      }}
      borderColor={error ? "$red8" : "$borderColor"}
    ><import_tamagui.Checkbox.Indicator><import_tamagui_phosphor_icons.Check /></import_tamagui.Checkbox.Indicator></import_tamagui.Checkbox>
    {label && <import_tamagui.YStack>
      <import_tamagui.Label size={size} htmlFor={id}>
        {required ? "* " : ""}
        {label}
      </import_tamagui.Label>
      {helperText && <import_tamagui.Paragraph
        paddingLeft="$2"
        marginTop={0}
        size={size}
        {...helperTextProps}
        color={error ? "$red10" : helperTextProps == null ? void 0 : helperTextProps.color}
      >{helperText}</import_tamagui.Paragraph>}
    </import_tamagui.YStack>}
  </import_tamagui.XStack>;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LmCheckbox
});
//# sourceMappingURL=LmCheckbox.js.map
