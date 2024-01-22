import { DocumentPickerOptions, DocumentPickerResult } from 'expo-document-picker'
import { StackProps } from 'tamagui'
import { LmButtonProps } from '@tamagui-extras/core'

export type LmFilePickerProps = LmButtonProps & {
  label?: string
  documentPickerOptions?: DocumentPickerOptions
  onChange?: (files: DocumentPickerResult) => Promise<void> | void
}

export type LmFileProps = {
  containerProps?: Omit<StackProps, 'children' | 'asChild'>
  uploadButtonProps?: LmButtonProps & {
    label?: string
  }
  cancelButtonProps?: LmButtonProps & {
    label?: string
  }
  pickerButtonProps?: LmFilePickerProps
  onUpload: (files: DocumentPickerResult) => Promise<void> | void
  directUpload?: boolean
}
