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
var LmResetButtonRhf_exports = {};
__export(LmResetButtonRhf_exports, {
  LmResetButtonRhf: () => LmResetButtonRhf
});
module.exports = __toCommonJS(LmResetButtonRhf_exports);
var import_react_hook_form = require("react-hook-form");
var import_core = require("@tamagui-extras/core");
function LmResetButtonRhf(props) {
  const { reset } = (0, import_react_hook_form.useFormContext)();
  return <import_core.LmButton
    {...props}
    onPress={(e) => {
      reset();
      if (typeof props.onPress === "function") {
        props.onPress(e);
      }
    }}
  />;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LmResetButtonRhf
});
//# sourceMappingURL=LmResetButtonRhf.js.map
