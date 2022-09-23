import {useEffect, useState} from "react";
import DropDownPicker, {DropDownPickerProps} from 'react-native-dropdown-picker';
import {useTheme} from 'tamagui';
import {useThemeState} from "app/src/state/themeState";

type LmMultiSelectProps = {
    options: { label: string, value: string }[]
    isMulti?: boolean,
    isSearchable?: boolean
    isDisabled?: boolean
    placeholder?: string
    zIndex?: number
    zIndexInverse?: number
} & DropDownPickerProps<any>

export function LmMultiSelect(props: LmMultiSelectProps) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(props.isMulti ? [] : null);
    const [items, setItems] = useState(props.options);
    const {background, backgroundHover, color} = useTheme()
    const {name} = useThemeState()

    return (
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            multiple={props.isMulti as true}
            placeholder={props.placeholder}
            searchable={props.isSearchable}
            zIndex={props.zIndex}
            zIndexInverse={props.zIndexInverse}
            theme={(name?.toUpperCase() || 'DEFAULT') as 'LIGHT' | 'DARK' | 'DEFAULT'}
        />
    );
}
