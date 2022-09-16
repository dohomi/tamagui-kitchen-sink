import * as React from 'react'
import Downshift from 'downshift'
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import { Label } from 'tamagui';

const items = [
    {value: 'apple'},
    {value: 'pear'},
    {value: 'orange'},
    {value: 'grape'},
    {value: 'banana'},
]

export function LmDsSelect( {}: {}) {
    return (<Downshift
        onChange={selection =>
            alert(selection ? `You selected ${selection.value}` : 'Selection Cleared')
        }
        itemToString={item => (item ? item.value : '')}
    >
        {({
              getInputProps,
              getItemProps,
              getLabelProps,
              getMenuProps,
              isOpen,
              inputValue,
              highlightedIndex,
              selectedItem,
              getRootProps,
          }) => (
            <View>
                <Label {...getLabelProps()}>Enter a fruit</Label>
                <View
                    style={{display: 'inline-block'}}
                    { /*@ts-ignore*/...{}}
                    {...getRootProps({}, {suppressRefError: true})}
                >
                    <TextInput {...getInputProps()} placeholder={'Here ....'}/>
                </View>
                <View {...getMenuProps()}>
                    {isOpen
                        ? items
                            .filter(item => !inputValue || item.value.includes(inputValue))
                            .map((item, index) => (
                                <li
                                    {...getItemProps({
                                        key: item.value,
                                        index,
                                        item,
                                        style: {
                                            backgroundColor:
                                                highlightedIndex === index ? 'lightgray' : 'white',
                                            fontWeight: selectedItem === item ? 'bold' : 'normal',
                                        },
                                    })}
                                >
                                    {item.value}
                                </li>
                            ))
                        : null}
                </View>
            </View>
        )}
    </Downshift>)
}