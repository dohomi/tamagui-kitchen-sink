import {useEffect, useState} from 'react'
import DocumentPicker, {
    DirectoryPickerResponse,
    DocumentPickerResponse,
    isInProgress
} from 'react-native-document-picker'
import {LmButton} from "../LmButton";
import {LmFilePickerProps} from "./filePickerTypes";


export function LmFilePicker({nativePickerOptions, webPickerOptions, ...buttonProps}: LmFilePickerProps) {
    const [result, setResult] = useState<Array<DocumentPickerResponse> | DirectoryPickerResponse | undefined | null>()

    useEffect(() => {
        console.log(JSON.stringify(result, null, 2))
    }, [result])

    const handleError = (err: unknown) => {
        if (DocumentPicker.isCancel(err)) {
            console.warn('cancelled')
            // User cancelled the picker, exit any dialogs or menus and move on
        } else if (isInProgress(err)) {
            console.warn('multiple pickers were opened, only the last will be considered')
        } else {
            throw err
        }
    }

    return (
        <LmButton
            {...buttonProps}
            onPress={() => {
                DocumentPicker.pick({
                    ...nativePickerOptions
                })
                    .then(setResult)
                    .catch(handleError)
            }}
        />
    )
}