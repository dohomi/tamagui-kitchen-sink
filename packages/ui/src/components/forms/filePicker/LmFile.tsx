import {ListItem, Stack} from "tamagui";
import {useState} from "react";
import {LmFileProps} from "./filePickerTypes";
import {LmButton} from "../LmButton";
import {LmFilePicker} from "./LmFilePicker";
import {DocumentResult} from "expo-document-picker";

export {LmFileProps}

export function LmFile({pickerProps, uploadButtonProps, onUpload, containerProps}: LmFileProps) {
    const [result, setFiles] = useState<DocumentResult>()
    const [isUploading, setUploading] = useState(false)
    return (
        <Stack {...containerProps}>
            {result?.type === 'success' && Array.from(result.output ?? []).map((file: File) => (
                <ListItem title={file.name} subTitle={file.type} key={file.name + file.size}/>
            ))}
            {result?.type === 'success' ? (
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
            ) : (
                <LmFilePicker
                    {...pickerProps}
                    onChange={files => {
                        setFiles(files)
                    }}/>
            )}
        </Stack>
    )
}