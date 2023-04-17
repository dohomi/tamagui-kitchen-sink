import { DocumentPickerOptions, DocumentResult } from 'expo-document-picker'
import { StackPropsBase } from 'tamagui'
import { LmButtonProps } from '@tamagui-extras/core'

export type LmFilePickerProps = LmButtonProps & {
  label?: string
  documentPickerOptions?: DocumentPickerOptions
  onChange?: (files: DocumentResult) => Promise<void> | void
}

export type LmFileProps = {
  containerProps?: StackPropsBase
  uploadButtonProps?: LmButtonProps & {
    label?: string
  }
  cancelButtonProps?: LmButtonProps & {
    label?: string
  }
  pickerButtonProps?: LmFilePickerProps
  onUpload: (files: DocumentResult) => Promise<void> | void
  directUpload?: boolean
}
