import {Editor} from "@tiptap/react";
import {Bold, Italic, List, ListOrdered, Quote, Redo, Strikethrough, Undo} from "@tamagui/lucide-icons";
import {Button, XStack} from "tamagui";
import {LmSelect} from "../LmSelect";

export function LmTipTapToolbar({editor}: { editor: Editor | null }) {
    if (!editor) {
        return null
    }

    return (
        <XStack alignItems={'center'}
                borderBottomColor={'$borderColor'}
                borderBottomWidth={1}
        >
            <Button
                chromeless
                onPress={() => editor.chain().focus().toggleBold().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleBold()
                        .run()
                }
                className={editor.isActive('bold') ? 'is-active' : ''}
                icon={Bold}
            />
            <Button
                chromeless
                onPress={() => editor.chain().focus().toggleItalic().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleItalic()
                        .run()
                }
                className={editor.isActive('italic') ? 'is-active' : ''}
                icon={Italic}
            />
            <Button
                chromeless
                onPress={() => editor.chain().focus().toggleStrike().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleStrike()
                        .run()
                }
                className={editor.isActive('strike') ? 'is-active' : ''}
                icon={Strikethrough}
            />

            <LmSelect
                options={[
                    {value: 1, label: 'H1'}, {value: 2, label: 'H2'}, {
                        value: 3,
                        label: 'H3'
                    }, {value: 4, label: 'h4'}, {value: 'p', label: 'P'}]}
                onValueChange={(value) => {
                    if (value === 'p') {
                        editor.chain().focus().setParagraph().run()
                    } else {
                        editor.chain().focus().toggleHeading({
                            level: Number(value) as any
                        }).run()
                    }
                }}/>
            <Button
                chromeless
                icon={List}
                onPress={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'is-active' : ''}
            />
            <Button
                chromeless
                icon={ListOrdered}
                onPress={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? 'is-active' : ''}
            />

            <Button
                chromeless
                icon={Quote}
                onPress={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive('blockquote') ? 'is-active' : ''}
            />

            <Button
                chromeless
                icon={Undo}
                onPress={() => editor.chain().focus().undo().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .undo()
                        .run()
                }
            />
            <Button
                chromeless
                icon={Redo}
                onPress={() => editor.chain().focus().redo().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .redo()
                        .run()
                }
            />
        </XStack>
    )
}
