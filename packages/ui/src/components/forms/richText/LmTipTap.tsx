import {EditorContent, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {QuillOptionsStatic} from "quill";
import {Stack, StackPropsBase} from "tamagui";
import {LmTipTapToolbar} from "./LmTipTapMenuBar";

export type LmRichTextProps = {
    options?: QuillOptionsStatic
    onChange?: (text: string) => void
    value?: string
    containerProps?: StackPropsBase
    toolbarId?: string
}

export function LmRichText({containerProps, value = '<p>Please start typing..'}: LmRichTextProps) {
    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        content: value,
    })

    return (
        <Stack width={'100%'}
               height={200}
               marginBottom={54}
               borderColor={'$borderColor'}
               borderWidth={1}
               {...containerProps}
        >
            <LmTipTapToolbar editor={editor}/>
            <EditorContent editor={editor}/>
        </Stack>
    )
}
