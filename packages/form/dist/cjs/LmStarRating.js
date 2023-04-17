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
var LmStarRating_exports = {};
__export(LmStarRating_exports, {
  LmStarRating: () => LmStarRating
});
module.exports = __toCommonJS(LmStarRating_exports);
var import_tamagui = require("tamagui");
var import_react = require("react");
var import_LmFormFieldContainer = require("./LmFormFieldContainer");
var import_tamagui_phosphor_icons = require("tamagui-phosphor-icons");
function StarIcon({ filled, size = "$2", ...props }) {
  const iconSize = typeof size === "string" ? (0, import_tamagui.getVariableValue)((0, import_tamagui.getTokens)().size[size] || size) : size;
  return <import_tamagui.Button {...props} size={size} circular unstyled icon={<import_tamagui_phosphor_icons.Star size={iconSize} weight={filled ? "fill" : "regular"} />} />;
}
function LmStarRating({
  count = 5,
  onChange,
  value = null,
  disabled,
  required,
  error,
  helperText,
  helperTextProps,
  label,
  labelInline,
  labelProps,
  ...iconProps
}) {
  const id = (0, import_react.useId)();
  const [rating, setRating] = (0, import_react.useState)(value);
  const arr = Array.from(Array(count).keys());
  return <import_LmFormFieldContainer.LmFormFieldContainer id={id} required={required} error={error} helperText={helperText} helperTextProps={helperTextProps} label={label} labelInline={labelInline} labelProps={labelProps}><import_tamagui.XStack>{arr.map((value2) => {
    const currentRating = value2 + 1;
    return <StarIcon key={currentRating} {...iconProps} filled={currentRating <= (rating || 0)} onPress={() => {
      if (disabled) {
        return;
      }
      let newRating = rating === currentRating ? null : currentRating;
      setRating(newRating);
      if (typeof onChange === "function") {
        onChange(newRating);
      }
    }} />;
  })}</import_tamagui.XStack></import_LmFormFieldContainer.LmFormFieldContainer>;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LmStarRating
});
//# sourceMappingURL=LmStarRating.js.map