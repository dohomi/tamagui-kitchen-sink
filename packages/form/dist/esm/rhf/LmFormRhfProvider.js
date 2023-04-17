import { FormProvider, useForm } from "react-hook-form";
function LmFormRhfProvider({
  children,
  forceFormProvider,
  ...formProps
}) {
  const methods = useForm({
    ...formProps
  });
  return typeof children === "function" ? forceFormProvider ? <FormProvider {...methods}>{children(methods)}</FormProvider> : <>{children(methods)}</> : <FormProvider {...methods}>{children}</FormProvider>;
}
export {
  LmFormRhfProvider
};
//# sourceMappingURL=LmFormRhfProvider.js.map
