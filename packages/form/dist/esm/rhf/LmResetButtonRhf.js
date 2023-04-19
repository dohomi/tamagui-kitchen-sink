import { jsx } from "react/jsx-runtime";
import { useFormContext } from "react-hook-form";
import { LmButton } from "@tamagui-extras/core";
function LmResetButtonRhf(props) {
  const { reset } = useFormContext();
  return /* @__PURE__ */ jsx(
    LmButton,
    {
      ...props,
      onPress: (e) => {
        reset();
        if (typeof props.onPress === "function") {
          props.onPress(e);
        }
      }
    }
  );
}
export {
  LmResetButtonRhf
};
//# sourceMappingURL=LmResetButtonRhf.js.map
