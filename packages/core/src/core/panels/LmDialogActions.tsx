import { SizeTokens, XStack, XStackProps } from 'tamagui'

export type LmDialogActionsProps = XStackProps & {
  contentPadding?: SizeTokens
}

export function LmDialogActions({
  children,
  contentPadding = '$4',
  ...rest
}: LmDialogActionsProps) {
  return (
    <XStack
      justifyContent={'flex-end'}
      alignItems={'center'}
      paddingLeft={contentPadding}
      paddingRight={contentPadding}
      paddingBottom={contentPadding}
      {...rest}
    >
      {children}
    </XStack>
  )
}

export function LmDialogHeader({ children, contentPadding = '$4', ...rest }: LmDialogActionsProps) {
  return (
    <XStack
      justifyContent={'space-between'}
      alignItems={'center'}
      paddingLeft={contentPadding}
      paddingRight={contentPadding}
      paddingTop={contentPadding}
      {...rest}
    >
      {children}
    </XStack>
  )
}
