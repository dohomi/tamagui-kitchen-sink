import React from 'react'
import { LmDashboardShellProps } from 'app/src/components/layouts/layoutTypes'
import { LmThemeToggle } from 'app/src/components/various/LmThemeToggle'
import { useToggleMainDrawer } from 'app/src/state/appState'
import { H3, XStack } from 'tamagui'
import { ListRegular, LmButton, SunRegular } from '@tamagui-extras/core'

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
        icon={<ListRegular />}
        size={'$4'}
        circular
        chromeless
        onPress={() => {
          toggleMainDrawer()
        }}
      />

      <H3 flexGrow={1}>{title}</H3>
      <LmThemeToggle icon={<SunRegular />} size={'$4'} circular />
      {rightContent}
    </XStack>
  )
}
