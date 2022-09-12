import {Controller} from "react-hook-form";
import {LmRhfProps} from "./lmRhfProps";
import {LmSwitch, LmSwitchProps} from "../LmSwitch";

type LmSelectRhfProps = LmSwitchProps & LmRhfProps & {}

export function LmSwitchRhf({
                                name,
                                control,
                                rules = {},
                                defaultValue,
                                ...inputProps
                            }: LmSelectRhfProps) {

    return (
        <Controller name={name}
                    rules={rules}
                    control={control}
                    defaultValue={defaultValue}
                    render={({field: {onChange, value}, fieldState: {error, invalid}}) => (
                        <LmSwitch
                            {...inputProps}
                            onCheckedChange={onChange}
                            value={value ?? false}
                        />
                    )}/>

    )
}