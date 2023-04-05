import React from 'react'
import { Activity, Airplane, Quotes, Star } from 'tamagui-phosphor-icons'
import { LmAppShell } from 'app/src/components/layouts/LmAppShell'
import { SizableText, XStack } from 'tamagui'

export default function IconsScreen() {
  return (
    <LmAppShell title={'Icons'}>
      <SizableText>Lucide icons</SizableText>
      <XStack space>
        <Star />
        <Quotes />
      </XStack>
      <SizableText>Phosphor icons</SizableText>
      <XStack space>
        <Airplane />
        <Activity />
      </XStack>
    </LmAppShell>
  )
}
