import { Button, Input, ListItem, Popover, Sheet, ThemeName, XGroup, XStack } from 'tamagui'
import { CaretDown, CheckSquare, ListPlus, Square } from 'tamagui-phosphor-icons'
import { useDeferredValue, useEffect, useId, useRef, useState } from 'react'
import { LmFormFieldContainer } from './LmFormFieldContainer'
import { LmFormContainerBaseTypes } from './formContainerTypes'
import { LmPopover } from '@tamagui-extras/core'
import { Platform, useWindowDimensions } from 'react-native'

type Option = { label: string; value: string | number }
export type LmAutocompleteProps = LmFormContainerBaseTypes & {
  options: Option[]
  multiple?: boolean
  value?: null | Option | Option[]
  onChange?: (v: null | Option | Option[]) => void
  placeholderSearch?: string
  disableSearch?: boolean
  theme?: ThemeName
  allowNew?: boolean
  allowNewHook?: (newValue: string) => Option
}

type AutocompleteContext = {
  onChangeSelection: (option: Option) => void
  isSelected: (opts: Option) => boolean
}

type ConditionalOption<T extends boolean> = T extends true ? Option[] : Option

export function LmAutocomplete({
  options,
  labelInline,
  labelProps,
  helperText,
  helperTextProps,
  required,
  label,
  value,
  onChange,
  error,
  theme,
  allowNewHook,
  multiple = false,
  ...rest
}: LmAutocompleteProps) {
  const id = useId()
  const [opts, setOpts] = useState(options)
  const { width } = useWindowDimensions()
  const [popoverWidth, setPopoverWidth] = useState<number>(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const [selection, setSelection] = useState<ConditionalOption<typeof multiple> | null>(
    value ?? (multiple ? [] : null)
  )
  const isSelected = (item: Option) =>
    Array.isArray(selection)
      ? !!selection?.some((i) => i.value === item.value)
      : selection?.value === item.value

  const onChangeSelection = (item: Option) => {
    let newVal: ConditionalOption<typeof multiple> | null = null
    if (multiple) {
      const has = isSelected(item)
      newVal = has
        ? (selection as Option[])?.filter((i) => i.value !== item.value) ?? []
        : [...((selection as Option[]) ?? []), item]
    } else {
      newVal = isSelected(item) ? null : item
    }
    setSelection(newVal)
    if (typeof onChange === 'function') {
      onChange(newVal)
    }
  }

  useEffect(() => {
    const elWidth = inputRef.current?.offsetWidth
    if (elWidth) {
      setPopoverWidth(elWidth)
    }
  }, [width])

  const inputValue = Array.isArray(selection)
    ? selection.map((option) => option?.label).join(', ')
    : selection?.label || ''

  return (
    <LmFormFieldContainer
      id={id}
      error={error}
      required={required}
      labelProps={labelProps}
      label={label}
      labelInline={labelInline}
      helperText={helperText}
      helperTextProps={helperTextProps}
    >
      <XGroup ref={inputRef}>
        <XGroup.Item>
          <Input flex={1} value={inputValue} theme={theme} textOverflow={'ellipsis'} />
        </XGroup.Item>
        <XGroup.Item>
          <LmPopover
            isBouncy
            sheetProps={
              {
                // snapPoints: [100, 0],
              }
            }
            contentProps={{
              minWidth: popoverWidth ? popoverWidth : undefined,
              maxWidth: '100%',
            }}
            trigger={
              <Button icon={<CaretDown />} borderTopLeftRadius={0} borderBottomLeftRadius={0} />
            }
          >
            <LmAutocompleteInputContent
              theme={theme}
              options={opts}
              isSelected={isSelected}
              onChangeSelection={onChangeSelection}
              onAddNew={(newVal) => {
                if (newVal) {
                  const newItem =
                    typeof allowNewHook === 'function'
                      ? allowNewHook(newVal)
                      : {
                          value: newVal,
                          label: newVal,
                        }
                  setOpts((oldVal) => [newItem, ...oldVal])
                }
              }}
              {...rest}
            />
          </LmPopover>
        </XGroup.Item>
      </XGroup>
    </LmFormFieldContainer>
  )
}

type LmAutocompleteInputContentProps = LmAutocompleteProps &
  AutocompleteContext & {
    onAddNew: (str: string) => void
  }

function LmAutocompleteInputContent({
  disableSearch,
  theme,
  placeholderSearch,
  options,
  allowNew,
  onAddNew,
  onChangeSelection,
  isSelected,
}: LmAutocompleteInputContentProps) {
  const [searchTerm, setSearchTerm] = useState<string>()
  const deferredTerm = useDeferredValue(searchTerm)
  const filteredOptions = deferredTerm?.length
    ? options.filter((i) => i.label.toLowerCase().includes(deferredTerm))
    : options
  return (
    <>
      {Platform.OS === 'web' ? (
        <>
          {(!disableSearch || allowNew) && (
            <XStack padding={'$4'} width={'100%'}>
              <Input
                theme={theme}
                placeholder={placeholderSearch}
                width={'100%'}
                onChangeText={(text) => {
                  setSearchTerm(text.toLowerCase())
                }}
              />
            </XStack>
          )}
          <Popover.ScrollView
            keyboardShouldPersistTaps={'always'}
            style={{ maxHeight: 300, width: '100%' }}
          >
            <LmAutocompleteList
              options={filteredOptions}
              onChangeSelection={onChangeSelection}
              isSelected={isSelected}
            />
            {allowNew && !filteredOptions?.length && deferredTerm && (
              <XStack justifyContent={'flex-start'} marginBottom={'$3'} marginLeft={'$3'}>
                <Button onPress={() => onAddNew(deferredTerm)} chromeless icon={<ListPlus />}>
                  {deferredTerm}
                </Button>
              </XStack>
            )}
          </Popover.ScrollView>
        </>
      ) : (
        <>
          {(!disableSearch || allowNew) && (
            <XStack padding={'$4'} width={'100%'}>
              <Input
                theme={theme}
                placeholder={placeholderSearch}
                width={'100%'}
                onChangeText={(text) => {
                  setSearchTerm(text.toLowerCase())
                }}
              />
            </XStack>
          )}
          <Sheet.ScrollView>
            <LmAutocompleteList
              options={filteredOptions}
              onChangeSelection={onChangeSelection}
              isSelected={isSelected}
            />
          </Sheet.ScrollView>
          {allowNew && !filteredOptions?.length && deferredTerm && (
            <XStack justifyContent={'flex-start'} marginBottom={'$3'} marginLeft={'$3'}>
              <Button onPress={() => onAddNew(deferredTerm)} chromeless icon={<ListPlus />}>
                {deferredTerm}
              </Button>
            </XStack>
          )}
        </>
      )}
    </>
  )
}

type LmAutocompleteListProps = AutocompleteContext & {
  options: LmAutocompleteProps['options']
}

function LmAutocompleteList({ options, isSelected, onChangeSelection }: LmAutocompleteListProps) {
  return (
    <>
      {options.map((item, i) => {
        return (
          <ListItem
            hoverTheme
            key={item.value}
            icon={isSelected(item) ? <CheckSquare /> : <Square />}
            title={item.label}
            onPress={() => onChangeSelection(item)}
          />
        )
      })}
    </>
  )
}
