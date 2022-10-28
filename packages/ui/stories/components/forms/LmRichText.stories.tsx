import React from "react";
import {LmFormRhfProvider, LmRichTextRhf, YStack} from "../../../src";
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
    <LmFormRhfProvider>
        {/*<LmRichTextRhf toolbarId="first" name={'rich-text'}/>
        <LmRichTextRhf toolbarId="test" name={'rich-text2'}/>*/}
    </LmFormRhfProvider>
)