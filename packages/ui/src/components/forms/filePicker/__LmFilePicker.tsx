import {LmButton} from "../LmButton";
import {LmFilePickerProps} from "./filePickerTypes";
import {useFilePicker} from "use-file-picker";
import {useEffect} from "react";

// UNUSED FILE

export function __LmFilePicker({
                                   documentPickerOptions,
                                   label,
                                   onChange,
                                   ...buttonProps
                               }: LmFilePickerProps) {
    const [openFileSelector, {filesContent, loading}] = useFilePicker({
        accept: ['*/*']
    });

    useEffect(
        () => {
            if (Array.isArray(filesContent) && filesContent.length > 0 && !loading) {
                // @ts-ignore
                onChange({
                    type: "success",
                    output: filesContent as unknown as FileList
                })
            }
        }, [filesContent, loading]
    )
    buttonProps.children = label || buttonProps.children
    return (
        <LmButton
            {...buttonProps}
            loading={!!loading}
            onPress={() => openFileSelector()}
        />
    )
}