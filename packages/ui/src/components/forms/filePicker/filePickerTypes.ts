import {DocumentPickerOptions, DocumentResult} from "expo-document-picker";
import {LmButtonProps} from "../LmButton";
import {StackPropsBase} from "tamagui";


export type LmFilePickerProps = LmButtonProps & {
    label?: string
    documentPickerOptions?: DocumentPickerOptions
    onChange?: (files: DocumentResult) => Promise<void> | void
}

export type LmFileProps = {
    containerProps?: StackPropsBase
    uploadButtonProps: LmButtonProps & {
        label?: string
    }
    cancelButtonProps: LmButtonProps & {
        label?: string
    }
    pickerButtonProps: LmFilePickerProps
    onUpload: (files: DocumentResult) => Promise<void> | void
}

