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
var LmAutocomplete_exports = {};
__export(LmAutocomplete_exports, {
  LmAutocomplete: () => LmAutocomplete
});
module.exports = __toCommonJS(LmAutocomplete_exports);
var import_tamagui = require("tamagui"), import_react = require("react"), import_LmFormFieldContainer = require("./LmFormFieldContainer"), import_core = require("@tamagui-extras/core"), import_react_native = require("react-native-web"), import_jsx_runtime = require("react/jsx-runtime");
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
  multiple = !1,
  popoverProps,
  containerProps,
  size,
  ...rest
}) {
  const id = (0, import_react.useId)(), [opts, setOpts] = (0, import_react.useState)(options), { width } = (0, import_react_native.useWindowDimensions)(), popoverState = (0, import_core.usePopoverState)(), [popoverWidth, setPopoverWidth] = (0, import_react.useState)(0), inputRef = (0, import_react.useRef)(null), searchInputRef = (0, import_react.useRef)(null), [selection, setSelection] = (0, import_react.useState)(
    value ?? (multiple ? [] : null)
  ), isSelected = (item) => Array.isArray(selection) ? !!selection?.some((i) => i.value === item.value) : selection?.value === item.value, onChangeSelection = (item) => {
    let newVal = null;
    multiple ? newVal = isSelected(item) ? selection?.filter((i) => i.value !== item.value) ?? [] : [...selection ?? [], item] : newVal = isSelected(item) ? null : item, setSelection(newVal), typeof onChange == "function" && onChange(newVal);
  };
  (0, import_react.useEffect)(() => {
    const elWidth = inputRef.current?.offsetWidth;
    elWidth && setPopoverWidth(elWidth);
  }, [width]), (0, import_react.useEffect)(() => {
    popoverState.open && searchInputRef.current?.focus?.();
  }, [popoverState.open]);
  const inputValue = Array.isArray(selection) ? selection.map((option) => option?.label).join(", ") : selection?.label || "";
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
      size,
      ...containerProps,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.XGroup, { ref: inputRef, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.XGroup.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_tamagui.Input,
          {
            flex: 1,
            value: inputValue,
            size,
            theme,
            textOverflow: "ellipsis",
            onFocus: (el) => {
              popoverState.onOpenChange(!popoverState.open), el.target.blur?.();
            }
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.XGroup.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_core.LmPopover,
          {
            isBouncy: !0,
            ...popoverProps,
            ...popoverState,
            offset: {
              // alignmentAxis: 20,
              mainAxis: 15,
              crossAxis: -30
            },
            contentProps: {
              minWidth: popoverWidth || void 0,
              maxWidth: "100%",
              ...popoverProps?.contentProps
            },
            trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_tamagui.Button,
              {
                size,
                icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.CaretDownRegular, {}),
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0
              }
            ),
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              LmAutocompleteInputContent,
              {
                ref: searchInputRef,
                theme,
                options: opts,
                isSelected,
                onChangeSelection,
                onAddNew: (newVal) => {
                  if (newVal) {
                    const newItem = typeof allowNewHook == "function" ? allowNewHook(newVal) : {
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
const LmAutocompleteInputContent = (0, import_react.forwardRef)(function({
  disableSearch,
  theme,
  placeholderSearch,
  options,
  allowNew,
  onAddNew,
  onChangeSelection,
  isSelected
}, ref) {
  const [searchTerm, setSearchTerm] = (0, import_react.useState)(), deferredTerm = (0, import_react.useDeferredValue)(searchTerm), filteredOptions = deferredTerm?.length ? options.filter((i) => i.label.toLowerCase().includes(deferredTerm)) : options, showSearch = !disableSearch || allowNew;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: import_react_native.Platform.OS === "web" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    showSearch && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.XStack, { padding: "$4", width: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_tamagui.Input,
      {
        theme,
        placeholder: placeholderSearch,
        width: "100%",
        ref,
        onChangeText: (text) => {
          setSearchTerm(text.toLowerCase());
        }
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_tamagui.ScrollView,
      {
        keyboardShouldPersistTaps: "always",
        maxHeight: 300,
        width: "100%",
        marginTop: showSearch ? void 0 : "$4",
        marginBottom: "$4",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            LmAutocompleteList,
            {
              options: filteredOptions,
              onChangeSelection,
              isSelected
            }
          ),
          allowNew && !filteredOptions?.length && deferredTerm && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.XStack, { justifyContent: "flex-start", marginBottom: "$3", marginLeft: "$3", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_tamagui.Button,
            {
              onPress: () => onAddNew(deferredTerm),
              chromeless: !0,
              icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.ListPlusRegular, {}),
              children: deferredTerm
            }
          ) })
        ]
      }
    )
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.YStack, { children: [
    showSearch && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.XStack, { padding: "$4", width: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_tamagui.Input,
      {
        theme,
        ref,
        placeholder: placeholderSearch,
        width: "100%",
        onChangeText: (text) => {
          setSearchTerm(text.toLowerCase());
        }
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.ScrollView, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      LmAutocompleteList,
      {
        options: filteredOptions,
        onChangeSelection,
        isSelected
      }
    ) }),
    allowNew && !filteredOptions?.length && deferredTerm && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.XStack, { justifyContent: "flex-start", marginBottom: "$3", marginLeft: "$3", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Button, { onPress: () => onAddNew(deferredTerm), chromeless: !0, icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.ListPlusRegular, {}), children: deferredTerm }) })
  ] }) });
});
function LmAutocompleteList({ options, isSelected, onChangeSelection }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.YGroup, { borderRadius: 0, children: options.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.YGroup.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_tamagui.ListItem,
    {
      hoverTheme: !0,
      pressTheme: !0,
      focusTheme: !0,
      cursor: "pointer",
      icon: isSelected(item) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.CheckSquareRegular, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.SquareRegular, {}),
      onPress: () => onChangeSelection(item),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.ListItemTitle, { cursor: "pointer", children: item.label })
    }
  ) }, item.value)) });
}
//# sourceMappingURL=LmAutocomplete.js.map
