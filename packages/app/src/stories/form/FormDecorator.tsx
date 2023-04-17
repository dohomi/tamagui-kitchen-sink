import { LmFormRhfProvider } from '@tamagui-extras/form'

export const StorybookRhfDecorator = (Story) => (
  <LmFormRhfProvider>
    <Story />
  </LmFormRhfProvider>
)
