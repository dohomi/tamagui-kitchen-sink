import {Input, InputProps, TextArea, ThemeableStackProps} from "tamagui";
import {useId, useState} from "react";
import {LmFormFieldContainer} from "./LmFormFieldContainer";
import {FormContainerProps} from "./formContainerProps";

export type LmInputProps = InputProps & FormContainerProps & {
    containerProps?: ThemeableStackProps
    multiline?: boolean
    isPassword?: boolean
}

export function LmInput({
                            required,
                            error,
                            helperText,
                            multiline,
                            label,
                            labelProps,
                            containerProps,
                            labelInline,
                            isPassword,
                            ...rest
                        }: LmInputProps) {
    const genId = useId()
    //todo...
    const [invertIsPassword, setInvertIsPassword] = useState<boolean>(false)
    const id = rest.id || genId
    const styleProps: InputProps = {}
    if (error) {
        styleProps.borderColor = error ? '$red10' : undefined
    }

    return (
        <LmFormFieldContainer id={id}
                              error={error}
                              required={required}
                              labelProps={labelProps}
                              label={label}
                              size={rest.size}
                              labelInline={labelInline}
                              helperText={helperText}
                              {...containerProps}>
            {multiline ? (
                <TextArea {...rest} {...styleProps}/>
            ) : (
                <Input {...rest} {...styleProps} secureTextEntry={rest.secureTextEntry || isPassword}/>
            )}
        </LmFormFieldContainer>
    )
}