import { Provider } from 'app/src/provider'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useThemeNameState } from 'app/src/state/themeState'

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
  )
}
