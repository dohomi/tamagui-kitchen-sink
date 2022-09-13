import { Button, Paragraph, YStack } from '@my/ui'
import { ChevronLeft } from '@tamagui/feather-icons'
import React from 'react'
import { createParam } from 'solito'
import { useLink } from 'solito/link'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')
  const linkProps = useLink({ href: '/' })

  return (
    <YStack flex={1} justifyContent="center" alignItems="center" space>
      <Paragraph textAlign="center" fontWeight="800">{`User ID: ${id}`}</Paragraph>
      <Button {...linkProps} icon={ChevronLeft}>
        Go Home
      </Button>
    </YStack>
  )
}
