import {LmMultiSelect, LmMultiSelectProps} from "../LmMultiSelect";
import {Controller} from "react-hook-form";
import {LmRhfProps} from "./lmRhfProps";

type LmSelectRhfProps = LmMultiSelectProps & LmRhfProps & {}

export function LmMultiSelectRhf({
                                name,
                                control,
                                rules = {},
                                defaultValue,
                                ...inputProps
                            }: LmSelectRhfProps) {
    if (inputProps.required) {
        rules.required = 'This field is required'
    }
    return (
        <Controller name={name}
                    rules={rules}
                    control={control}
                    defaultValue={defaultValue}
                    render={({field: {onChange, value}, fieldState: {error, invalid}}) => (
                        <LmMultiSelect
                            {...inputProps}
                            value={value ?? ''}
                            error={invalid}
                            onChange={onChange}
                            helperText={error ? error.message : inputProps.helperText}
                        />
                    )}/>

    )
}