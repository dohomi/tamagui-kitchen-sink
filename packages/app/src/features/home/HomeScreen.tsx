import React from 'react'
import { Anchor, Button, H1, Paragraph, Separator, XStack, YStack } from 'tamagui'
import { CaretDown } from 'tamagui-phosphor-icons'
import { LmThemeToggle } from 'app/src/components/various/LmThemeToggle'
import { useToggleMainDrawer } from 'app/src/state/appState'
import { LmAppDrawer } from 'app/src/components/layouts/LmAppDrawer'
import { LmAppShell } from 'app/src/components/layouts/LmAppShell'

export function HomeScreen() {
  return (
    <LmAppShell title={'Home'}>
      <YStack space="$4" maxWidth={600}>
        <H1 textAlign="center">Welcome to Tamagui.</H1>
        <Separator />
        <Paragraph textAlign="center" size={'$2'}>
          Tamagui is made by{' '}
          <Anchor href="https://twitter.com/natebirdman" target="_blank">
            Nate Wienert
          </Anchor>
          , give it a star{' '}
          <Anchor href="https://github.com/tamagui/tamagui" target="_blank" rel="noreferrer">
            on Github
          </Anchor>
          .
        </Paragraph>
      </YStack>

      <XStack>
        <LmThemeToggle>Toggle theme</LmThemeToggle>
      </XStack>
    </LmAppShell>
  )
}

function SheetDemo() {
  const toggleMainDrawer = useToggleMainDrawer()

  return (
    <>
      <Button size="$6" icon={<CaretDown />} circular onPress={() => toggleMainDrawer()} />
      <LmAppDrawer />
    </>
  )
}
