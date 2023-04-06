import { getDocumentAsync } from 'expo-document-picker'
import { LmButton } from '../components/core/form'
import { LmFilePickerProps } from './filePickerTypes'

export function LmFilePicker({
  documentPickerOptions,
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
            ...documentPickerOptions,
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
    >
      {label}
    </LmButton>
  )
}
