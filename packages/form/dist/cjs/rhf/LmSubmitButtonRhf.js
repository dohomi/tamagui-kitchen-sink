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
var LmSubmitButtonRhf_exports = {};
__export(LmSubmitButtonRhf_exports, {
  LmSubmitButtonRhf: () => LmSubmitButtonRhf
});
module.exports = __toCommonJS(LmSubmitButtonRhf_exports);
var import_core = require("@tamagui-extras/core");
var import_react_hook_form = require("react-hook-form");
function LmSubmitButtonRhf({
  onSubmit,
  ...props
}) {
  const formContext = (0, import_react_hook_form.useFormContext)();
  const { handleSubmit, formState } = formContext;
  return <import_core.LmButton {...props} onPress={handleSubmit((data) => {
    onSubmit(data, formContext);
  })} loading={formState.isValidating || props.loading} />;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LmSubmitButtonRhf
});
//# sourceMappingURL=LmSubmitButtonRhf.js.map
