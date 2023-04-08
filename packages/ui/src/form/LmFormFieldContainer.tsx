import {
  FontSizeTokens,
  Label,
  Paragraph,
  SizeTokens,
  styled,
  ThemeableStack,
  ThemeableStackProps,
  YStack,
} from 'tamagui'
import { LmFormContainerBaseTypes } from './formContainerTypes'

type LmFormContainerProps = ThemeableStackProps &
  LmFormContainerBaseTypes & {
    id?: string
    size?: SizeTokens
    fullWidth?: boolean
  }

const StackContainer = styled(ThemeableStack, {
  variants: {
    fullWidth: {
      true: {
        width: '100%',
      },
    },
    labelInline: {
      true: {
        flexDirection: 'row',
        space: true,
        alignItems: 'center',
      },
    },
  } as const,
})

export function LmFormFieldContainer({
  label,
  children,
  helperText,
  id,
  size,
  labelProps,
  required,
  error,
  helperTextProps,
  ...rest
}: LmFormContainerProps) {
  return (
    <StackContainer space={!!rest.labelInline} {...rest}>
      {label && (
        <Label
          htmlFor={id}
          size={size || '$3'}
          {...labelProps}
          color={error ? '$red10' : undefined}
          width={rest.labelInline ? 150 : undefined}
          justifyContent={rest.labelInline ? 'flex-end' : undefined}
        >
          {label} {required && ` *`}
        </Label>
      )}
      <YStack space>
        {children}
        {helperText && (
          <Paragraph
            paddingLeft={'$2'}
            size={size as FontSizeTokens}
            {...helperTextProps}
            color={error ? '$red10' : undefined}
          >
            {helperText}
          </Paragraph>
        )}
      </YStack>
    </StackContainer>
  )
}
