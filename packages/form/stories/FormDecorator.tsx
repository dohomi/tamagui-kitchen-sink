import { LmFormRhfProvider } from '../../core/src/form'

export const StorybookRhfDecorator = (Story) => (
  <LmFormRhfProvider>
    <Story />
  </LmFormRhfProvider>
)
