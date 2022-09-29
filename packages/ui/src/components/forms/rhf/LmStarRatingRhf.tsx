import {Controller} from "react-hook-form";
import {LmRhfProps} from "./lmRhfProps";
import {LmStarRating, LmStarRatingProps} from "../LmStarRating";

type LmSelectRhfProps = LmStarRatingProps & LmRhfProps & {}

export function LmStarRatingRhf({
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
                        <LmStarRating
                            {...inputProps}
                            onChange={onChange}
                            value={value ?? null}
                        />
                    )}/>

    )
}