import {DocumentPickerOptions} from "react-native-document-picker";
import {UseFilePickerConfig} from "use-file-picker";
import {LmButtonProps} from "../LmButton";

export type LmFilePickerProps = LmButtonProps & {
    nativePickerOptions?: DocumentPickerOptions<any>
    webPickerOptions?: UseFilePickerConfig
    onChange?: (files: File[]) => Promise<void> | void
}

export type LmFileProps = {
    uploadButtonProps: LmButtonProps
    pickerProps: LmFilePickerProps
    onUpload: (files: File[]) => Promise<void>
}

