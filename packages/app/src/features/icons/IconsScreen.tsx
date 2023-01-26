import { Text } from 'tamagui-extras'
import { Quote, Star } from '@tamagui/lucide-icons'
import { LmAppShell } from 'app/src/components/layouts/LmAppShell'
import { Activity, Warning } from 'tamagui-phosphor-icons'
import { XStack } from 'tamagui'

export default function IconsScreen() {
  return (
    <LmAppShell title={'Icons'}>
      <Text>Lucide icons</Text>
      <XStack space>
        <Star />
        <Quote />
      </XStack>
      <Text>Phosphor icons</Text>
      <XStack space>
        <Warning />
        <Activity />
      </XStack>
    </LmAppShell>
  )
}
