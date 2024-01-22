import { useFormContext } from "react-hook-form";
import { LmButton } from "@tamagui-extras/core";
import { jsx } from "react/jsx-runtime";
function LmResetButtonRhf(props) {
  const { reset } = useFormContext();
  return /* @__PURE__ */ jsx(
    LmButton,
    {
      ...props,
      onPress: (e) => {
        reset(), typeof props.onPress == "function" && props.onPress(e);
      }
    }
  );
}
export {
  LmResetButtonRhf
};
//# sourceMappingURL=LmResetButtonRhf.js.map
