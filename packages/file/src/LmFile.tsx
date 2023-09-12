import { ListItem, Stack, XStack } from 'tamagui'
import { useState } from 'react'
import { LmFileProps } from './filePickerTypes'
import { DocumentPickerResult } from 'expo-document-picker'
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
  const [result, setFiles] = useState<DocumentPickerResult | null>(null)
  const [isUploading, setUploading] = useState(false)
  const upload = async (res: DocumentPickerResult) => {
    setUploading(true)
    await onUpload(res)
    setUploading(false)
  }
  const selectedFileList = result?.output ?? []
  return (
    <Stack {...containerProps}>
      {selectedFileList.length > 0 &&
        Array.from(selectedFileList).map((file: File) => (
          <ListItem title={file.name} subTitle={file.type} key={file.name + file.size} />
        ))}
      {result?.canceled === false ? (
        <XStack space={'$2'}>
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
              console.log({ files })
              setFiles(files)
            }
          }}
        />
      )}
    </Stack>
  )
}
