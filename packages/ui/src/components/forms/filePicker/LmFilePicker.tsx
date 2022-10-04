import {useFilePicker} from "use-file-picker";
import {LmButton} from "../LmButton";
import {LmFilePickerProps} from "./filePickerTypes";
import {useEffect} from "react";

export function LmFilePicker({nativePickerOptions, webPickerOptions, onChange, ...buttonProps}: LmFilePickerProps) {

    const [openFileSelector, {plainFiles, loading, errors}] = useFilePicker({
        readAs: 'DataURL',
        ...webPickerOptions
    });

    useEffect(() => {
        if (onChange) {
            onChange(plainFiles)
        }
    }, [plainFiles])

    if (errors.length) {
        return <div>Error...</div>;
    }
    return (
        <LmButton
            {...buttonProps}
            loading={buttonProps.loading || loading}
            onPress={() => {
                openFileSelector()
            }}
        />
    )
}