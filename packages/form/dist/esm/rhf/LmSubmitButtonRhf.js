import { LmButton } from "@tamagui-extras/core";
import { useFormContext } from "react-hook-form";
import { jsx } from "react/jsx-runtime";
function LmSubmitButtonRhf({
  onSubmit,
  ...props
}) {
  const formContext = useFormContext(), { handleSubmit, formState } = formContext;
  return /* @__PURE__ */ jsx(
    LmButton,
    {
      ...props,
      onPress: handleSubmit((data) => {
        onSubmit(data, formContext);
      }),
      loading: formState.isValidating || props.loading
    }
  );
}
export {
  LmSubmitButtonRhf
};
//# sourceMappingURL=LmSubmitButtonRhf.js.map
