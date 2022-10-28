import {Stack, StackPropsBase} from "tamagui";

import {QuillOptionsStatic} from "quill";
import QuillEditor, {QuillToolbar} from "react-native-cn-quill";
import {createRef} from "react";

export type LmRichTextProps = {
    options?: QuillOptionsStatic
    onChange?: (text: string) => void
    value?: string
    containerProps?: StackPropsBase
}

export function LmRichText({options, containerProps}: LmRichTextProps) {

    const _editor = createRef<QuillEditor>()
    return (
        <Stack {...containerProps}>
            <QuillEditor
                ref={_editor}
                initialHtml="<h1>Quill Editor for react-native</h1>"
            />
            <QuillToolbar editor={_editor} options="full" theme="light"/>
        </Stack>
    )
}
