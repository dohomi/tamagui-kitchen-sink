import {EditorOptions} from "@tiptap/react";
import {StackPropsBase} from "tamagui";

export type LmRichTextProps = {
    options?: Partial<EditorOptions>
    onChange?: (text: string) => void
    value?: string
    containerProps?: StackPropsBase
}