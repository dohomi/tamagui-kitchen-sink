import React from 'react'
import { LmAppShell } from 'app/src/components/layouts/LmAppShell'
import { SizableText, XStack } from 'tamagui'
import { QuotesRegular, StarFill, StarRegular } from '@tamagui-extras/core'

export default function IconsScreen() {
  return (
    <LmAppShell title={'Icons'}>
      <SizableText>Icons</SizableText>
      <XStack space>
        <StarRegular />
        <StarFill />
        <QuotesRegular />
      </XStack>
    </LmAppShell>
  )
}
