import {LmFormRhfProvider, LmRichTextRhf} from "../../../src";
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
