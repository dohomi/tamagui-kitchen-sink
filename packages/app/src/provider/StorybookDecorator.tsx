import { LmTamaguiProvider } from './LmTamaguiProvider'
import { YStack } from 'tamagui'

export const StorybookDecorator = (Story, args: any) => {
  // The theme global we just declared
  const { theme: themeKey } = args.globals
  // const name = useThemeState((state) => state.name)
  let theme = themeKey
  if (!theme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // dark mode
    theme = 'dark'
  }
  return (
    <>
      <LmTamaguiProvider defaultTheme={theme}>
        <YStack backgroundColor={'$backgroundStrong'} padding={'$4'} flexGrow={1}>
          <Story />
        </YStack>
      </LmTamaguiProvider>
    </>
  )
}
