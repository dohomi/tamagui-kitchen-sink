import { Fragment, jsx } from "react/jsx-runtime";
import { FormProvider, useForm } from "react-hook-form";
function LmFormRhfProvider({
  children,
  forceFormProvider,
  ...formProps
}) {
  const methods = useForm({
    ...formProps
  });
  return typeof children === "function" ? forceFormProvider ? /* @__PURE__ */ jsx(FormProvider, { ...methods, children: children(methods) }) : /* @__PURE__ */ jsx(Fragment, { children: children(methods) }) : /* @__PURE__ */ jsx(FormProvider, { ...methods, children });
}
export {
  LmFormRhfProvider
};
//# sourceMappingURL=LmFormRhfProvider.mjs.map
