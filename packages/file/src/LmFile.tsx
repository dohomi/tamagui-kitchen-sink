import { ListItem, Stack, XStack } from 'tamagui'
import { useState } from 'react'
import { LmFileProps } from './filePickerTypes'
import { DocumentResult } from 'expo-document-picker'
import { LmFilePicker } from './LmFilePicker'
import { LmButton } from '@tamagui-extras/core'

export function LmFile({
  pickerButtonProps = { label: 'Pick File' },
  uploadButtonProps = { label: 'Upload' },
  onUpload,
  containerProps,
  directUpload,
  cancelButtonProps = { label: 'Cancel' },
}: LmFileProps) {
  const [result, setFiles] = useState<DocumentResult | null>(null)
  const [isUploading, setUploading] = useState(false)
  const upload = async (res: DocumentResult) => {
    setUploading(true)
    await onUpload(res)
    setUploading(false)
  }
  return (
    <Stack {...containerProps}>
      {result?.type === 'success' &&
        Array.from(result.output ?? []).map((file: File) => (
          <ListItem title={file.name} subTitle={file.type} key={file.name + file.size} />
        ))}
      {result?.type === 'success' ? (
        <XStack space={1}>
          <LmButton
            {...cancelButtonProps}
            onPress={() => {
              setFiles(null)
            }}
          >
            {cancelButtonProps?.label}
          </LmButton>
          <LmButton {...uploadButtonProps} loading={isUploading} onPress={() => upload(result)}>
            {uploadButtonProps.label}
          </LmButton>
        </XStack>
      ) : (
        <LmFilePicker
          {...pickerButtonProps}
          onChange={(files) => {
            if (directUpload) {
              return upload(files)
            } else {
              setFiles(files)
            }
          }}
        />
      )}
    </Stack>
  )
}
