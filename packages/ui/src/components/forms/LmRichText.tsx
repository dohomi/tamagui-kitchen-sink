import {useQuill} from "react-quilljs";
import {Button, Stack, StackPropsBase, XStack} from "tamagui";
import 'quill/dist/quill.snow.css';
import {QuillOptionsStatic} from "quill";
import {useEffect} from "react";

export type LmRichTextProps = {
    options?: QuillOptionsStatic
    onChange?: (text: string) => void
    value?: string
    containerProps?: StackPropsBase
    toolbarId?: string
}

export function LmRichText({options, value = '', onChange, toolbarId = 'toolbar', containerProps}: LmRichTextProps) {
    const {quill, quillRef} = useQuill({
        ...options,
        modules: {
            ...options?.modules,
            toolbar: options?.modules?.toolbar ?? `#${toolbarId}`
        },
        formats: options?.formats ?? ["size", "bold", "italic", "list"],
    });

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
            {!options?.modules?.toolbar && (
                <XStack id={toolbarId}>
                    <Button className={'ql-bold'} circular size={'$2'} chromeless/>
                    <Button className={'ql-italic'} circular size={'$2'} chromeless/>
                    <Button className={'ql-list'} value={'ordered'} circular size={'$2'} chromeless/>
                    <Button className={'ql-list'} value={'bullet'} circular size={'$2'} chromeless/>
                </XStack>
            )}
            <Stack ref={quillRef}/>
        </Stack>
    );
}
