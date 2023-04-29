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
var LmAutocomplete_exports = {};
__export(LmAutocomplete_exports, {
  LmAutocomplete: () => LmAutocomplete
});
module.exports = __toCommonJS(LmAutocomplete_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_tamagui = require("tamagui");
var import_react = require("react");
var import_LmFormFieldContainer = require("./LmFormFieldContainer");
var import_core = require("@tamagui-extras/core");
var import_react_native = require("react-native");
function LmAutocomplete({
  options,
  labelInline,
  labelProps,
  helperText,
  helperTextProps,
  required,
  label,
  value,
  onChange,
  error,
  theme,
  allowNewHook,
  multiple = false,
  popoverProps,
  ...rest
}) {
  const id = (0, import_react.useId)();
  const [opts, setOpts] = (0, import_react.useState)(options);
  const { width } = (0, import_react_native.useWindowDimensions)();
  const [popoverWidth, setPopoverWidth] = (0, import_react.useState)(0);
  const inputRef = (0, import_react.useRef)(null);
  const [selection, setSelection] = (0, import_react.useState)(
    value ?? (multiple ? [] : null)
  );
  const isSelected = (item) => Array.isArray(selection) ? !!(selection == null ? void 0 : selection.some((i) => i.value === item.value)) : (selection == null ? void 0 : selection.value) === item.value;
  const onChangeSelection = (item) => {
    let newVal = null;
    if (multiple) {
      const has = isSelected(item);
      newVal = has ? (selection == null ? void 0 : selection.filter((i) => i.value !== item.value)) ?? [] : [...selection ?? [], item];
    } else {
      newVal = isSelected(item) ? null : item;
    }
    setSelection(newVal);
    if (typeof onChange === "function") {
      onChange(newVal);
    }
  };
  (0, import_react.useEffect)(() => {
    var _a;
    const elWidth = (_a = inputRef.current) == null ? void 0 : _a.offsetWidth;
    if (elWidth) {
      setPopoverWidth(elWidth);
    }
  }, [width]);
  const inputValue = Array.isArray(selection) ? selection.map((option) => option == null ? void 0 : option.label).join(", ") : (selection == null ? void 0 : selection.label) || "";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_LmFormFieldContainer.LmFormFieldContainer,
    {
      id,
      error,
      required,
      labelProps,
      label,
      labelInline,
      helperText,
      helperTextProps,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.XGroup, { ref: inputRef, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.XGroup.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Input, { flex: 1, value: inputValue, theme, textOverflow: "ellipsis" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.XGroup.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_core.LmPopover,
          {
            isBouncy: true,
            ...popoverProps,
            contentProps: {
              minWidth: popoverWidth ? popoverWidth : void 0,
              maxWidth: "100%",
              ...popoverProps == null ? void 0 : popoverProps.contentProps
            },
            trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_tamagui.Button,
              {
                icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.CaretDownRegular, {}),
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0
              }
            ),
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              LmAutocompleteInputContent,
              {
                theme,
                options: opts,
                isSelected,
                onChangeSelection,
                onAddNew: (newVal) => {
                  if (newVal) {
                    const newItem = typeof allowNewHook === "function" ? allowNewHook(newVal) : {
                      value: newVal,
                      label: newVal
                    };
                    setOpts((oldVal) => [newItem, ...oldVal]);
                  }
                },
                ...rest
              }
            )
          }
        ) })
      ] })
    }
  );
}
function LmAutocompleteInputContent({
  disableSearch,
  theme,
  placeholderSearch,
  options,
  allowNew,
  onAddNew,
  onChangeSelection,
  isSelected
}) {
  const [searchTerm, setSearchTerm] = (0, import_react.useState)();
  const deferredTerm = (0, import_react.useDeferredValue)(searchTerm);
  const filteredOptions = (deferredTerm == null ? void 0 : deferredTerm.length) ? options.filter((i) => i.label.toLowerCase().includes(deferredTerm)) : options;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: import_react_native.Platform.OS === "web" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    (!disableSearch || allowNew) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.XStack, { padding: "$4", width: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_tamagui.Input,
      {
        theme,
        placeholder: placeholderSearch,
        width: "100%",
        onChangeText: (text) => {
          setSearchTerm(text.toLowerCase());
        }
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_tamagui.Popover.ScrollView,
      {
        keyboardShouldPersistTaps: "always",
        style: { maxHeight: 300, width: "100%" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            LmAutocompleteList,
            {
              options: filteredOptions,
              onChangeSelection,
              isSelected
            }
          ),
          allowNew && !(filteredOptions == null ? void 0 : filteredOptions.length) && deferredTerm && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.XStack, { justifyContent: "flex-start", marginBottom: "$3", marginLeft: "$3", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_tamagui.Button,
            {
              onPress: () => onAddNew(deferredTerm),
              chromeless: true,
              icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.ListPlusRegular, {}),
              children: deferredTerm
            }
          ) })
        ]
      }
    )
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    (!disableSearch || allowNew) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.XStack, { padding: "$4", width: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_tamagui.Input,
      {
        theme,
        placeholder: placeholderSearch,
        width: "100%",
        onChangeText: (text) => {
          setSearchTerm(text.toLowerCase());
        }
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Sheet.ScrollView, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      LmAutocompleteList,
      {
        options: filteredOptions,
        onChangeSelection,
        isSelected
      }
    ) }),
    allowNew && !(filteredOptions == null ? void 0 : filteredOptions.length) && deferredTerm && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.XStack, { justifyContent: "flex-start", marginBottom: "$3", marginLeft: "$3", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Button, { onPress: () => onAddNew(deferredTerm), chromeless: true, icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.ListPlusRegular, {}), children: deferredTerm }) })
  ] }) });
}
function LmAutocompleteList({ options, isSelected, onChangeSelection }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: options.map((item, i) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_tamagui.ListItem,
      {
        hoverTheme: true,
        icon: isSelected(item) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.CheckSquareRegular, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.SquareRegular, {}),
        title: item.label,
        onPress: () => onChangeSelection(item)
      },
      item.value
    );
  }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LmAutocomplete
});
//# sourceMappingURL=LmAutocomplete.js.map
