import {LmButton, LmButtonProps} from "../LmButton";
import {FieldValues, useFormContext} from "react-hook-form";

export type LmButtonRhfProps<T> = LmButtonProps & {
    onSubmit: (data: T) => void | Promise<void>
}

export function LmSubmitButtonRhf<TFieldValues extends FieldValues = FieldValues>({
                                                                                      onSubmit,
                                                                                      ...props
                                                                                  }: LmButtonRhfProps<TFieldValues>) {
    const {handleSubmit, formState} = useFormContext()

    return (
        <LmButton {...props} onPress={(handleSubmit(onSubmit))} loading={formState.isValidating || props.loading}/>
    )
}