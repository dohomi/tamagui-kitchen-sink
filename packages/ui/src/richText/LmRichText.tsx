import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Stack } from 'tamagui'
import { LmTipTapToolbar } from './LmTipTapMenuBar'
import { LmRichTextProps } from './richTextTypes'
import './proseMirror.css'

export function LmRichText({
  containerProps,
  value = '<p>Please start typing..',
  onChange,
  options,
}: LmRichTextProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    editorProps: {
      attributes: {
        style: 'outline: none;',
      },
    },
    onUpdate: ({ editor }) => {
      if (onChange) {
        onChange(editor.getHTML())
      }
    },
    ...options,
  })
  // todo: two times enter necessary

  return (
    <>
      <Stack marginBottom={54} borderColor={'$borderColor'} borderWidth={1} {...containerProps}>
        <LmTipTapToolbar editor={editor} />
        <EditorContent editor={editor} style={{ padding: '8px' }} />
      </Stack>
    </>
  )
}
