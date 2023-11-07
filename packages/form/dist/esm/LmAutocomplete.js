import {
  Button,
  Input,
  ListItem,
  ScrollView,
  XGroup,
  XStack,
  YGroup,
  YStack
} from "tamagui";
import { useDeferredValue, useEffect, useId, useRef, useState } from "react";
import { LmFormFieldContainer } from "./LmFormFieldContainer";
import {
  CaretDownRegular,
  CheckSquareRegular,
  ListPlusRegular,
  LmPopover,
  SquareRegular
} from "@tamagui-extras/core";
import { Platform, useWindowDimensions } from "react-native-web";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
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
  ...rest
}) {
  const id = useId(), [opts, setOpts] = useState(options), { width } = useWindowDimensions(), [popoverWidth, setPopoverWidth] = useState(0), inputRef = useRef(null), [selection, setSelection] = useState(
    value ?? (multiple ? [] : null)
  ), isSelected = (item) => Array.isArray(selection) ? !!selection?.some((i) => i.value === item.value) : selection?.value === item.value, onChangeSelection = (item) => {
    let newVal = null;
    multiple ? newVal = isSelected(item) ? selection?.filter((i) => i.value !== item.value) ?? [] : [...selection ?? [], item] : newVal = isSelected(item) ? null : item, setSelection(newVal), typeof onChange == "function" && onChange(newVal);
  };
  useEffect(() => {
    const elWidth = inputRef.current?.offsetWidth;
    elWidth && setPopoverWidth(elWidth);
  }, [width]);
  const inputValue = Array.isArray(selection) ? selection.map((option) => option?.label).join(", ") : selection?.label || "";
  return /* @__PURE__ */ jsx(
    LmFormFieldContainer,
    {
      id,
      error,
      required,
      labelProps,
      label,
      labelInline,
      helperText,
      helperTextProps,
      ...containerProps,
      children: /* @__PURE__ */ jsxs(XGroup, { ref: inputRef, children: [
        /* @__PURE__ */ jsx(XGroup.Item, { children: /* @__PURE__ */ jsx(Input, { flex: 1, value: inputValue, theme, textOverflow: "ellipsis" }) }),
        /* @__PURE__ */ jsx(XGroup.Item, { children: /* @__PURE__ */ jsx(
          LmPopover,
          {
            isBouncy: !0,
            ...popoverProps,
            contentProps: {
              minWidth: popoverWidth || void 0,
              maxWidth: "100%",
              ...popoverProps?.contentProps
            },
            trigger: /* @__PURE__ */ jsx(
              Button,
              {
                icon: /* @__PURE__ */ jsx(CaretDownRegular, {}),
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0
              }
            ),
            children: /* @__PURE__ */ jsx(
              LmAutocompleteInputContent,
              {
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
  const [searchTerm, setSearchTerm] = useState(), deferredTerm = useDeferredValue(searchTerm), filteredOptions = deferredTerm?.length ? options.filter((i) => i.label.toLowerCase().includes(deferredTerm)) : options, showSearch = !disableSearch || allowNew;
  return /* @__PURE__ */ jsx(Fragment, { children: Platform.OS === "web" ? /* @__PURE__ */ jsxs(Fragment, { children: [
    showSearch && /* @__PURE__ */ jsx(XStack, { padding: "$4", width: "100%", children: /* @__PURE__ */ jsx(
      Input,
      {
        theme,
        placeholder: placeholderSearch,
        width: "100%",
        onChangeText: (text) => {
          setSearchTerm(text.toLowerCase());
        }
      }
    ) }),
    /* @__PURE__ */ jsxs(
      ScrollView,
      {
        keyboardShouldPersistTaps: "always",
        maxHeight: 300,
        width: "100%",
        marginTop: showSearch ? void 0 : "$4",
        marginBottom: "$4",
        children: [
          /* @__PURE__ */ jsx(
            LmAutocompleteList,
            {
              options: filteredOptions,
              onChangeSelection,
              isSelected
            }
          ),
          allowNew && !filteredOptions?.length && deferredTerm && /* @__PURE__ */ jsx(XStack, { justifyContent: "flex-start", marginBottom: "$3", marginLeft: "$3", children: /* @__PURE__ */ jsx(
            Button,
            {
              onPress: () => onAddNew(deferredTerm),
              chromeless: !0,
              icon: /* @__PURE__ */ jsx(ListPlusRegular, {}),
              children: deferredTerm
            }
          ) })
        ]
      }
    )
  ] }) : /* @__PURE__ */ jsxs(YStack, { children: [
    showSearch && /* @__PURE__ */ jsx(XStack, { padding: "$4", width: "100%", children: /* @__PURE__ */ jsx(
      Input,
      {
        theme,
        placeholder: placeholderSearch,
        width: "100%",
        onChangeText: (text) => {
          setSearchTerm(text.toLowerCase());
        }
      }
    ) }),
    /* @__PURE__ */ jsx(ScrollView, { children: /* @__PURE__ */ jsx(
      LmAutocompleteList,
      {
        options: filteredOptions,
        onChangeSelection,
        isSelected
      }
    ) }),
    allowNew && !filteredOptions?.length && deferredTerm && /* @__PURE__ */ jsx(XStack, { justifyContent: "flex-start", marginBottom: "$3", marginLeft: "$3", children: /* @__PURE__ */ jsx(Button, { onPress: () => onAddNew(deferredTerm), chromeless: !0, icon: /* @__PURE__ */ jsx(ListPlusRegular, {}), children: deferredTerm }) })
  ] }) });
}
function LmAutocompleteList({ options, isSelected, onChangeSelection }) {
  return /* @__PURE__ */ jsx(YGroup, { borderRadius: 0, children: options.map((item, i) => /* @__PURE__ */ jsx(YGroup.Item, { children: /* @__PURE__ */ jsx(
    ListItem,
    {
      hoverTheme: !0,
      icon: isSelected(item) ? /* @__PURE__ */ jsx(CheckSquareRegular, {}) : /* @__PURE__ */ jsx(SquareRegular, {}),
      title: item.label,
      onPress: () => onChangeSelection(item)
    }
  ) }, item.value)) });
}
export {
  LmAutocomplete
};
//# sourceMappingURL=LmAutocomplete.js.map
