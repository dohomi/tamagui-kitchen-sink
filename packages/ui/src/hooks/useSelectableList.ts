import {useCallback, useState} from "react";
import type {TypeOfCall} from "./hookTypes";
import {warnIfBothValueAndIndexAreProvided} from "./hookTypes";


type Selection<T> = [number, T];

type UseSelectableListReturnType<T> = [
    Selection<T>,
    {
        matchSelection: (parameters: TypeOfCall) => boolean;
        toggleSelection: (parameters: TypeOfCall) => () => void;
    }
];

/**
 * useSelectableList
 * Easily select a single value from a list of values. very useful for radio buttons, select inputs  etc.
 *
 * @param list - The list of values to select from
 * @param initialIndex  - The index of the initial selection
 * @param allowUnselected
 * @see https://react-hooks.org/docs/useSelectableList
 */
function useSelectableList<T>(
    list: T[] = [],
    initialIndex = 0,
    allowUnselected = false,
    valueKey: keyof T
): UseSelectableListReturnType<T> {
    const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
    const currentValue = list[currentIndex];
    const selection: Selection<T> = [currentIndex, currentValue];

    const toggleSelection = useCallback(
        ({index, value}: TypeOfCall) => {
            return () => {
                warnIfBothValueAndIndexAreProvided("toggleSelection", {index, value});
                if (typeof index !== "undefined") {
                    if (currentIndex === index) {
                        if (allowUnselected) {
                            setCurrentIndex(-1);
                        } else {
                            console.warn("allowUnselected is false. Cannot unselect item");
                        }
                    } else {
                        setCurrentIndex(index);
                    }
                } else if (typeof value !== "undefined") {
                    const valueIndex = list.findIndex(i => i[valueKey] === value);

                    if (valueIndex > -1) {
                        if (currentIndex === valueIndex) {
                            if (allowUnselected) {
                                setCurrentIndex(-1);
                            } else {
                                console.warn("allowUnselected is false. Cannot unselect item");
                            }
                        } else {
                            setCurrentIndex(valueIndex);
                        }
                    } else {
                        console.log("as");

                        console.warn(
                            `toggleSelection failed. Does the value ${value} exist in the list?`
                        );
                    }
                }
            };
        },
        [allowUnselected, currentIndex, list]
    );

    const matchSelection = useCallback(
        ({index, value}: TypeOfCall): boolean => {
            warnIfBothValueAndIndexAreProvided("matchSelection", {index, value});
            if (typeof index !== "undefined") {
                return index === currentIndex;
            } else {
                return value === currentValue[valueKey];
            }
        },
        [currentIndex, currentValue]
    );

    const controls = {
        matchSelection,
        toggleSelection,
    };

    return [selection, controls];
}

export {useSelectableList};