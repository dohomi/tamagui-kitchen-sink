import { useId } from "react";
import {
  Checkbox,
  Label,
  Paragraph,
  XStack,
  YStack
} from "tamagui";
import { CheckRegular, MinusRegular } from "@tamagui-extras/core";
function LmCheckbox({
  label,
  onChange,
  error,
  helperText,
  size = "$3",
  value,
  required,
  theme,
  helperTextProps,
  checkboxProps,
  labelProps,
  disabled,
  ...stackProps
}) {
  const id = useId();
  return <XStack space alignItems="center" {...stackProps}>
    <Checkbox
      id={id}
      theme={error ? "red" : theme}
      {...checkboxProps}
      disabled={disabled}
      defaultChecked={value || checkboxProps?.defaultChecked}
      borderColor={error ? "$red8" : checkboxProps?.borderColor ?? "$borderColor"}
      size={size}
      onCheckedChange={(checked) => {
        typeof onChange == "function" && onChange(checked);
      }}
    ><Checkbox.Indicator>{checkboxProps?.checked === "indeterminate" ? <MinusRegular /> : <CheckRegular />}</Checkbox.Indicator></Checkbox>
    {label && <YStack>
      <Label size={size} htmlFor={id} {...labelProps} disabled={disabled}>
        {required ? "* " : ""}
        {label}
      </Label>
      {helperText && <Paragraph
        paddingLeft="$2"
        marginTop={0}
        size={size}
        {...helperTextProps}
        color={error ? "$red10" : helperTextProps?.color}
      >{helperText}</Paragraph>}
    </YStack>}
  </XStack>;
}
export {
  LmCheckbox
};
//# sourceMappingURL=LmCheckbox.js.map
