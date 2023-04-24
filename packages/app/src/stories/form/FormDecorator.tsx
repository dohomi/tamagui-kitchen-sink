import { LmFormRhfProvider } from '../../../../form/src'

export const StorybookRhfDecorator = (Story) => (
  <LmFormRhfProvider>
    <Story />
  </LmFormRhfProvider>
)
