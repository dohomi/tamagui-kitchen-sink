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
var LmSubmitButtonRhf_exports = {};
__export(LmSubmitButtonRhf_exports, {
  LmSubmitButtonRhf: () => LmSubmitButtonRhf
});
module.exports = __toCommonJS(LmSubmitButtonRhf_exports);
var import_core = require("@tamagui-extras/core"), import_react_hook_form = require("react-hook-form"), import_jsx_runtime = require("react/jsx-runtime");
function LmSubmitButtonRhf({
  onSubmit,
  ...props
}) {
  const formContext = (0, import_react_hook_form.useFormContext)(), { handleSubmit, formState } = formContext;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_core.LmButton,
    {
      ...props,
      onPress: handleSubmit((data) => {
        onSubmit(data, formContext);
      }),
      loading: formState.isValidating || props.loading
    }
  );
}
//# sourceMappingURL=LmSubmitButtonRhf.js.map
