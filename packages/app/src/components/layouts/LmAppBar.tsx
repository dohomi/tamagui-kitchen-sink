import React from 'react'
import { LmDashboardShellProps } from 'app/src/components/layouts/layoutTypes'
import { LmThemeToggle } from 'app/src/components/various/LmThemeToggle'
import { useToggleMainDrawer } from 'app/src/state/appState'
import { H3, XStack } from 'tamagui'
import { LmButton } from '@tamagui-extras/core'
import { List, Sun } from 'tamagui-phosphor-icons'

type LmDashboardAppBarProps = Pick<LmDashboardShellProps, 'rightContent' | 'title'>

export function LmAppBar({ title, rightContent }: LmDashboardAppBarProps) {
  const toggleMainDrawer = useToggleMainDrawer()
  return (
    <XStack
      position={'sticky' as 'absolute'}
      top={'$0'}
      zIndex={1100}
      elevation={'$5'}
      height={64}
      alignItems={'center'}
      paddingHorizontal={'$2'}
      justifyContent={'space-between'}
      backgroundColor={'$background'}
      space
    >
      <LmButton
        icon={<List />}
        size={'$4'}
        circular
        chromeless
        onPress={() => {
          toggleMainDrawer()
        }}
      />

      <H3 flexGrow={1}>{title}</H3>
      <LmThemeToggle icon={<Sun />} size={'$4'} circular />
      {rightContent}
    </XStack>
  )
}
