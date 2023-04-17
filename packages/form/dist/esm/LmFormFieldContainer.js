import {
  Label,
  Paragraph,
  styled,
  ThemeableStack,
  YStack
} from "tamagui";
const StackContainer = styled(ThemeableStack, {
  variants: {
    fullWidth: {
      true: {
        width: "100%"
      }
    },
    labelInline: {
      true: {
        flexDirection: "row",
        space: true,
        alignItems: "center"
      }
    }
  }
});
function LmFormFieldContainer({
  label,
  children,
  helperText,
  id,
  size,
  labelProps,
  required,
  error,
  helperTextProps,
  ...rest
}) {
  return <StackContainer space={!!rest.labelInline} {...rest}>
    {label && <Label
      htmlFor={id}
      size={size || "$3"}
      {...labelProps}
      color={error ? "$red10" : void 0}
      width={rest.labelInline ? 150 : void 0}
      justifyContent={rest.labelInline ? "flex-end" : void 0}
    >
      {label}
      {" "}
      {required && ` *`}
    </Label>}
    <YStack>
      {children}
      {helperText && <Paragraph
        paddingLeft="$2"
        marginTop="$2"
        size={size}
        {...helperTextProps}
        color={error ? "$red10" : void 0}
      >{helperText}</Paragraph>}
    </YStack>
  </StackContainer>;
}
export {
  LmFormFieldContainer
};
//# sourceMappingURL=LmFormFieldContainer.js.map
