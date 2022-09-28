import {Input, InputProps, TextArea, ThemeableStackProps} from "tamagui";
import {useId, useState} from "react";
import {LmFormFieldContainer} from "./LmFormFieldContainer";
import {FormContainerProps} from "./formContainerProps";

export type LmInputProps = InputProps & FormContainerProps & {
    containerProps?: ThemeableStackProps
    multiline?: boolean
    isPassword?: boolean
    fullWidth?: boolean
}

export function LmInput({
                            required,
                            error,
                            helperText,
                            label,
                            labelProps,
                            labelInline,
                            multiline,
                            containerProps,
                            isPassword,
                            fullWidth,
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
    if (fullWidth) {
        styleProps.minWidth = '100%'
    }

    return (
        <LmFormFieldContainer id={id}
                              error={error}
                              required={required}
                              labelProps={labelProps}
                              label={label}
                              fullWidth={fullWidth}
                              size={rest.size}
                              labelInline={labelInline}
                              helperText={helperText}
                              {...containerProps}>
            {multiline ? (
                <TextArea {...rest} {...styleProps}/>
            ) : (
                <Input {...rest} {...styleProps}
                       secureTextEntry={rest.secureTextEntry || isPassword}
                       autoCapitalize='none'/>
            )}
        </LmFormFieldContainer>
    )
}