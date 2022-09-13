import {LmFormRhfProvider} from "../../../src/components/forms/rhf/LmFormRhfProvider";

export const StorybookRhfDecorator = (Story) => (
    <LmFormRhfProvider>
        <Story/>
    </LmFormRhfProvider>
)