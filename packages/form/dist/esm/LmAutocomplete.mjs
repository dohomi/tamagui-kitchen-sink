import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Button, Input, ListItem, Popover, Sheet, XGroup, XStack } from "tamagui";
import { useDeferredValue, useEffect, useId, useRef, useState } from "react";
import { LmFormFieldContainer } from "./LmFormFieldContainer";
import {
  CaretDownRegular,
  CheckSquareRegular,
  ListPlusRegular,
  LmPopover,
  SquareRegular
} from "@tamagui-extras/core";
import { Platform, useWindowDimensions } from "react-native";
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
  const id = useId();
  const [opts, setOpts] = useState(options);
  const { width } = useWindowDimensions();
  const [popoverWidth, setPopoverWidth] = useState(0);
  const inputRef = useRef(null);
  const [selection, setSelection] = useState(
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
  useEffect(() => {
    var _a;
    const elWidth = (_a = inputRef.current) == null ? void 0 : _a.offsetWidth;
    if (elWidth) {
      setPopoverWidth(elWidth);
    }
  }, [width]);
  const inputValue = Array.isArray(selection) ? selection.map((option) => option == null ? void 0 : option.label).join(", ") : (selection == null ? void 0 : selection.label) || "";
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
      children: /* @__PURE__ */ jsxs(XGroup, { ref: inputRef, children: [
        /* @__PURE__ */ jsx(XGroup.Item, { children: /* @__PURE__ */ jsx(Input, { flex: 1, value: inputValue, theme, textOverflow: "ellipsis" }) }),
        /* @__PURE__ */ jsx(XGroup.Item, { children: /* @__PURE__ */ jsx(
          LmPopover,
          {
            isBouncy: true,
            ...popoverProps,
            contentProps: {
              minWidth: popoverWidth ? popoverWidth : void 0,
              maxWidth: "100%",
              ...popoverProps == null ? void 0 : popoverProps.contentProps
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
  const [searchTerm, setSearchTerm] = useState();
  const deferredTerm = useDeferredValue(searchTerm);
  const filteredOptions = (deferredTerm == null ? void 0 : deferredTerm.length) ? options.filter((i) => i.label.toLowerCase().includes(deferredTerm)) : options;
  return /* @__PURE__ */ jsx(Fragment, { children: Platform.OS === "web" ? /* @__PURE__ */ jsxs(Fragment, { children: [
    (!disableSearch || allowNew) && /* @__PURE__ */ jsx(XStack, { padding: "$4", width: "100%", children: /* @__PURE__ */ jsx(
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
      Popover.ScrollView,
      {
        keyboardShouldPersistTaps: "always",
        style: { maxHeight: 300, width: "100%" },
        children: [
          /* @__PURE__ */ jsx(
            LmAutocompleteList,
            {
              options: filteredOptions,
              onChangeSelection,
              isSelected
            }
          ),
          allowNew && !(filteredOptions == null ? void 0 : filteredOptions.length) && deferredTerm && /* @__PURE__ */ jsx(XStack, { justifyContent: "flex-start", marginBottom: "$3", marginLeft: "$3", children: /* @__PURE__ */ jsx(
            Button,
            {
              onPress: () => onAddNew(deferredTerm),
              chromeless: true,
              icon: /* @__PURE__ */ jsx(ListPlusRegular, {}),
              children: deferredTerm
            }
          ) })
        ]
      }
    )
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    (!disableSearch || allowNew) && /* @__PURE__ */ jsx(XStack, { padding: "$4", width: "100%", children: /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsx(Sheet.ScrollView, { children: /* @__PURE__ */ jsx(
      LmAutocompleteList,
      {
        options: filteredOptions,
        onChangeSelection,
        isSelected
      }
    ) }),
    allowNew && !(filteredOptions == null ? void 0 : filteredOptions.length) && deferredTerm && /* @__PURE__ */ jsx(XStack, { justifyContent: "flex-start", marginBottom: "$3", marginLeft: "$3", children: /* @__PURE__ */ jsx(Button, { onPress: () => onAddNew(deferredTerm), chromeless: true, icon: /* @__PURE__ */ jsx(ListPlusRegular, {}), children: deferredTerm }) })
  ] }) });
}
function LmAutocompleteList({ options, isSelected, onChangeSelection }) {
  return /* @__PURE__ */ jsx(Fragment, { children: options.map((item, i) => {
    return /* @__PURE__ */ jsx(
      ListItem,
      {
        hoverTheme: true,
        icon: isSelected(item) ? /* @__PURE__ */ jsx(CheckSquareRegular, {}) : /* @__PURE__ */ jsx(SquareRegular, {}),
        title: item.label,
        onPress: () => onChangeSelection(item)
      },
      item.value
    );
  }) });
}
export {
  LmAutocomplete
};
//# sourceMappingURL=LmAutocomplete.mjs.map
