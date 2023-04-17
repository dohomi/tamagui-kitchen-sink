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
var LmSwitch_exports = {};
__export(LmSwitch_exports, {
  LmSwitch: () => LmSwitch
});
module.exports = __toCommonJS(LmSwitch_exports);
var import_tamagui = require("tamagui");
var import_react = require("react");
function LmSwitch({ labelLeft, labelRight, space, size = "$2", ...rest }) {
  const id = (0, import_react.useId)();
  return <import_tamagui.XStack alignItems="center" space="$4">
    {labelLeft && <import_tamagui.Label htmlFor={id} fontSize={size}>{labelLeft}</import_tamagui.Label>}
    <import_tamagui.Switch id={id} {...rest} size={size}><import_tamagui.Switch.Thumb animation="bouncy" /></import_tamagui.Switch>
    {labelRight && <import_tamagui.Label htmlFor={id} fontSize={size}>{labelRight}</import_tamagui.Label>}
  </import_tamagui.XStack>;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LmSwitch
});
//# sourceMappingURL=LmSwitch.js.map
