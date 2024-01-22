import { EditorOptions } from '@tiptap/react'
import { StackProps } from 'tamagui'

export type LmRichTextProps = {
  options?: Partial<EditorOptions>
  onChange?: (text: string) => void
  value?: string
  containerProps?: Omit<StackProps, 'children' | 'asChild'>
}
