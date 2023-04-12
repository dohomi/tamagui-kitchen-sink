import { Provider } from 'app/src/provider'
import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { LmThemeToggle } from 'app/src/components/various/LmThemeToggle'

export default function Root() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })
  if (!loaded) {
    return null
  }

  return (
    <Provider>
      <Stack
        initialRouteName={'index'}
        screenOptions={{
          headerRight: () => <LmThemeToggle />,
        }}
      />
    </Provider>
  )
}
