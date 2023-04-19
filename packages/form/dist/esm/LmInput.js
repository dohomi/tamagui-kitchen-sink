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
      children: multiline ? /* @__PURE__ */ jsx(TextArea, { ...styleProps }) : secureTextEntry ? /* @__PURE__ */ jsxs(Stack, { position: "relative", width: fullWidth ? "100%" : "fit-content", children: [
        /* @__PURE__ */ jsx(Input, { ...styleProps, secureTextEntry: !show, autoCapitalize: "none" }),
        /* @__PURE__ */ jsx(
          Pressable,
          {
            style: {
              position: "absolute",
              bottom: 0,
              top: 0,
              marginTop: "auto",
              marginBottom: "auto",
              height: "20px",
              right: "10px"
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
