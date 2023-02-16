// import * as NextImage from 'next/image'
// import {Provider} from "app/src/provider";
import '@tamagui/core/reset.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import 'raf/polyfill' // const OriginalNextImage = NextImage.default
//
// Object.defineProperty(NextImage, 'default', {
//   configurable: true,
//   value: (props) => <OriginalNextImage {...props} unoptimized />
// })
import {useThemeState} from 'app/src/state/themeState'
import {Provider} from 'app/src/provider'
import {YStack} from 'tamagui-extras'
import {RouterContext} from 'next/dist/shared/lib/router-context'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // backgrounds: false
  backgrounds: {
    values: [],
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  layout: 'fullscreen',
}

export const globalTypes = {
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
}

export const decorators = [
  (Story, args: any) => {
    // The theme global we just declared
    const { theme: themeKey } = args.globals
    const name = useThemeState((state) => state.name)
    let theme = themeKey
    if (!theme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // dark mode
      theme = 'dark'
    }
    return (
      <>
        <Provider defaultTheme={name || theme}>
          <YStack bc={'$backgroundStrong'} padding={'$4'} flexGrow={1}>
            <Story />
          </YStack>
        </Provider>
      </>
    )
  },
]
