import { useFormContext } from "react-hook-form";
import { LmButton } from "@tamagui-extras/core";
function LmResetButtonRhf(props) {
  const { reset } = useFormContext();
  return <LmButton
    {...props}
    onPress={(e) => {
      reset(), typeof props.onPress == "function" && props.onPress(e);
    }}
  />;
}
export {
  LmResetButtonRhf
};
//# sourceMappingURL=LmResetButtonRhf.js.map
