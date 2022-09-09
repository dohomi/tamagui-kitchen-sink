import {Input, InputProps, TextArea, ThemeableStackProps} from "tamagui";
import {useId} from "react";
import {LmFormContainer} from "./LmFormContainer";
import {FormContainerProps} from "./formContainerProps";

export type LmInputProps = InputProps & FormContainerProps & {
    containerProps?: ThemeableStackProps
    multiline?: boolean
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
                            ...rest
                        }: LmInputProps) {
    const genId = useId()
    const id = rest.id || genId
    const styleProps: InputProps = {}
    if (error) {
        styleProps.borderColor = error ? '$red10' : undefined
    }

    const InputChild = multiline ? () => <TextArea id={id} {...rest} {...styleProps}/> : () => <Input
        id={id} {...rest} {...styleProps} />

    return (
        <LmFormContainer id={id}
                         error={error}
                         required={required}
                         labelProps={labelProps}
                         label={label}
                         size={rest.size}
                         labelInline={labelInline}
                         helperText={helperText}
                         {...containerProps}>
            <InputChild/>
        </LmFormContainer>
    )
}