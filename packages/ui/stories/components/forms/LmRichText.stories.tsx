import React from "react";
import {LmFormRhfProvider, LmRichTextRhf, LmSubmitButtonRhf} from "../../../src";
import {ComponentMeta} from "@storybook/react";

export default {
    title: 'ui/Forms/Rich Text Editor',
    component: LmRichTextRhf
} as ComponentMeta<typeof LmRichTextRhf>;

export const Basic = () => (
    <LmFormRhfProvider>
        <LmRichTextRhf name={'rich-text'}/>
    </LmFormRhfProvider>
)

export const Multiple = () => (
    <LmFormRhfProvider defaultValues={{'rich-text': '<h3>Hello World</h3><p>This is some preset text...</p>'}}>
        <LmRichTextRhf name={'rich-text'}/>
        <LmRichTextRhf name={'rich-text2'}/>
        <LmSubmitButtonRhf onSubmit={form => console.log(form)}>Submit</LmSubmitButtonRhf>
    </LmFormRhfProvider>
)