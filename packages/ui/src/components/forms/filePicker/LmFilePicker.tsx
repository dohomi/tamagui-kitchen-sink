import {getDocumentAsync} from 'expo-document-picker'

import {LmButton} from "../LmButton";
import {LmFilePickerProps} from "./filePickerTypes";


export function LmFilePicker({
                                 nativePickerOptions,
                                 webPickerOptions,
                                 label,
                                 onChange,
                                 ...buttonProps
                             }: LmFilePickerProps) {
    return (
        <LmButton
            {...buttonProps}
            onPress={async () => {
                try {
                    const docs = await getDocumentAsync({
                        ...nativePickerOptions
                    })
                    if (docs && onChange) {
                        onChange(docs)
                    } else {
                        console.log(docs)
                    }
                } catch (e) {
                    console.log(e)
                }
            }}
        >{label}</LmButton>
    )
}