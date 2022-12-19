import { ScrollView, SizeTokens, YStack, YStackProps } from 'tamagui'

export type LmDialogContentProps = YStackProps & {
  contentPadding?: SizeTokens
}

export function LmDialogContent({
  children,
  contentPadding = '$4',
  ...rest
}: LmDialogContentProps) {
  return (
    <ScrollView padding={contentPadding}>
      <YStack space {...rest}>
        {children}
      </YStack>
    </ScrollView>
  )
}
