import { LmButton } from "@tamagui-extras/core";
import { useFormContext } from "react-hook-form";
function LmSubmitButtonRhf({
  onSubmit,
  ...props
}) {
  const formContext = useFormContext();
  const { handleSubmit, formState } = formContext;
  return <LmButton {...props} onPress={handleSubmit((data) => {
    onSubmit(data, formContext);
  })} loading={formState.isValidating || props.loading} />;
}
export {
  LmSubmitButtonRhf
};
//# sourceMappingURL=LmSubmitButtonRhf.mjs.map
