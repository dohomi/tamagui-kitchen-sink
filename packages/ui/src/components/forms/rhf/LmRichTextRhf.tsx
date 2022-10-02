import {LmRhfProps} from "./lmRhfProps";
import {Controller} from "react-hook-form";
import {LmRichText, LmRichTextProps} from "../richText/LmRichText";

type LmSelectRhfProps = LmRichTextProps & LmRhfProps & {}

export function LmRichTextRhf({
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
                        <LmRichText
                            {...inputProps}
                            onChange={(text) => {
                                onChange(text)
                                if (typeof inputProps.onChange === 'function') {
                                    inputProps.onChange(text)
                                }
                            }}
                            value={value ?? false}
                        />
                    )}/>

    )
}