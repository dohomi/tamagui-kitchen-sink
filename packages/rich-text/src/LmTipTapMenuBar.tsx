import { Editor } from '@tiptap/react'
import {
  ArrowClockwiseRegular,
  ArrowCounterClockwiseRegular,
  ListNumbersRegular,
  ListRegular,
  QuotesRegular,
  TextBolderRegular,
  TextItalicRegular,
  TextStrikethroughRegular,
} from '@tamagui-extras/core'
import { Button, ColorTokens, XStack } from 'tamagui'
import { LmSelect } from '@tamagui-extras/form'

export function LmTipTapToolbar({ editor }: { editor: Editor | null }) {
  if (!editor) {
    return null
  }

  const activeThemeColor: ColorTokens = '$blue10'

  return (
    <XStack alignItems={'center'} borderBottomColor={'$borderColor'} borderBottomWidth={1}>
      <Button
        chromeless
        onPress={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        icon={<TextBolderRegular color={editor.isActive('bold') ? activeThemeColor : undefined} />}
      />
      <Button
        chromeless
        onPress={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        icon={
          <TextItalicRegular color={editor.isActive('italic') ? activeThemeColor : undefined} />
        }
      />
      <Button
        chromeless
        onPress={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        icon={
          <TextStrikethroughRegular
            color={editor.isActive('strike') ? activeThemeColor : undefined}
          />
        }
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
        icon={<ListRegular color={editor.isActive('bulletList') ? activeThemeColor : undefined} />}
        onPress={() => editor?.chain().focus().toggleBulletList().run()}
        disabled={!editor?.can().chain().focus().toggleBulletList().run()}
      />
      <Button
        chromeless
        icon={
          <ListNumbersRegular
            color={editor.isActive('orderedList') ? activeThemeColor : undefined}
          />
        }
        onPress={() => editor?.chain().focus().toggleOrderedList().run()}
        disabled={!editor?.can().chain().focus().toggleOrderedList().run()}
      />

      <Button
        chromeless
        icon={
          <QuotesRegular color={editor.isActive('blockquote') ? activeThemeColor : undefined} />
        }
        onPress={() => editor.chain().focus().toggleBlockquote().run()}
        disabled={!editor.can().chain().focus().toggleBlockquote().run()}
      />

      <Button
        chromeless
        icon={<ArrowCounterClockwiseRegular />}
        onPress={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      />
      <Button
        chromeless
        icon={<ArrowClockwiseRegular />}
        onPress={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      />
    </XStack>
  )
}
