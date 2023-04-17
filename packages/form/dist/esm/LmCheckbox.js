import { useId } from "react";
import {
  Checkbox,
  Label,
  Paragraph,
  XStack,
  YStack
} from "tamagui";
import { Check } from "tamagui-phosphor-icons";
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
  ...stackProps
}) {
  const id = useId();
  return <XStack space alignItems="center" {...stackProps}>
    <Checkbox id={id} theme={error ? "red" : theme} size={size} defaultChecked={value} onCheckedChange={(checked) => {
      if (typeof onChange === "function") {
        onChange(!!checked);
      }
    }} borderColor={error ? "$red8" : "$borderColor"}><Checkbox.Indicator><Check /></Checkbox.Indicator></Checkbox>
    {label && <YStack>
      <Label size={size} htmlFor={id}>
        {required ? "* " : ""}
        {label}
      </Label>
      {helperText && <Paragraph paddingLeft="$2" marginTop={0} size={size} {...helperTextProps} color={error ? "$red10" : helperTextProps == null ? void 0 : helperTextProps.color}>{helperText}</Paragraph>}
    </YStack>}
  </XStack>;
}
export {
  LmCheckbox
};
//# sourceMappingURL=LmCheckbox.js.map