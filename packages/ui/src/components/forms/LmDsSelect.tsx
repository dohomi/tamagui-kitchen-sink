import React, {Component} from 'react';
import Downshift from 'downshift';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Input, Label, ListItem, XGroup, YGroup} from 'tamagui';
import {LmInput} from "./LmInput";
import {LmIcon} from "../content";
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import {LmButton} from "./LmButton";

export type LmDsSelectProps = {
    items: string[]
}


export const LmDsSelect = ({
                               items,
                               ...rest
                           }: LmDsSelectProps) => {

    const rootProps = {}

    const Item = ({selected, highlighted, item}) => (
        <View
            style={[
                //styles.itemContainer,
                {backgroundColor: highlighted ? 'gray' : 'white'},
            ]}>
            <Text
                style={[
                    //styles.itemText,
                    {fontWeight: selected ? 'bold' : 'normal'}]}>
                {item}
            </Text>
        </View>
    );
    const RootView = ({innerRef, ...rest}) => <View ref={innerRef} {...rest} />

    const getColor = (selectedItem, highlightedIndex, item, index) => {
        if (selectedItem === item) {
            return '$gray3'
        } else if (highlightedIndex === index) {
            return 'gray1'
        }
        return undefined
    }
    const BasicAutocomplete = ({items}) => (
        <Downshift>
            {({
                  getRootProps,
                  getInputProps,
                  getItemProps,
                  isOpen,
                  inputValue,
                  selectedItem,
                  highlightedIndex,
                  getLabelProps,
                  clearSelection
              }) => (
                <RootView {...getRootProps({refKey: 'innerRef'})}>
                    <Text>{isOpen ? 'open' : 'closed'}</Text>
                    <Label {...getLabelProps()}>Enter a fruit</Label>
                    <XGroup>
                        <LmInput {...getInputProps()}
                                 width={240}
                                 placeholder={'Here ....'}/>
                        <LmButton icon={<LmIcon iconName={faCircleXmark} size={'$2'} color={'blue'}/>}
                                  onPress={() => clearSelection()}/>
                    </XGroup>

                    {isOpen
                        ? <YGroup alignSelf="center" bordered width={240} size="$4">
                            {items
                                .filter(
                                    i =>
                                        !inputValue ||
                                        i.toLowerCase().includes(inputValue.toLowerCase())
                                )
                                .map((item, index) => {
                                    const props = getItemProps({item, index});
                                    return (
                                        <TouchableOpacity {...props} key={item}>
                                            <ListItem
                                                color={getColor(selectedItem, highlightedIndex, item, index)}
                                                title={item}
                                            />
                                        </TouchableOpacity>
                                    );
                                })}
                        </YGroup>
                        : null}

                </RootView>
            )}
        </Downshift>
    );


    return (
        <BasicAutocomplete items={items}/>
    )
}
