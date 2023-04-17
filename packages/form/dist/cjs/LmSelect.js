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
var LmSelect_exports = {};
__export(LmSelect_exports, {
  LmSelect: () => LmSelect
});
module.exports = __toCommonJS(LmSelect_exports);
var import_tamagui = require("tamagui");
var import_linear_gradient = require("@tamagui/linear-gradient");
var import_core = require("@tamagui-extras/core");
var import_tamagui_phosphor_icons = require("tamagui-phosphor-icons");
var import_react = require("react");
var import_LmFormFieldContainer = require("./LmFormFieldContainer");
function LmSelect({
  value,
  colorVariant,
  themeName,
  options = [],
  width = 180,
  placeholder = "",
  dropDownLabel,
  required,
  error,
  helperText,
  helperTextProps,
  label,
  labelInline,
  labelProps,
  fullWidth,
  defaultValue,
  onValueChange,
  ...rest
}) {
  const [selectVal, setSelectVal] = (0, import_react.useState)(value ?? defaultValue ?? "");
  const id = (0, import_react.useId)();
  rest.size = rest.size || "$3";
  return <import_LmFormFieldContainer.LmFormFieldContainer
    id={id}
    theme={colorVariant ? import_core.colormap[colorVariant] : themeName || void 0}
    error={error}
    required={required}
    labelProps={labelProps}
    label={label}
    size={rest.size}
    fullWidth={fullWidth}
    labelInline={labelInline}
    helperText={helperText}
    helperTextProps={helperTextProps}
  ><import_tamagui.Select
    id={id}
    {...rest}
    value={selectVal}
    onValueChange={(val) => {
      setSelectVal(val);
      if (typeof onValueChange === "function") {
        onValueChange(val);
      }
    }}
  >
    <import_tamagui.Select.Trigger
      width={fullWidth ? "100%" : width}
      iconAfter={<import_tamagui_phosphor_icons.CaretDown />}
      paddingVertical={0}
      minHeight={rest.size}
    ><import_tamagui.Select.Value placeholder={placeholder} paddingVertical={0} /></import_tamagui.Select.Trigger>
    {
      /*@ts-ignore*/
    }
    <import_tamagui.Select.Adapt when="sm"><import_tamagui.Select.Sheet modal dismissOnSnapToBottom>
      <import_tamagui.Select.Sheet.Frame><import_tamagui.Select.Sheet.ScrollView><import_tamagui.Select.Adapt.Contents /></import_tamagui.Select.Sheet.ScrollView></import_tamagui.Select.Sheet.Frame>
      <import_tamagui.Select.Sheet.Overlay />
    </import_tamagui.Select.Sheet></import_tamagui.Select.Adapt>
    <import_tamagui.Select.Content zIndex={2e5}>
      <import_tamagui.Select.ScrollUpButton
        alignItems="center"
        justifyContent="center"
        position="relative"
        width="100%"
        height="$3"
      >
        <import_tamagui.YStack zIndex={10}><import_tamagui_phosphor_icons.CaretUp size={20} /></import_tamagui.YStack>
        <import_linear_gradient.LinearGradient
          start={[0, 0]}
          end={[0, 1]}
          fullscreen
          colors={["$background", "$backgroundTransparent"]}
          borderRadius="$4"
        />
      </import_tamagui.Select.ScrollUpButton>
      <import_tamagui.Select.Viewport><import_tamagui.Select.Group>
        {dropDownLabel && <import_tamagui.Select.Label>{dropDownLabel}</import_tamagui.Select.Label>}
        {options.map((item, i) => <import_tamagui.Select.Item index={i} key={item.value} value={`${item.value}`}>
          <import_tamagui.Select.ItemText>{item.label}</import_tamagui.Select.ItemText>
          <import_tamagui.Select.ItemIndicator marginLeft="auto"><import_tamagui_phosphor_icons.Check size={16} /></import_tamagui.Select.ItemIndicator>
        </import_tamagui.Select.Item>)}
      </import_tamagui.Select.Group></import_tamagui.Select.Viewport>
      <import_tamagui.Select.ScrollDownButton
        alignItems="center"
        justifyContent="center"
        position="relative"
        width="100%"
        height="$3"
      >
        <import_tamagui.YStack zIndex={10}><import_tamagui_phosphor_icons.CaretDown size={20} /></import_tamagui.YStack>
        <import_linear_gradient.LinearGradient
          start={[0, 0]}
          end={[0, 1]}
          fullscreen
          colors={["$backgroundTransparent", "$background"]}
          borderRadius="$4"
        />
      </import_tamagui.Select.ScrollDownButton>
    </import_tamagui.Select.Content>
  </import_tamagui.Select></import_LmFormFieldContainer.LmFormFieldContainer>;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LmSelect
});
//# sourceMappingURL=LmSelect.js.map
