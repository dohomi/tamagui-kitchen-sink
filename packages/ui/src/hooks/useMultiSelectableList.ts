import {useCallback, useState} from "react";
import {TypeOfCall, warnIfBothValueAndIndexAreProvided} from "./hookTypes";

type UseMultiSelectableListReturnType<T> = [
    Array<number[] | T[]>,
    {
        matchSelection: (parameters: TypeOfCall) => boolean;
        toggleSelection: (parameters: TypeOfCall) => () => void;
    }
];


/**
 * useMultiSelectableList
 * A custom hook to easily select multiple values from a list
 *
 * @param list - The list of values to select from
 * @param initialSelectIndices - The indices of the initial selections
 * @param allowUnselected - Whether or not to allow unselected values
 * @see https://react-hooks.org/docs/useMultiSelectableList
 */
function useMultiSelectableList<T>(
    list: T[] = [],
    initialSelectIndices: number[] = [0],
    allowUnselected = false,
    valueKey: keyof T
): UseMultiSelectableListReturnType<T> {
    const [currentIndices, setCurrentIndices] = useState(initialSelectIndices);

    const currentValues = currentIndices.map((index) => list[index]);
    const selection = [currentIndices, currentValues];

    const toggleSelectionByIndex = useCallback(
        (index: number) => {
            let newIndices;
            if (!currentIndices.includes(index)) {
                newIndices = [...currentIndices, index];
            } else {
                newIndices = [...currentIndices];
                const indexOfIndex = currentIndices.indexOf(index);
                if (indexOfIndex !== -1) {
                    newIndices.splice(indexOfIndex, 1);
                }
            }

            if (newIndices.length > 0) {
                setCurrentIndices(newIndices);
            } else if (allowUnselected) {
                setCurrentIndices(newIndices);
            } else {
                console.warn(
                    `toggleSelection failed. Do the values exist in the list?`
                );
            }
        },
        [allowUnselected, currentIndices]
    );

    const toggleSelection = useCallback(
        ({index, value}: TypeOfCall) => {
            return () => {
                warnIfBothValueAndIndexAreProvided("toggleSelection", {
                    index,
                    value,
                });
                if (typeof index !== "undefined") {
                    toggleSelectionByIndex(index);
                } else if (typeof value !== "undefined") {
                    const valueIndex = list.findIndex(i => i[valueKey] === value);
                    if (valueIndex > -1) {
                        toggleSelectionByIndex(valueIndex);
                    }
                }
            };
        },
        [list, toggleSelectionByIndex]
    );

    const matchSelection = useCallback(
        ({index, value}: TypeOfCall) => {
            warnIfBothValueAndIndexAreProvided("matchSelection", {index, value});
            if (typeof index !== "undefined") {
                return currentIndices.includes(index);
            } else if (typeof value !== "undefined") {
                return currentValues.some(i => i[valueKey] === value);
            }

            return false;
        },
        [currentIndices, currentValues]
    );

    const controls = {
        matchSelection,
        toggleSelection,
    };

    return [selection, controls];
}

export {useMultiSelectableList};