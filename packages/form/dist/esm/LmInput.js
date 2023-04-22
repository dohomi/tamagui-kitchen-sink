import { jsx, jsxs } from "react/jsx-runtime";
import { Input, Stack, TextArea } from "tamagui";
import { useId, useState } from "react";
import { LmFormFieldContainer } from "./LmFormFieldContainer";
import { Eye, EyeSlash } from "tamagui-phosphor-icons";
import { Pressable } from "react-native";
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
  const genId = useId();
  const [show, setShow] = useState(false);
  const id = rest.id || genId;
  const styleProps = {
    ...rest
  };
  if (error) {
    styleProps.theme = "red";
    styleProps.borderColor = error ? "$red8" : void 0;
  }
  if (fullWidth) {
    styleProps.minWidth = "100%";
  }
  let secureTextEntry = !!(rest.secureTextEntry || isPassword);
  return /* @__PURE__ */ jsx(
    LmFormFieldContainer,
    {
      id,
      error,
      required,
      labelProps,
      label,
      fullWidth,
      size: rest.size,
      labelInline,
      helperText,
      helperTextProps,
      ...containerProps,
      children: multiline ? /* @__PURE__ */ jsx(TextArea, { ...styleProps, placeholderTextColor: rest.placeholderTextColor }) : secureTextEntry ? /* @__PURE__ */ jsxs(Stack, { position: "relative", width: fullWidth ? "100%" : styleProps == null ? void 0 : styleProps.width, children: [
        /* @__PURE__ */ jsx(
          Input,
          {
            ...styleProps,
            secureTextEntry: !show,
            autoCapitalize: "none",
            placeholderTextColor: rest.placeholderTextColor
          }
        ),
        /* @__PURE__ */ jsx(
          Pressable,
          {
            style: {
              position: "absolute",
              top: "50%",
              transform: [{ translateY: -0.5 * 20 }],
              height: 20,
              right: 15
            },
            onPress: () => {
              setShow((state) => !state);
            },
            children: show ? /* @__PURE__ */ jsx(EyeSlash, { ...passwordIconProps }) : /* @__PURE__ */ jsx(Eye, { ...passwordIconProps })
          }
        )
      ] }) : /* @__PURE__ */ jsx(Input, { ...styleProps, autoCapitalize: "none" })
    }
  );
}
export {
  LmInput
};
//# sourceMappingURL=LmInput.js.map
