import {LmFile} from "../../../src";

export default {
    title: 'ui/Forms/File',
}

export const Basic = () => (
    <LmFile uploadButtonProps={{
        label: 'Upload File'
    }}
            pickerButtonProps={{
                label: 'Pick File'
            }}
            onUpload={(files) => {
                console.log(files)
            }}
    />
)
