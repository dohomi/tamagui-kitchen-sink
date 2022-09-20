import {MultiSelect, Dropdown} from 'react-native-element-dropdown';
import {useState} from "react";
import {View, Text, TouchableOpacity, Pressable, StyleSheet} from "react-native";
import {faSquareCheck, faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import {LmButton} from "./LmButton";
import {LmIcon} from "../content";

type LmMultiSelectProps = {
    isMulti?: boolean,
    options: { label: string, value: string }[]
}

export function LmMultiSelect(props: LmMultiSelectProps) {
    const [selected, setSelected] = useState([]);

    const DATA = [
        {label: 'React Naive', value: '1'},
        {label: 'Javascript', value: '2'},
        {label: 'Laravel', value: '3'},
        {label: 'PHP', value: '4'},
        {label: 'jQuery', value: '5'},
        {label: 'Bootstrap', value: '6'},
        {label: 'HTML', value: '7'},
        {label: 'CSS', value: '8'},
    ];

    const renderDataItem = (item) => {
        return (
            <View style={styles.item}>
                <Text style={styles.selectedTextStyle}>{item.label}</Text>
                <LmIcon iconName={faSquareCheck}/>
            </View>
        );
    };

    const sharedProps = {
        style: styles.dropdown,
        placeholderStyle: styles.placeholderStyle,
        selectedTextStyle: styles.selectedTextStyle,
        inputSearchStyle: styles.inputSearchStyle,
        iconStyle: styles.iconStyle,
        data: props.options,
        labelField: "label",
        valueField: "value",
        placeholder: "Multi Select item",
        value: selected,
        search: false,
        searchPlaceholder: "Search...",
        onChange: item => {
            setSelected(item);
        },
        renderLeftIcon: () => null,
        //      (
        // <LmIcon iconName={faSquareCheck}/>
        //    )
        renderItem: renderDataItem,
        renderSelectedItem: (item, unSelect) => (
            <LmButton
                iconAfter={<LmIcon iconName={faCircleXmark}/>}
                onPress={() => unSelect && unSelect(item)}>
                {item.label}
            </LmButton>
        )
    }

    return props.isMulti ?
        <MultiSelect {...props} {...sharedProps}/> :
        <Dropdown {...props} {...sharedProps} />
}

const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 14,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    icon: {
        marginRight: 5,
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    selectedStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: 'white',
        shadowColor: '#000',
        marginTop: 8,
        marginRight: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
    textSelectedStyle: {
        marginRight: 5,
        fontSize: 16,
    },
});