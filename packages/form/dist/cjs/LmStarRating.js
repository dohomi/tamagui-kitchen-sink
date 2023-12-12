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
var LmStarRating_exports = {};
__export(LmStarRating_exports, {
  LmStarRating: () => LmStarRating
});
module.exports = __toCommonJS(LmStarRating_exports);
var import_tamagui = require("tamagui"), import_react = require("react"), import_LmFormFieldContainer = require("./LmFormFieldContainer"), import_core = require("@tamagui-extras/core"), import_jsx_runtime = require("react/jsx-runtime");
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
  containerProps,
  iconProps,
  gap,
  Icon = import_core.StarFill,
  size = "$1",
  colorHover = "$yellow7",
  colorActiveHover = "$yellow8",
  colorActive = "$yellow10",
  color = "$gray7",
  ...sizeableStackProps
}) {
  const id = (0, import_react.useId)(), [rating, setRating] = (0, import_react.useState)(value), [hoverRating, setHoverRating] = (0, import_react.useState)(null), arr = Array.from(Array(count).keys());
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_LmFormFieldContainer.LmFormFieldContainer,
    {
      id,
      required,
      error,
      helperText,
      helperTextProps,
      label,
      labelInline,
      labelProps,
      ...containerProps,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.XStack, { gap, children: arr.map((value2) => {
        const currentRating = value2 + 1, filled = currentRating <= (rating || 0), hovered = currentRating <= (hoverRating || 0);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_tamagui.SizableStack,
          {
            ...sizeableStackProps,
            size,
            circular: !0,
            onHoverIn: () => {
              disabled || setHoverRating(currentRating);
            },
            onHoverOut: () => {
              disabled || setHoverRating(null);
            },
            onPress: () => {
              if (disabled)
                return;
              const newRating = rating === currentRating ? null : currentRating;
              setRating(newRating), typeof onChange == "function" && onChange(newRating);
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...iconProps, size, color: filled ? hovered ? colorActiveHover : colorActive : hovered ? colorHover : color })
          }
        );
      }) })
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LmStarRating
});
//# sourceMappingURL=LmStarRating.js.map
