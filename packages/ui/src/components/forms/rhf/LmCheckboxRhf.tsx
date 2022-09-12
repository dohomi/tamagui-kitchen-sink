import {Controller} from "react-hook-form";
import {RhfProps} from "./rhfProps";
import {LmCheckbox, LmCheckboxProps} from "../LmCheckbox";

type LmCheckboxRhfProps = LmCheckboxProps & RhfProps


export function LmCheckboxRhf({name, rules = {}, control, defaultValue, ...inputProps}: LmCheckboxRhfProps) {
    if (inputProps.required) {
        rules.required = 'This field is required'
    }
    return (
        <Controller name={name}
                    rules={rules}
                    control={control}
                    defaultValue={defaultValue}
                    render={({field: {onChange, value}, fieldState: {error, invalid}}) => (
                        <LmCheckbox {...inputProps}
                                    value={value ?? false}
                                    error={invalid}
                                    onChange={onChange}
                                    helperText={error ? error.message : inputProps.helperText}
                        />
                    )}/>
    )
}