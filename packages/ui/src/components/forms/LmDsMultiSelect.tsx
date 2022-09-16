import {useCombobox, useMultipleSelection} from "downshift"
import {useMemo, useState} from "react";
import {View, Text, TouchableOpacity, Pressable} from "react-native";
import {Label, ListItem, LmButton, LmInput} from "../..";

export function LmDsSMultiSelect() {
    const books = [
        {author: 'Harper Lee', title: 'To Kill a Mockingbird'},
        {author: 'Lev Tolstoy', title: 'War and Peace'},
        {author: 'Fyodor Dostoyevsy', title: 'The Idiot'},
        {author: 'Oscar Wilde', title: 'A Picture of Dorian Gray'},
        {author: 'George Orwell', title: '1984'},
        {author: 'Jane Austen', title: 'Pride and Prejudice'},
        {author: 'Marcus Aurelius', title: 'Meditations'},
        {author: 'Fyodor Dostoevsky', title: 'The Brothers Karamazov'},
        {author: 'Lev Tolstoy', title: 'Anna Karenina'},
        {author: 'Fyodor Dostoevsky', title: 'Crime and Punishment'},
    ]
    const initialSelectedItems = [books[0], books[1]]

    function getFilteredBooks(selectedItems, inputValue) {
        const lowerCasedInputValue = inputValue.toLowerCase()

        return books.filter(function filterBook(book) {
            return (
                !selectedItems.includes(book) &&
                (book.title.toLowerCase().includes(lowerCasedInputValue) ||
                    book.author.toLowerCase().includes(lowerCasedInputValue))
            )
        })
    }

    function MultipleComboBox() {
        const [inputValue, setInputValue] = useState('')
        const [selectedItems, setSelectedItems] =
            useState(initialSelectedItems)
        const items = useMemo(
            () => getFilteredBooks(selectedItems, inputValue),
            [selectedItems, inputValue],
        )
        const {
            getSelectedItemProps,
            getDropdownProps,
            addSelectedItem,
            removeSelectedItem,
        } = useMultipleSelection({
            selectedItems,
            onStateChange({selectedItems: newSelectedItems, type}) {
                switch (type) {
                    case useMultipleSelection.stateChangeTypes
                        .SelectedItemKeyDownBackspace:
                    case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete:
                    case useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:
                    case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
                        newSelectedItems && setSelectedItems(newSelectedItems)
                        break
                    default:
                        break
                }
            },
        })
        const {
            isOpen,
            getToggleButtonProps,
            getLabelProps,
            getMenuProps,
            getInputProps,
            getComboboxProps,
            highlightedIndex,
            getItemProps,
            selectedItem,
        } = useCombobox({
            items,
            itemToString(item) {
                return item ? item.title : ''
            },
            defaultHighlightedIndex: 0, // after selection, highlight the first item.
            selectedItem: null,
            stateReducer(state, actionAndChanges) {
                const {changes, type} = actionAndChanges

                switch (type) {
                    case useCombobox.stateChangeTypes.InputKeyDownEnter:
                    case useCombobox.stateChangeTypes.ItemClick:
                    case useCombobox.stateChangeTypes.InputBlur:
                        return {
                            ...changes,
                            ...(changes.selectedItem && {isOpen: true, highlightedIndex: 0}),
                        }
                    default:
                        return changes
                }
            },
            onStateChange({
                              inputValue: newInputValue,
                              type,
                              selectedItem: newSelectedItem,
                          }) {
                switch (type) {
                    case useCombobox.stateChangeTypes.InputKeyDownEnter:
                    case useCombobox.stateChangeTypes.ItemClick:
                        (selectedItems && newSelectedItem) && setSelectedItems([...selectedItems, newSelectedItem])
                        break

                    case useCombobox.stateChangeTypes.InputChange:
                        newInputValue && setInputValue(newInputValue)

                        break
                    default:
                        break
                }
            },
        })

        return (
            <View>
                <View>
                    <Label  {...getLabelProps()}>
                        Choose an element:
                    </Label>
                    <View>
                        {selectedItems.map(function renderSelectedItem(
                            selectedItemForRender,
                            index,
                        ) {
                            return (
                                <View
                                    key={`selected-item-${index}`}
                                    {...getSelectedItemProps({
                                        selectedItem: selectedItemForRender,
                                        index,
                                    })}
                                >
                                    <Text>{selectedItemForRender.title}</Text>
                                    <Pressable
                                        onPress={e => {
                                            e.stopPropagation()
                                            removeSelectedItem(selectedItemForRender)
                                        }}
                                    >
                                        <Text>&#10005;</Text>
                                    </Pressable>
                                </View>
                            )
                        })}
                        <View {...getComboboxProps()}>
                            <LmInput
                                placeholder="Best book ever"
                                {...getInputProps(getDropdownProps({preventKeyAction: isOpen}))}
                            />
                            <LmButton
                                aria-label="toggle menu"
                                className="px-2"
                                type="button"
                                {...getToggleButtonProps()}
                            >
                                &#8595;
                            </LmButton>
                        </View>
                    </View>
                </View>
                <View
                    {...getMenuProps()}
                    className="absolute p-0 bg-white shadow-md max-h-80 overflow-scroll w-inherit"
                >
                    {isOpen &&
                        items.map((item, index) => (
                            <ListItem
                                key={`${item.title}${index}`}
                                {...getItemProps({item, index})}
                            >
                                <Text>{item.title}</Text>
                                <Text>{item.author}</Text>
                            </ListItem>
                        ))}
                </View>
            </View>
        )
    }

    return <MultipleComboBox/>
}