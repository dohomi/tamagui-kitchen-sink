import {LmFormRhfProvider} from "../../../src/components/form";

export const StorybookRhfDecorator = (Story) => (
    <LmFormRhfProvider>
        <Story/>
    </LmFormRhfProvider>
)