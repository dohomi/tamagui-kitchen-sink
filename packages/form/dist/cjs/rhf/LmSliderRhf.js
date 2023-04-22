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
var LmSliderRhf_exports = {};
__export(LmSliderRhf_exports, {
  LmSliderRhf: () => LmSliderRhf
});
module.exports = __toCommonJS(LmSliderRhf_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_LmSlider = require("../LmSlider");
var import_react_hook_form = require("react-hook-form");
function LmSliderRhf({
  name,
  control,
  rules = {},
  defaultValue,
  ...sliderProps
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react_hook_form.Controller,
    {
      name,
      control,
      rules,
      render: ({ field: { value, onChange }, fieldState, formState }) => {
        const preparedValue = Array.isArray(value) ? value : [value];
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_LmSlider.LmSlider,
          {
            ...sliderProps,
            defaultValue: preparedValue,
            onValueChange: (v) => {
              if (v.length === 1) {
                onChange(v[0]);
              } else {
                onChange(v);
              }
              if (typeof sliderProps.onValueChange === "function") {
                sliderProps.onValueChange(v);
              }
            }
          }
        );
      }
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LmSliderRhf
});
//# sourceMappingURL=LmSliderRhf.js.map
