import { Provider } from 'app/src/provider'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useThemeNameState } from 'app/src/state/themeState'
import i18n from '../i18n'
import { I18nextProvider } from 'react-i18next'

export default function Root() {
  const theme = useThemeNameState()
  const isDarkTheme = theme === 'dark'
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })
  if (!loaded) {
    return <SplashScreen />
  }

  return (
    <I18nextProvider i18n={i18n}>
      <Provider>
        <Stack
          initialRouteName={'index'}
          screenOptions={{
            headerStyle: {
              backgroundColor: isDarkTheme ? '#222' : '#f5f5f5',
            },
            headerTintColor: isDarkTheme ? '#fff' : '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerBackTitleVisible: false,
            headerShown: false,
            // headerRight: ({ canGoBack }) => <LmThemeToggle />,
          }}
        />
      </Provider>
    </I18nextProvider>
  )
}
