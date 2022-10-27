import {Button, Input, InputProps, Stack, TextArea, ThemeableStackProps} from "tamagui";
import {useId, useState} from "react";
import {LmFormFieldContainer} from "./LmFormFieldContainer";
import {LmFormContainerBaseTypes} from "./formContainerTypes";
import {Eye, EyeOff} from "@tamagui/lucide-icons";

export type LmInputProps = InputProps & LmFormContainerBaseTypes & {
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
    const [show, setShow] = useState<boolean>(false)
    const id = rest.id || genId
    const styleProps: InputProps = {}
    if (error) {
        styleProps.borderColor = error ? '$red10' : undefined
    }
    if (fullWidth) {
        styleProps.minWidth = '100%'
    }

    let secureTextEntry = !!(rest.secureTextEntry || isPassword);
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
            ) : secureTextEntry ? (
                <Stack position={'relative'} width={fullWidth ? '100%' : 'fit-content'}>
                    <Input {...rest}
                           {...styleProps}
                           secureTextEntry={!show}
                           autoCapitalize='none'/>
                    <Button icon={show ? EyeOff : Eye}
                            circular
                            chromeless
                            position={'absolute'} right={'$1'} top={'$1'}
                            onPress={() => {
                                setShow(state => !state)
                            }}/>
                </Stack>
            ) : (
                <Input {...rest}
                       {...styleProps}
                       autoCapitalize='none'/>
            )}
        </LmFormFieldContainer>
    )
}