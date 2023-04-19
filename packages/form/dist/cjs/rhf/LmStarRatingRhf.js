"use strict";
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
var LmStarRatingRhf_exports = {};
__export(LmStarRatingRhf_exports, {
  LmStarRatingRhf: () => LmStarRatingRhf
});
module.exports = __toCommonJS(LmStarRatingRhf_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react_hook_form = require("react-hook-form");
var import_LmStarRating = require("../LmStarRating");
function LmStarRatingRhf({
  name,
  control,
  rules = {},
  defaultValue,
  ...inputProps
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react_hook_form.Controller,
    {
      name,
      rules,
      control,
      defaultValue,
      render: ({ field: { onChange, value } }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_LmStarRating.LmStarRating, { ...inputProps, onChange, value: value ?? null })
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LmStarRatingRhf
});
//# sourceMappingURL=LmStarRatingRhf.js.map
