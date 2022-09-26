import {FormProvider, useForm, UseFormProps} from "react-hook-form";
import {PropsWithChildren} from "react";

export type LmFormRhfProviderProps = PropsWithChildren<UseFormProps>

export function LmFormRhfProvider({children, ...formProps}: LmFormRhfProviderProps) {
    const methods = useForm(formProps)
    return (
        <FormProvider {...methods}>
            {children}
        </FormProvider>
    )
}