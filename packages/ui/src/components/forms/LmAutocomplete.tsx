import { Button, Input, ListItem, Popover, ThemeName, XStack } from 'tamagui'
import { CheckSquare, FloppyDisk, ListPlus, Square, X } from 'tamagui-phosphor-icons'
import {createContext, useContext, useDeferredValue, useEffect, useId, useRef, useState} from 'react'
import { LmFormFieldContainer } from './LmFormFieldContainer'
import { LmFormContainerBaseTypes } from './formContainerTypes'
import { LmPopover } from '../panels'
import { usePopoverState } from '../../hooks'
import { useWindowDimensions } from 'react-native'

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
  selection: Option | Option[] | null
  setSelection: () => void
}

const AutocompleteContext = createContext({

})

export function LmAutocomplete({
  options,
  labelInline,
  labelProps,
  helperText,
  required,
  label,
  value,
  onChange,
  error,
  theme,
  allowNewHook,
  ...rest
}: LmAutocompleteProps) {
  const id = useId()
  const [opts, setOpts] = useState(options)
  const [selection, setSelection] = useState<Option | Option[] | null>(value || null)
  const { width } = useWindowDimensions()
  const [popoverWidth, setPopoverWidth] = useState<number>(0)
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (typeof onChange === 'function') {
      onChange(selection)
    }
  }, [selection])
  useEffect(() => {
    const elWidth = inputRef.current?.offsetWidth
    if (elWidth) {
      setPopoverWidth(elWidth)
    }
  }, [width])

  console.log('render',selection)
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
    >
      <LmPopover
        contentProps={{
          minWidth: popoverWidth ? popoverWidth : undefined,
          maxWidth: '100%',
        }}
        trigger={
          <Input ref={inputRef} value={inputValue} theme={theme} textOverflow={'ellipsis'} />
        }
      >
        <LmAutocompleteInputContent
          theme={theme}
          options={opts}
          onSelectionChange={(sel) => {
            if (sel !== selection) {
              console.log("hier", sel, selection)
              setSelection(sel || null)
            }
          }}
          value={selection}
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
    </LmFormFieldContainer>
  )
}

type LmAutocompleteInputContentProps = LmAutocompleteProps & {
  onSelectionChange: (selection?: Option | Option[]) => void
  onAddNew: (str: string) => void
}

function LmAutocompleteInputContent({
  disableSearch,
  theme,
  placeholderSearch,
  multiple,
  options,
  allowNew,
  onAddNew,
  onSelectionChange,
  value,
}: LmAutocompleteInputContentProps) {
  const [searchTerm, setSearchTerm] = useState<string>()
  const deferred = useDeferredValue(searchTerm)
  return (
    <>
      {(!disableSearch || allowNew) && (
        <XStack padding={'$4'} width={'100%'}>
          <Input
            theme={theme}
            placeholder={placeholderSearch}
            width={'100%'}
            onChangeText={(text) => {
              if (text) {
                setSearchTerm(text.toLowerCase())
              }
            }}
          />
        </XStack>
      )}

      <Popover.ScrollView
        keyboardShouldPersistTaps={true}
        style={{ maxHeight: 300, width: '100%' }}
      >
        {multiple ? (
          <LmAutocompleteMultiSelection
            value={value as Option[]}
            options={options}
            searchTerm={deferred}
            onSelectionChange={onSelectionChange}
          />
        ) : (
          <LmAutocompleteSingleSelection
            value={value as Option}
            options={options}
            searchTerm={deferred}
            onSelectionChange={onSelectionChange}
          />
        )}
      </Popover.ScrollView>
      {allowNew && <LmAutocompleteAddNew onSave={onAddNew} />}
    </>
  )
}

type LmAutocompleteAddNewProps = {
  onSave: (str: string) => void
}

function LmAutocompleteAddNew({ onSave }: LmAutocompleteAddNewProps) {
  const { open, onOpenChange } = usePopoverState()
  const [input, setInput] = useState<string | null>(null)
  return (
    <XStack width={'100%'} gap={'$2'} padding={'$2'} borderTopColor={'$borderColor'}>
      {open && (
        <Button
          circular
          chromeless
          onPress={() => {
            setInput(null)
            onOpenChange(false)
          }}
          icon={<X />}
        />
      )}
      <Input onChangeText={(st) => setInput(st)} display={open ? 'flex' : 'none'} flex={1} />
      <Button
        circular
        onPress={() => {
          if (input && open) {
            onSave(input)
          }
          onOpenChange(!open)
        }}
        icon={open ? <FloppyDisk /> : <ListPlus />}
      />
    </XStack>
  )
}

type LmAutocompleteSingleSelectionProps = {
  options: LmAutocompleteProps['options']
  value?: Option
  onSelectionChange: (option?: Option) => void
  searchTerm?: string
}

function LmAutocompleteSingleSelection({
  options,
  value,
  onSelectionChange,
  searchTerm,
}: LmAutocompleteSingleSelectionProps) {
  const [currentVal, setCurrentVal] = useState<Option | undefined>(value)
  const searchActive = searchTerm?.length

  useEffect(() => {
    onSelectionChange(currentVal)
  }, [currentVal])

  return (
    <>
      {options.map((item) => {
        if (searchActive && !item.label.toLowerCase().includes(searchTerm)) {
          return null
        }
        return (
          <ListItem
            hoverTheme
            key={item.value}
            icon={currentVal?.value === item.value ? <CheckSquare /> : <Square />}
            title={item.label}
            onPress={() => {
              setCurrentVal((old) => (item === old ? undefined : item))
            }}
          />
        )
      })}
    </>
  )
}

type LmAutocompleteMultiSelectionProps = {
  options: LmAutocompleteProps['options']
  value?: Option[]
  onSelectionChange: (options?: Option[]) => void
  searchTerm?: string
}

function LmAutocompleteMultiSelection({
  options,
  value,
  onSelectionChange,
  searchTerm,
}: LmAutocompleteMultiSelectionProps) {
  const [currentVal, setCurrentVal] = useState<Option[] | undefined>(value)
  const searchActive = searchTerm?.length
  useEffect(() => {
    onSelectionChange(currentVal)
  }, [currentVal])
  return (
    <>
      {options.map((item, i) => {
        let isSelected = currentVal
          ? currentVal.findIndex((i) => i.value === item.value) >= 0
          : false
        if (searchActive && !item.label.toLowerCase().includes(searchTerm)) {
          return null
        }
        return (
          <ListItem
            hoverTheme
            key={item.value}
            icon={isSelected ? <CheckSquare /> : <Square />}
            title={item.label}
            onPress={() => {
              setCurrentVal((old) =>
                isSelected
                  ? old?.filter((i) => i.value !== item.value) ?? []
                  : [...(old || []), item]
              )
            }}
          />
        )
      })}
    </>
  )
}
