import { LmFormRhfProvider, LmSwitch, LmSwitchRhf } from '../../../../form/src'
import { YStack } from 'tamagui'

export default {
  title: 'form/Switch',
  component: LmSwitch,
}

export const Basic = {
  args: {
    labelLeft: 'Left Label',
  },
}

export const LabelRight = {
  args: {
    labelRight: 'Right Label',
  },
}

export const LabelBothSides = {
  args: {
    labelLeft: 'Left Label',
    labelRight: 'Right Label',
  },
}

export const Sizes = () => (
  <YStack space>
    <LmSwitch labelRight={'Some label on the right side'} />
    <LmSwitch labelRight={'Some label with size $2'} size={'$2'} />
    <LmSwitch labelRight={'Some label with size $3'} size={'$3'} />
    <LmSwitch labelRight={'Some label with size $4'} size={'$4'} />
  </YStack>
)

export const ReactHookForm = () => (
  <LmFormRhfProvider defaultValues={{ is_checked: true }}>
    <YStack space>
      <LmSwitchRhf name={'first'} labelRight={'Some label on the right side'} />
      <LmSwitchRhf name={'is_checked'} labelRight={'Pre checked.'} />
    </YStack>
  </LmFormRhfProvider>
)
