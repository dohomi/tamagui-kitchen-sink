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
var LmSelect_exports = {};
__export(LmSelect_exports, {
  LmSelect: () => LmSelect
});
module.exports = __toCommonJS(LmSelect_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_tamagui = require("tamagui");
var import_linear_gradient = require("@tamagui/linear-gradient");
var import_core = require("@tamagui-extras/core");
var import_tamagui_phosphor_icons = require("tamagui-phosphor-icons");
var import_react = require("react");
var import_LmFormFieldContainer = require("./LmFormFieldContainer");
function LmSelect({
  value,
  colorVariant,
  themeName,
  options = [],
  width = 180,
  placeholder = "",
  dropDownLabel,
  required,
  error,
  helperText,
  helperTextProps,
  label,
  labelInline,
  labelProps,
  fullWidth,
  defaultValue,
  onValueChange,
  ...rest
}) {
  const [selectVal, setSelectVal] = (0, import_react.useState)(value ?? defaultValue ?? "");
  const id = (0, import_react.useId)();
  rest.size = rest.size || "$3";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_LmFormFieldContainer.LmFormFieldContainer,
    {
      id,
      theme: colorVariant ? import_core.colormap[colorVariant] : themeName || void 0,
      error,
      required,
      labelProps,
      label,
      size: rest.size,
      fullWidth,
      labelInline,
      helperText,
      helperTextProps,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        import_tamagui.Select,
        {
          id,
          ...rest,
          value: selectVal,
          onValueChange: (val) => {
            setSelectVal(val);
            if (typeof onValueChange === "function") {
              onValueChange(val);
            }
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_tamagui.Select.Trigger,
              {
                width: fullWidth ? "100%" : width,
                iconAfter: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui_phosphor_icons.CaretDown, {}),
                paddingVertical: 0,
                minHeight: rest.size,
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Select.Value, { placeholder, paddingVertical: 0 })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Select.Adapt, { when: "sm", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.Select.Sheet, { modal: true, dismissOnSnapToBottom: true, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Select.Sheet.Frame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Select.Sheet.ScrollView, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Select.Adapt.Contents, {}) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Select.Sheet.Overlay, {})
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.Select.Content, { zIndex: 2e5, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                import_tamagui.Select.ScrollUpButton,
                {
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  width: "100%",
                  height: "$3",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.YStack, { zIndex: 10, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui_phosphor_icons.CaretUp, { size: 20 }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      import_linear_gradient.LinearGradient,
                      {
                        start: [0, 0],
                        end: [0, 1],
                        fullscreen: true,
                        colors: ["$background", "$backgroundTransparent"],
                        borderRadius: "$4"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Select.Viewport, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.Select.Group, { children: [
                dropDownLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Select.Label, { children: dropDownLabel }),
                options.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.Select.Item, { index: i, value: `${item.value}`, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Select.ItemText, { children: item.label }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Select.ItemIndicator, { marginLeft: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui_phosphor_icons.Check, { size: 16 }) })
                ] }, item.value))
              ] }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                import_tamagui.Select.ScrollDownButton,
                {
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  width: "100%",
                  height: "$3",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.YStack, { zIndex: 10, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui_phosphor_icons.CaretDown, { size: 20 }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      import_linear_gradient.LinearGradient,
                      {
                        start: [0, 0],
                        end: [0, 1],
                        fullscreen: true,
                        colors: ["$backgroundTransparent", "$background"],
                        borderRadius: "$4"
                      }
                    )
                  ]
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LmSelect
});
//# sourceMappingURL=LmSelect.js.map
