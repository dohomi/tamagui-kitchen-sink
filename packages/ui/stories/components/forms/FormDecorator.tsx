import {LmFormRfhProvider} from "../../../src/components/forms/rhf/LmFormRfhProvider";

export const StorybookRhfDecorator = (Story) => (
    <LmFormRfhProvider>
        <Story/>
    </LmFormRfhProvider>
)