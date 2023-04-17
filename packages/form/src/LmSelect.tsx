import { Select, SelectProps, ThemeProps, YStack } from 'tamagui'
import { LinearGradient } from '@tamagui/linear-gradient'
import { colormap, ThemeColors } from '@tamagui-extras/core'
import { CaretDown, CaretUp, Check } from 'tamagui-phosphor-icons'
import { useId, useState } from 'react'
import { LmFormFieldContainer } from './LmFormFieldContainer'
import { LmFormContainerBaseTypes } from './formContainerTypes'

type GetAltThemeNames<S> = (S extends `${string}_${infer Alt}` ? GetAltThemeNames<Alt> : S) | S

export type LmSelectProps = SelectProps &
  LmFormContainerBaseTypes & {
    value?: string
    options: { label: string; value: string | number }[]
    colorVariant?: ThemeColors
    themeName?: ThemeProps['name']
    width?: number | string
    placeholder?: string
    dropDownLabel?: string // above the items list
    fullWidth?: boolean
  }

export function LmSelect({
  value,
  colorVariant,
  themeName,
  options = [],
  width = 180,
  placeholder = '',
  dropDownLabel,
  required,
  error,
  helperText,
  helperTextProps,
  label,
  labelInline,
  labelProps,
  fullWidth,
  defaultValue,
  onValueChange,
  ...rest
}: LmSelectProps) {
  const [selectVal, setSelectVal] = useState<string>(value ?? defaultValue ?? '')
  const id = useId()
  rest.size = rest.size || '$3'

  return (
    <LmFormFieldContainer
      id={id}
      theme={colorVariant ? (colormap[colorVariant] as any) : themeName || undefined}
      error={error}
      required={required}
      labelProps={labelProps}
      label={label}
      size={rest.size}
      fullWidth={fullWidth}
      labelInline={labelInline}
      helperText={helperText}
      helperTextProps={helperTextProps}
    >
      <Select
        id={id}
        {...rest}
        value={selectVal}
        onValueChange={(val) => {
          setSelectVal(val)
          if (typeof onValueChange === 'function') {
            onValueChange(val)
          }
        }}
      >
        <Select.Trigger
          width={fullWidth ? '100%' : width}
          iconAfter={<CaretDown />}
          paddingVertical={0}
          minHeight={rest.size}
        >
          <Select.Value placeholder={placeholder} paddingVertical={0} />
        </Select.Trigger>
        {/*@ts-ignore*/}
        <Select.Adapt when="sm">
          <Select.Sheet modal dismissOnSnapToBottom>
            <Select.Sheet.Frame>
              <Select.Sheet.ScrollView>
                <Select.Adapt.Contents />
              </Select.Sheet.ScrollView>
            </Select.Sheet.Frame>
            <Select.Sheet.Overlay />
          </Select.Sheet>
        </Select.Adapt>

        <Select.Content zIndex={200000}>
          <Select.ScrollUpButton
            alignItems="center"
            justifyContent="center"
            position="relative"
            width="100%"
            height="$3"
          >
            <YStack zIndex={10}>
              <CaretUp size={20} />
            </YStack>
            <LinearGradient
              start={[0, 0]}
              end={[0, 1]}
              fullscreen
              colors={['$background', '$backgroundTransparent']}
              borderRadius="$4"
            />
          </Select.ScrollUpButton>

          <Select.Viewport>
            <Select.Group>
              {dropDownLabel && <Select.Label>{dropDownLabel}</Select.Label>}
              {options.map((item, i) => (
                <Select.Item index={i} key={item.value} value={`${item.value}`}>
                  <Select.ItemText>{item.label}</Select.ItemText>
                  <Select.ItemIndicator marginLeft="auto">
                    <Check size={16} />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Viewport>

          <Select.ScrollDownButton
            alignItems="center"
            justifyContent="center"
            position="relative"
            width="100%"
            height="$3"
          >
            <YStack zIndex={10}>
              <CaretDown size={20} />
            </YStack>
            <LinearGradient
              start={[0, 0]}
              end={[0, 1]}
              fullscreen
              colors={['$backgroundTransparent', '$background']}
              borderRadius="$4"
            />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select>
    </LmFormFieldContainer>
  )
}
