import { View } from 'react-native'
import { PropsWithChildren } from 'react'
import { Stack } from 'expo-router'

export function AppShell({
  children,
  title,
}: PropsWithChildren<{
  title: string
}>) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Stack.Screen options={{ title }} />
      {children}
    </View>
  )
}
