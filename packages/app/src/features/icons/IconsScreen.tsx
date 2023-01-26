import { Text, YStack } from 'tamagui-extras'
import { Star } from '@tamagui/lucide-icons'
import { LmAppShell } from 'app/src/components/layouts/LmAppShell'
import { Warning } from 'tamagui-phosphor-icons'

export default function IconsScreen() {
  return (
    <LmAppShell title={'Icons'}>
      <Text>Lucide icons</Text>
      <YStack>
        <Star />
      </YStack>
      <Text>Phosphor icons</Text>
      <YStack>
        <Warning />
      </YStack>
    </LmAppShell>
  )
}
