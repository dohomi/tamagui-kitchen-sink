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
var LmFormRhfProvider_exports = {};
__export(LmFormRhfProvider_exports, {
  LmFormRhfProvider: () => LmFormRhfProvider
});
module.exports = __toCommonJS(LmFormRhfProvider_exports);
var import_react_hook_form = require("react-hook-form"), import_jsx_runtime = require("react/jsx-runtime");
function LmFormRhfProvider({
  children,
  forceFormProvider,
  ...formProps
}) {
  const methods = (0, import_react_hook_form.useForm)({
    ...formProps
  });
  return typeof children == "function" ? forceFormProvider ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_hook_form.FormProvider, { ...methods, children: children(methods) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: children(methods) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_hook_form.FormProvider, { ...methods, children });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LmFormRhfProvider
});
//# sourceMappingURL=LmFormRhfProvider.js.map
