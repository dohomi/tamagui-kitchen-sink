import React from 'react'
import { Text } from 'tamagui-extras'
import { Quotes, Star } from 'tamagui-phosphor-icons'
import { LmAppShell } from 'app/src/components/layouts/LmAppShell'
import { Activity, Airplane } from 'tamagui-phosphor-icons'
import { XStack } from 'tamagui'

export default function IconsScreen() {
  return (
    <LmAppShell title={'Icons'}>
      <Text>Lucide icons</Text>
      <XStack space>
        <Star />
        <Quotes />
      </XStack>
      <Text>Phosphor icons</Text>
      <XStack space>
        <Airplane />
        <Activity />
      </XStack>
    </LmAppShell>
  )
}
