import React, { PropsWithChildren } from 'react'
import { YStack } from 'tamagui'
import { LmAppDrawer } from 'app/src/components/layouts/LmAppDrawer'
import { useThemeNameState } from 'app/src/state/themeState'
import { LmAppBar } from 'app/src/components/layouts/LmAppBar'
import { SafeAreaView } from 'react-native-safe-area-context'

export function LmAppShell({ children, title }: PropsWithChildren<{ title?: string }>) {
  const theme = useThemeNameState()
  const isDarkTheme = theme === 'dark'
  console.log(isDarkTheme)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LmAppBar title={title || 'Demo'} />

      <YStack
        backgroundColor={'$backgroundStrong'}
        flex={1}
        justifyContent="center"
        alignItems="center"
        padding="$4"
        space
      >
        {children}
        <LmAppDrawer />
      </YStack>
    </SafeAreaView>
  )
}
