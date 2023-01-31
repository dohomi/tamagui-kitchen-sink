import { Editor } from '@tiptap/react'
import {
  TextBolder,
  TextItalic,
  List,
  ListNumbers,
  Quotes,
  ArrowClockwise,
  TextStrikethrough,
  ArrowCounterClockwise,
} from 'tamagui-phosphor-icons'
import { Button, ThemeName, XStack } from 'tamagui'
import { LmSelect } from '../LmSelect'

export function LmTipTapToolbar({ editor }: { editor: Editor | null }) {
  if (!editor) {
    return null
  }

  const activeThemeColor: ThemeName = 'blue_active'
  return (
    <XStack alignItems={'center'} borderBottomColor={'$borderColor'} borderBottomWidth={1}>
      <Button
        chromeless
        onPress={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        theme={editor.isActive('bold') ? activeThemeColor : undefined}
        icon={<TextBolder />}
      />
      <Button
        chromeless
        onPress={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        theme={editor.isActive('italic') ? activeThemeColor : undefined}
        icon={<TextItalic />}
      />
      <Button
        chromeless
        onPress={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        theme={editor.isActive('strike') ? activeThemeColor : undefined}
        icon={<TextStrikethrough />}
      />

      <LmSelect
        options={[
          { value: 1, label: 'H1' },
          { value: 2, label: 'H2' },
          {
            value: 3,
            label: 'H3',
          },
          { value: 4, label: 'h4' },
          { value: 'p', label: 'P' },
        ]}
        onValueChange={(value) => {
          if (value === 'p') {
            editor.chain().focus().setParagraph().run()
          } else {
            editor
              .chain()
              .focus()
              .toggleHeading({
                level: Number(value) as any,
              })
              .run()
          }
        }}
      />
      <Button
        chromeless
        icon={<List />}
        onPress={() => editor.chain().focus().toggleBulletList().run()}
        theme={editor.isActive('bulletList') ? activeThemeColor : undefined}
      />
      <Button
        chromeless
        icon={<ListNumbers />}
        onPress={() => editor.chain().focus().toggleOrderedList().run()}
        theme={editor.isActive('orderedList') ? activeThemeColor : undefined}
      />

      <Button
        chromeless
        icon={<Quotes />}
        onPress={() => editor.chain().focus().toggleBlockquote().run()}
        theme={editor.isActive('blockquote') ? activeThemeColor : undefined}
      />

      <Button
        chromeless
        icon={<ArrowCounterClockwise />}
        onPress={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      />
      <Button
        chromeless
        icon={<ArrowClockwise />}
        onPress={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      />
    </XStack>
  )
}
