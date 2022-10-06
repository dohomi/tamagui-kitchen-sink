import {ListItem, Stack, XStack} from "tamagui";
import {useState} from "react";
import {LmFileProps} from "./filePickerTypes";
import {LmButton} from "../LmButton";
import {DocumentResult} from "expo-document-picker";
import {LmFilePicker} from "./LmFilePicker";

export {LmFileProps}

export function LmFile({
                           pickerButtonProps,
                           uploadButtonProps,
                           onUpload,
                           containerProps,
                           cancelButtonProps
                       }: LmFileProps) {
    const [result, setFiles] = useState<DocumentResult | null>(null)
    const [isUploading, setUploading] = useState(false)
    return (
        <Stack {...containerProps}>
            {result?.type === 'success' && Array.from(result.output ?? []).map((file: File) => (
                <ListItem title={file.name} subTitle={file.type} key={file.name + file.size}/>
            ))}
            {result?.type === 'success' ? (
                <XStack space={1}>
                    <LmButton {...cancelButtonProps}
                              onPress={() => {
                                  setFiles(null)
                              }}>
                        {cancelButtonProps?.label}
                    </LmButton>
                    <LmButton {...uploadButtonProps}
                              loading={isUploading}
                              onPress={async () => {
                                  setUploading(true)
                                  try {
                                      await onUpload(result)
                                  } catch (e) {
                                      console.error(e)
                                  }
                                  setUploading(false)
                              }}
                    >{uploadButtonProps.label}</LmButton>
                </XStack>
            ) : (
                <LmFilePicker
                    {...pickerButtonProps}
                    onChange={files => {
                        setFiles(files)
                    }}/>
            )}
        </Stack>
    )
}