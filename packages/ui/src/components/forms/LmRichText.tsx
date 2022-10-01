import {useQuill} from "react-quilljs";
import {Stack, StackPropsBase} from "tamagui";
import 'quill/dist/quill.snow.css';
import {QuillOptionsStatic} from "quill";
import {useEffect} from "react";

export type LmRichTextProps = {
    options?: QuillOptionsStatic
    onChange?: (text: string) => void
    value?: string
    containerProps?: StackPropsBase
}

export function LmRichText({options, value = '', onChange, containerProps}: LmRichTextProps) {
    const {quill, quillRef} = useQuill(options);

    useEffect(() => {
        if (quill) {
            quill.on('text-change', (delta, oldDelta, source) => {
                if (typeof onChange === 'function') {
                    onChange(quill.root.innerHTML)
                }
            })
        }
    }, [onChange, quill])

    useEffect(() => {
        if (quill && value) {
            quill.clipboard.dangerouslyPasteHTML(value)
        }
    }, [quill]) // important: dont add value to dependencies
    return (
        <Stack width={'100%'} height={200} {...containerProps}>
            <Stack ref={quillRef}/>
        </Stack>
    );
}
