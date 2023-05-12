import { ReactNode, useId } from 'react'
import {
  Checkbox,
  CheckboxProps,
  CheckedState,
  FontSizeTokens,
  Label,
  Paragraph,
  ParagraphProps,
  SizeTokens,
  XStack,
  XStackProps,
  YStack,
} from 'tamagui'
import { CheckRegular, MinusRegular } from '@tamagui-extras/core'

export type LmCheckboxProps = XStackProps & {
  checkboxProps?: CheckboxProps
  label?: ReactNode
  onChange?: (state: CheckedState) => void
  value?: boolean
  error?: boolean
  helperText?: ReactNode
  helperTextProps?: ParagraphProps
  size?: SizeTokens
  required?: boolean
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
  ...stackProps
}: LmCheckboxProps) {
  const id = useId()
  return (
    <XStack space alignItems={'center'} {...stackProps}>
      <Checkbox
        id={id}
        theme={error ? 'red' : theme}
        {...checkboxProps}
        defaultChecked={value || checkboxProps?.defaultChecked}
        size={size}
        onCheckedChange={(checked) => {
          if (typeof onChange === 'function') {
            onChange(checked)
          }
        }}
        borderColor={error ? '$red8' : '$borderColor'}
      >
        <Checkbox.Indicator>
          {checkboxProps?.checked === 'indeterminate' ? <MinusRegular /> : <CheckRegular />}
        </Checkbox.Indicator>
      </Checkbox>
      {label && (
        <YStack>
          <Label size={size} htmlFor={id}>
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
