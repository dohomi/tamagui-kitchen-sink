import {EditorContent, EditorOptions, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {Stack, StackPropsBase} from "tamagui";
import {LmTipTapToolbar} from "./LmTipTapMenuBar";

export type LmRichTextProps = {
    options?: Partial<EditorOptions>
    onChange?: (text: string) => void
    value?: string
    containerProps?: StackPropsBase
}



export function LmRichText({containerProps, value = '<p>Please start typing..', onChange, options}: LmRichTextProps) {


    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        content: value,
        editorProps: {
            attributes: {
                style: 'outline: none;'
            }
        },
        onUpdate: ({editor}) => {
            if (onChange) {
                onChange(editor.getHTML())
            }
        },
        ...options
    })


    return (
        <Stack
            marginBottom={54}
            borderColor={'$borderColor'}
            borderWidth={1}
            {...containerProps}
        >
            <LmTipTapToolbar editor={editor}/>
            <EditorContent editor={editor} style={{padding: '8px'}}/>
        </Stack>
    )

}
