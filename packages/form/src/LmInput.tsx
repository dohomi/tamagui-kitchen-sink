import { Input, InputProps, Stack, TextArea, ThemeableStackProps } from 'tamagui'
import { useId, useState } from 'react'
import { LmFormFieldContainer } from './LmFormFieldContainer'
import { LmFormContainerBaseTypes } from './formContainerTypes'
import { Eye, EyeSlash, IconProps } from 'tamagui-phosphor-icons'
import { Pressable } from 'react-native'

export type LmInputProps = InputProps &
  LmFormContainerBaseTypes & {
    containerProps?: ThemeableStackProps
    multiline?: boolean
    isPassword?: boolean
    fullWidth?: boolean
    passwordIconProps?: IconProps
  }

export function LmInput({
  required,
  error,
  helperText,
  helperTextProps,
  label,
  labelProps,
  labelInline,
  multiline,
  containerProps,
  isPassword,
  passwordIconProps,
  fullWidth,
  ...rest
}: LmInputProps) {
  const genId = useId()
  const [show, setShow] = useState<boolean>(false)
  const id = rest.id || genId
  const styleProps: InputProps = {
    ...rest,
  }
  if (error) {
    styleProps.theme = 'red'
    styleProps.borderColor = error ? '$red8' : undefined
  }
  if (fullWidth) {
    styleProps.minWidth = '100%'
  }

  let secureTextEntry = !!(rest.secureTextEntry || isPassword)

  return (
    <LmFormFieldContainer
      id={id}
      error={error}
      required={required}
      labelProps={labelProps}
      label={label}
      fullWidth={fullWidth}
      size={rest.size}
      labelInline={labelInline}
      helperText={helperText}
      helperTextProps={helperTextProps}
      {...containerProps}
    >
      {multiline ? (
        <TextArea {...styleProps} />
      ) : secureTextEntry ? (
        <Stack position={'relative'} width={fullWidth ? '100%' : styleProps?.width}>
          <Input {...styleProps} secureTextEntry={!show} autoCapitalize="none" />
          <Pressable
            style={{
              position: 'absolute',
              top: '50%',
              transform: [{ translateY: -0.5 * 20 }],
              height: 20,
              right: 15,
            }}
            onPress={() => {
              setShow((state) => !state)
            }}
          >
            {show ? <EyeSlash {...passwordIconProps} /> : <Eye {...passwordIconProps} />}
          </Pressable>
        </Stack>
      ) : (
        <Input {...styleProps} autoCapitalize="none" />
      )}
    </LmFormFieldContainer>
  )
}
