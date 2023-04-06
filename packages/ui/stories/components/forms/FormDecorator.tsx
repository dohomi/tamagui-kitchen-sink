import { LmFormRhfProvider } from '../../../src/form'

export const StorybookRhfDecorator = (Story) => (
  <LmFormRhfProvider>
    <Story />
  </LmFormRhfProvider>
)
