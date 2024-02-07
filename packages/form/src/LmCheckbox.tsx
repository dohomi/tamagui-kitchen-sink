import { ReactNode, useId } from 'react'
import {
  Checkbox,
  CheckboxProps,
  FontSizeTokens,
  Label,
  LabelProps,
  Paragraph,
  ParagraphProps,
  SizeTokens,
  XStack,
  XStackProps,
  YStack,
} from 'tamagui'
import { CheckRegular, MinusRegular } from '@tamagui-extras/core'

export type LmCheckboxProps = XStackProps & {
  checkboxProps?: Omit<CheckboxProps, 'disabled'>
  label?: ReactNode
  onChange?: CheckboxProps['onCheckedChange']
  value?: boolean
  error?: boolean
  helperText?: ReactNode
  helperTextProps?: ParagraphProps
  size?: SizeTokens
  required?: boolean
  labelProps?: Omit<LabelProps, 'htmlFor' | 'ref'>
}

export function LmCheckbox({
  label,
  onChange,
  error,
  helperText,
  size = '$3',
  value,
  required,
  theme,
  helperTextProps,
  checkboxProps,
  labelProps,
  disabled,
  ...stackProps
}: LmCheckboxProps) {
  const id = useId()
  return (
    <XStack space alignItems={'center'} {...stackProps}>
      <Checkbox
        id={id}
        theme={error ? 'red' : theme}
        {...checkboxProps}
        disabled={disabled}
        defaultChecked={value || checkboxProps?.defaultChecked}
        borderColor={error ? '$red8' : checkboxProps?.borderColor ?? '$borderColor'}
        size={size}
        onCheckedChange={(checked) => {
          if (typeof onChange === 'function') {
            onChange(checked)
          }
        }}
      >
        <Checkbox.Indicator>
          {checkboxProps?.checked === 'indeterminate' ? <MinusRegular /> : <CheckRegular />}
        </Checkbox.Indicator>
      </Checkbox>
      {label && (
        <YStack>
          <Label size={size} htmlFor={id} {...labelProps} disabled={disabled}>
            {required ? '* ' : ''}
            {label}
          </Label>
          {helperText && (
            <Paragraph
              paddingLeft={'$2'}
              marginTop={0}
              size={size as FontSizeTokens}
              {...helperTextProps}
              color={error ? '$red10' : helperTextProps?.color}
            >
              {helperText}
            </Paragraph>
          )}
        </YStack>
      )}
    </XStack>
  )
}
