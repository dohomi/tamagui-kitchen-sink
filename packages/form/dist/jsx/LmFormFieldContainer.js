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
        space: "$3",
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
  return <StackContainer {...rest} space={rest.labelInline ? "$3" : rest.space}>
    {label && <Label
      htmlFor={id}
      size={size || "$3"}
      {...labelProps}
      color={error ? "$red10" : labelProps?.color}
      width={rest.labelInline ? 150 : labelProps?.width}
      justifyContent={rest.labelInline ? "flex-end" : labelProps?.justifyContent}
    >
      {label}
      {" "}
      {required && " *"}
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
