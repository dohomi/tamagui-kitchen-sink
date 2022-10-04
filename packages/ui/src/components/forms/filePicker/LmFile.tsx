import {ListItem, Stack} from "tamagui";
import {LmFilePicker} from "./LmFilePicker";
import {useState} from "react";
import {LmFileProps} from "./filePickerTypes";
import {LmButton} from "../LmButton";

export {LmFileProps}

export function LmFile({pickerProps, uploadButtonProps, onUpload}: LmFileProps) {
    const [files, setFiles] = useState<File[]>([])
    const [isUploading, setUploading] = useState(false)
    console.log(files)
    return (
        <Stack>
            {files.map(file => (
                <ListItem title={file.name} subTitle={file.type} key={file.name + file.size}/>
            ))}
            {files.length > 0 ? (
                <LmButton {...uploadButtonProps}
                          loading={isUploading}
                          onPress={async () => {
                              setUploading(true)
                              try {
                                  await onUpload(files)
                              } catch (e) {
                                  console.error(e)
                              }
                              setUploading(false)
                          }}
                />
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