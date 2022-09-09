import {FormProvider, useForm} from "react-hook-form";
import {PropsWithChildren} from "react";

export type LmFormRfhProviderProps = PropsWithChildren<{}>

export function LmFormRfhProvider({children}: LmFormRfhProviderProps) {
    const methods = useForm()
    return (
        <FormProvider {...methods}>
            {children}
        </FormProvider>
    )
}