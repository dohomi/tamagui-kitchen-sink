import {FormProvider, useForm} from "react-hook-form";
import {PropsWithChildren} from "react";

export type LmFormRhfProviderProps = PropsWithChildren<{}>

export function LmFormRhfProvider({children}: LmFormRhfProviderProps) {
    const methods = useForm()
    return (
        <FormProvider {...methods}>
            {children}
        </FormProvider>
    )
}