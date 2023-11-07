import { Input, Stack, TextArea } from "tamagui";
import { useId, useState } from "react";
import { LmFormFieldContainer } from "./LmFormFieldContainer";
import { Pressable } from "react-native-web";
import { EyeRegular, EyeSlashRegular } from "@tamagui-extras/core";
function LmInput({
  required,
  error,
  helperText,
  helperTextProps,
  label,
  labelProps,
  labelInline,
  multiline,
  containerProps,
  isPassword,
  passwordIconProps,
  fullWidth,
  ...rest
}) {
  const genId = useId(), [show, setShow] = useState(!1), id = rest.id || genId, currentInputProps = {
    ...rest
  };
  error && (currentInputProps.theme = "red", currentInputProps.borderColor = error ? "$red8" : void 0), fullWidth && (currentInputProps.minWidth = "100%");
  let secureTextEntry = !!(rest.secureTextEntry || isPassword);
  return <LmFormFieldContainer
    id={id}
    error={error}
    required={required}
    labelProps={labelProps}
    label={label}
    fullWidth={fullWidth}
    size={rest.size}
    labelInline={labelInline}
    helperText={helperText}
    helperTextProps={helperTextProps}
    {...containerProps}
  >{multiline ? <TextArea {...currentInputProps} placeholderTextColor={rest.placeholderTextColor} /> : secureTextEntry ? <Stack position="relative" width={fullWidth ? "100%" : currentInputProps?.width}>
    <Input
      {...currentInputProps}
      secureTextEntry={!show}
      autoCapitalize="none"
      placeholderTextColor={rest.placeholderTextColor}
    />
    <Pressable
      style={{
        position: "absolute",
        top: "50%",
        transform: [{ translateY: -0.5 * 20 }],
        height: 20,
        ...rest?.direction === "rtl" ? {
          left: 15
        } : {
          right: 15
        }
      }}
      onPress={() => {
        setShow((state) => !state);
      }}
    >{show ? <EyeSlashRegular {...passwordIconProps} /> : <EyeRegular {...passwordIconProps} />}</Pressable>
  </Stack> : <Input {...currentInputProps} autoCapitalize="none" />}</LmFormFieldContainer>;
}
export {
  LmInput
};
//# sourceMappingURL=LmInput.js.map
