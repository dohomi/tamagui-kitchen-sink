import '@tamagui/core/reset.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import 'raf/polyfill' // const OriginalNextImage = NextImage.default
import { TamaguiProvider, YStack } from 'tamagui'
import { Preview } from '@storybook/react'
import { IconContextProvider } from 'tamagui-phosphor-icons'
import config from '../src/global'

const decorators = [
  (Story, args: any) => {
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
        <TamaguiProvider config={config} defaultTheme={theme}>
          <IconContextProvider value={{ color: '$color' }}>
            <YStack bc={'$backgroundStrong'} padding={'$4'} flexGrow={1}>
              <Story />
            </YStack>
          </IconContextProvider>
        </TamaguiProvider>
      </>
    )
  },
]

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      title: 'Theme',
      description: 'Theme for your components',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        dynamicTitle: true,
        items: [
          { value: 'light', left: '☀️', title: 'Light Mode' },
          { value: 'dark', left: '🌙', title: 'Dark Mode' },
        ],
      },
    },
  },
  decorators,
}

export default preview
