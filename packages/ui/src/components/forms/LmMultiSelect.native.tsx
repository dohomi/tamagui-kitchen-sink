import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
import {ListItem, useTheme, XStack, YStack} from 'tamagui'
import {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {faCircleXmark, faSquareCheck} from '@fortawesome/free-regular-svg-icons';
import {LmButton} from "./LmButton";
import {LmIcon} from "../content";
import {LmInput} from "./LmInput";
import { styled } from '@tamagui/core'

type LmMultiSelectProps = {
    options: { label: string, value: string }[]
    isMulti?: boolean,
    isSearchable?: boolean
    isDisabled?: boolean
    placeholder?: string
}

export function LmMultiSelect(props: LmMultiSelectProps) {
    const [selected, setSelected] = useState([]);
    const {background, backgroundHover, color} = useTheme()

    const sharedProps = {
        data: props.options,
        labelField: "label",
        valueField: "value",
        placeholder: props.placeholder,
        value: selected,
        search: props.isSearchable,
        searchPlaceholder: "Search...",
        onChange: item => {
            setSelected(item);
        },
        renderLeftIcon: () => null,
        disable: props.isDisabled,
        //      (
        // <LmIcon iconName={faSquareCheck}/>
        //    )
        renderItem: (item, selected) => {
            return(
                <ListItem width={'100%'} backgroundColor={background}>{item.label}</ListItem>
            )
        },
        renderSelectedItem: (item, unSelect) => (
            <LmButton
                iconAfter={<LmIcon iconName={faCircleXmark}/>}
                onPress={() => unSelect && unSelect(item)}>
                {item.label}
            </LmButton>
        ),
        renderInputSearch: ((onSearch: (text:string) => void) => {
            return <LmInput></LmInput>
        })
    }

    return (
        <View style={{width: '100%'}}>
            {props.isMulti ?
                <MultiSelect {...props} {...sharedProps} /> :
                <Dropdown {...props} {...sharedProps} />}
        </View>
    )
}
