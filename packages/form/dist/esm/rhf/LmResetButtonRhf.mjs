import { useFormContext } from "react-hook-form";
import { LmButton } from "@tamagui-extras/core";
function LmResetButtonRhf(props) {
  const { reset } = useFormContext();
  return <LmButton {...props} onPress={(e) => {
    reset();
    if (typeof props.onPress === "function") {
      props.onPress(e);
    }
  }} />;
}
export {
  LmResetButtonRhf
};
//# sourceMappingURL=LmResetButtonRhf.mjs.map
