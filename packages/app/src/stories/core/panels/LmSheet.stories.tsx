import { Text, YStack } from 'tamagui'
import { LmButton, LmSheet, usePopoverState, XRegular } from '../../../../../core/src'

export default {
  title: 'core/Panels/Sheet',
  component: LmSheet,
}

export const Basic = () => {
  const props = usePopoverState()
  return (
    <YStack>
      <LmButton onPress={() => props.onOpenChange(true)}>Open Sheet</LmButton>
      <LmSheet {...props}>
        <Text padding={'$4'}>Some Sheet content</Text>
      </LmSheet>
    </YStack>
  )
}

export const FullScreen = () => {
  const props = usePopoverState()
  return (
    <YStack>
      <LmButton onPress={() => props.onOpenChange(true)}>Open Sheet</LmButton>
      <LmSheet {...props} fullScreen>
        <YStack justifyContent={'center'} flex={1} alignItems={'center'}>
          <Text padding={'$4'}>Some Sheet content</Text>
          <LmButton icon={<XRegular />} onPress={() => props.onOpenChange(false)}>
            Close
          </LmButton>
        </YStack>
      </LmSheet>
    </YStack>
  )
}
