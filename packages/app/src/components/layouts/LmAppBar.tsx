import React from 'react'
import { LmDashboardShellProps } from 'app/src/components/layouts/layoutTypes'
import { LmThemeToggle } from 'app/src/components/various/LmThemeToggle'
import { useToggleMainDrawer } from 'app/src/state/appState'
import { XStack } from 'tamagui'
import { H3, LmButton } from 'tamagui-extras'
import { List, Sun } from 'tamagui-phosphor-icons'

type LmDashboardAppBarProps = Pick<LmDashboardShellProps, 'rightContent' | 'title'>

export function LmAppBar({ title, rightContent }: LmDashboardAppBarProps) {
  const toggleMainDrawer = useToggleMainDrawer()
  return (
    <XStack
      position={'sticky' as 'absolute'}
      top={'0px'}
      zIndex={1100}
      elevation={'$5'}
      height={'64px'}
      alignItems={'center'}
      paddingHorizontal={'$2'}
      justifyContent={'space-between'}
      backgroundColor={'$background'}
      space
    >
      <XStack alignItems={'center'} space>
        <LmButton
          icon={<List />}
          circular
          onPress={() => {
            toggleMainDrawer()
          }}
        />

        <H3>{title}</H3>
      </XStack>
      <LmThemeToggle icon={<Sun />} circular />
      {rightContent}
    </XStack>
  )
}
