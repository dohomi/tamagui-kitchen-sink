import { useState } from 'react'
import { Paragraph, YStack } from 'tamagui'

export function Home() {
  const [count, setCount] = useState(0)

  return (
    <YStack>
      <Paragraph>hallo</Paragraph>
    </YStack>
  )
}
