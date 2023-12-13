import {
  Button,
  Input,
  ListItem,
  ListItemTitle,
  ScrollView,
  XGroup,
  XStack,
  YGroup,
  YStack
} from "tamagui";
import { forwardRef, useDeferredValue, useEffect, useId, useRef, useState } from "react";
import { LmFormFieldContainer } from "./LmFormFieldContainer";
import {
  CaretDownRegular,
  CheckSquareRegular,
  ListPlusRegular,
  LmPopover,
  SquareRegular,
  usePopoverState
} from "@tamagui-extras/core";
import { Platform, useWindowDimensions } from "react-native-web";
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
  const id = useId(), [opts, setOpts] = useState(options), { width } = useWindowDimensions(), popoverState = usePopoverState(), [popoverWidth, setPopoverWidth] = useState(0), inputRef = useRef(null), searchInputRef = useRef(null), [selection, setSelection] = useState(
    value ?? (multiple ? [] : null)
  ), isSelected = (item) => Array.isArray(selection) ? !!selection?.some((i) => i.value === item.value) : selection?.value === item.value, onChangeSelection = (item) => {
    let newVal = null;
    multiple ? newVal = isSelected(item) ? selection?.filter((i) => i.value !== item.value) ?? [] : [...selection ?? [], item] : newVal = isSelected(item) ? null : item, setSelection(newVal), typeof onChange == "function" && onChange(newVal);
  };
  useEffect(() => {
    const elWidth = inputRef.current?.offsetWidth;
    elWidth && setPopoverWidth(elWidth);
  }, [width]), useEffect(() => {
    popoverState.open && searchInputRef.current?.focus?.();
  }, [popoverState.open]);
  const inputValue = Array.isArray(selection) ? selection.map((option) => option?.label).join(", ") : selection?.label || "";
  return <LmFormFieldContainer
    id={id}
    error={error}
    required={required}
    labelProps={labelProps}
    label={label}
    labelInline={labelInline}
    helperText={helperText}
    helperTextProps={helperTextProps}
    size={size}
    {...containerProps}
  ><XGroup ref={inputRef}>
    <XGroup.Item><Input
      flex={1}
      value={inputValue}
      size={size}
      theme={theme}
      textOverflow="ellipsis"
      onFocus={(el) => {
        popoverState.onOpenChange(!popoverState.open), el.target.blur?.();
      }}
    /></XGroup.Item>
    <XGroup.Item><LmPopover
      isBouncy
      {...popoverProps}
      {...popoverState}
      offset={{
        // alignmentAxis: 20,
        mainAxis: 15,
        crossAxis: -30
      }}
      contentProps={{
        minWidth: popoverWidth || void 0,
        maxWidth: "100%",
        ...popoverProps?.contentProps
      }}
      trigger={<Button
        size={size}
        icon={<CaretDownRegular />}
        borderTopLeftRadius={0}
        borderBottomLeftRadius={0}
      />}
    ><LmAutocompleteInputContent
      ref={searchInputRef}
      theme={theme}
      options={opts}
      isSelected={isSelected}
      onChangeSelection={onChangeSelection}
      onAddNew={(newVal) => {
        if (newVal) {
          const newItem = typeof allowNewHook == "function" ? allowNewHook(newVal) : {
            value: newVal,
            label: newVal
          };
          setOpts((oldVal) => [newItem, ...oldVal]);
        }
      }}
      {...rest}
    /></LmPopover></XGroup.Item>
  </XGroup></LmFormFieldContainer>;
}
const LmAutocompleteInputContent = forwardRef(function({
  disableSearch,
  theme,
  placeholderSearch,
  options,
  allowNew,
  onAddNew,
  onChangeSelection,
  isSelected
}, ref) {
  const [searchTerm, setSearchTerm] = useState(), deferredTerm = useDeferredValue(searchTerm), filteredOptions = deferredTerm?.length ? options.filter((i) => i.label.toLowerCase().includes(deferredTerm)) : options, showSearch = !disableSearch || allowNew;
  return <>{Platform.OS === "web" ? <>
    {showSearch && <XStack padding="$4" width="100%"><Input
      theme={theme}
      placeholder={placeholderSearch}
      width="100%"
      ref={ref}
      onChangeText={(text) => {
        setSearchTerm(text.toLowerCase());
      }}
    /></XStack>}
    <ScrollView
      keyboardShouldPersistTaps="always"
      maxHeight={300}
      width="100%"
      marginTop={showSearch ? void 0 : "$4"}
      marginBottom="$4"
    >
      <LmAutocompleteList
        options={filteredOptions}
        onChangeSelection={onChangeSelection}
        isSelected={isSelected}
      />
      {allowNew && !filteredOptions?.length && deferredTerm && <XStack justifyContent="flex-start" marginBottom="$3" marginLeft="$3"><Button
        onPress={() => onAddNew(deferredTerm)}
        chromeless
        icon={<ListPlusRegular />}
      >{deferredTerm}</Button></XStack>}
    </ScrollView>
  </> : <YStack>
    {showSearch && <XStack padding="$4" width="100%"><Input
      theme={theme}
      ref={ref}
      placeholder={placeholderSearch}
      width="100%"
      onChangeText={(text) => {
        setSearchTerm(text.toLowerCase());
      }}
    /></XStack>}
    <ScrollView><LmAutocompleteList
      options={filteredOptions}
      onChangeSelection={onChangeSelection}
      isSelected={isSelected}
    /></ScrollView>
    {allowNew && !filteredOptions?.length && deferredTerm && <XStack justifyContent="flex-start" marginBottom="$3" marginLeft="$3"><Button onPress={() => onAddNew(deferredTerm)} chromeless icon={<ListPlusRegular />}>{deferredTerm}</Button></XStack>}
  </YStack>}</>;
});
function LmAutocompleteList({ options, isSelected, onChangeSelection }) {
  return <YGroup borderRadius={0}>{options.map((item, i) => <YGroup.Item key={item.value}><ListItem
    hoverTheme
    pressTheme
    focusTheme
    cursor="pointer"
    icon={isSelected(item) ? <CheckSquareRegular /> : <SquareRegular />}
    onPress={() => onChangeSelection(item)}
  ><ListItemTitle cursor="pointer">{item.label}</ListItemTitle></ListItem></YGroup.Item>)}</YGroup>;
}
export {
  LmAutocomplete
};
//# sourceMappingURL=LmAutocomplete.js.map
