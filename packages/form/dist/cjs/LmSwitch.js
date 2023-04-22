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
var import_jsx_runtime = require("react/jsx-runtime");
var import_tamagui = require("tamagui");
var import_react = require("react");
function LmSwitch({ labelLeft, labelRight, space, size = "$2", ...rest }) {
  const id = (0, import_react.useId)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.XStack, { alignItems: "center", space: "$4", children: [
    labelLeft && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Label, { htmlFor: id, fontSize: size, children: labelLeft }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Switch, { id, ...rest, size, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Switch.Thumb, { animation: "bouncy" }) }),
    labelRight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Label, { htmlFor: id, fontSize: size, children: labelRight })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LmSwitch
});
//# sourceMappingURL=LmSwitch.js.map
