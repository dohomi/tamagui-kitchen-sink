import React from 'react'
import { Meta } from '@storybook/react'
import { LmFormRhfProvider, LmSubmitButtonRhf } from '../../../src/form'
import { LmRichTextRhf } from '../../../src/richText'

export default {
  title: 'richText/Rich Text Editor',
  component: LmRichTextRhf,
} as Meta<typeof LmRichTextRhf>

export const Basic = () => (
  <LmFormRhfProvider>
    <LmRichTextRhf name={'rich-text'} />
  </LmFormRhfProvider>
)

export const Multiple = () => (
  <LmFormRhfProvider
    defaultValues={{ 'rich-text': '<h3>Hello World</h3><p>This is some preset text...</p>' }}
  >
    <LmRichTextRhf name={'rich-text'} />
    <LmRichTextRhf name={'rich-text2'} />
    <LmSubmitButtonRhf onSubmit={(form) => console.log(form)}>Submit</LmSubmitButtonRhf>
  </LmFormRhfProvider>
)
