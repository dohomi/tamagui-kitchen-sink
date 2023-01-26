import React, { PropsWithChildren } from 'react'
import { YStack } from 'tamagui-extras'
import { LmAppDrawer } from 'app/src/components/layouts/LmAppDrawer'
import { LmAppBar } from 'app/src/components/layouts/LmAppBar'

export function LmAppShell({ children, title }: PropsWithChildren<{ title?: string }>) {
  return (
    <YStack>
      <LmAppBar title={title || 'Demo'} />
      <YStack
        bc={'$backgroundStrong'}
        flex={1}
        justifyContent="center"
        alignItems="center"
        padding="$4"
        space
      >
        {children}

        <LmAppDrawer />
      </YStack>
    </YStack>
  )
}
