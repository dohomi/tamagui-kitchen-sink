import {DocumentPickerOptions, DocumentResult} from "expo-document-picker";
import {UseFilePickerConfig} from "use-file-picker";
import {LmButtonProps} from "../LmButton";
import {StackPropsBase} from "tamagui";

export type LmFilePickerProps = LmButtonProps & {
    label?: string
    nativePickerOptions?: DocumentPickerOptions
    webPickerOptions?: UseFilePickerConfig
    onChange?: (files: DocumentResult) => Promise<void> | void
}

export type LmFileProps = {
    containerProps?: StackPropsBase
    uploadButtonProps: LmButtonProps & {
        label?: string
    }
    pickerProps: LmFilePickerProps
    onUpload: (files: DocumentResult) => Promise<void> | void
}

