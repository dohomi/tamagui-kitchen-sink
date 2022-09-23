import {useEffect, useId, useState} from "react";
import DropDownPicker, {DropDownPickerProps} from 'react-native-dropdown-picker';
import {useTheme} from 'tamagui';
import {useThemeState} from "app/src/state/themeState";
import {ColorValue} from "react-native";
import {LmFormFieldContainer} from "./LmFormFieldContainer";
import {FormContainerProps} from "./formContainerProps";

type LmMultiSelectProps = {
    options: { label: string, value: string }[]
    id?: string
    isMulti?: boolean,
    isSearchable?: boolean
    isDisabled?: boolean
    placeholder?: string
    zIndex?: number
    zIndexInverse?: number
    onChange: (any) => void
} & DropDownPickerProps<any> & Pick<FormContainerProps, 'required' | 'error' | 'helperText' | 'label' | 'labelProps' | 'labelInline'>

export function LmMultiSelect({
                                  required,
                                  error,
                                  helperText,
                                  label,
                                  labelProps,
                                  containerProps,
                                  labelInline,
                                  ...rest
}: LmMultiSelectProps) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(rest.isMulti ? [] : null);
    const [items, setItems] = useState(rest.options);
    const {background, backgroundHover, color,} = useTheme()
    const {name} = useThemeState()
    const genId = useId()
    const id = rest.id || genId

    const handleChange = (v) => {
        if (typeof rest.onChange === 'function') {
            rest.onChange(v)
        }
    }

    return (
        <LmFormFieldContainer id={id}
                              maxWidth={'100%'}
                              zIndex={rest.zIndex}
                              error={error}
                              required={required}
                              labelProps={labelProps}
                              label={label}
                              labelInline={labelInline}
                              helperText={helperText}>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                multiple={rest.isMulti as true}
                placeholder={rest.placeholder}
                searchable={rest.isSearchable}
                disabled={rest.isDisabled}
                zIndex={rest.zIndex}
                zIndexInverse={rest.zIndexInverse}
                style={{
                    backgroundColor: background.val as ColorValue,
                    borderColor: error? 'red' : undefined
                }}
                dropDownContainerStyle={{
                    backgroundColor: background.val as ColorValue,
                    borderColor: error? 'red' : undefined
                }}
                theme={(name?.toUpperCase() || 'DEFAULT') as 'LIGHT' | 'DARK' | 'DEFAULT'}
                onChangeValue={handleChange}
            />
        </LmFormFieldContainer>
    );
}
