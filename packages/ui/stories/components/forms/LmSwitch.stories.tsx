import { LmSwitch } from '../../../src'
import { YStack } from 'tamagui'

export default {
  title: 'ui/Forms/Switch',
  component: LmSwitch,
}

const Template = (args) => <LmSwitch {...args} />

export const Basic = Template.bind({})
Basic.args = {
  labelLeft: 'Left Label',
}

export const LabelRight = Template.bind({})
LabelRight.args = {
  labelRight: 'Right Label',
}

export const LabelBothSides = Template.bind({})
LabelBothSides.args = {
  labelLeft: 'Left Label',
  labelRight: 'Right Label',
}

export const Sizes = () => (
  <YStack space>
    <LmSwitch labelRight={'Some label on the right side'} />
    <LmSwitch labelRight={'Some label with size $2'} size={'$2'} />
    <LmSwitch labelRight={'Some label with size $3'} size={'$3'} />
    <LmSwitch labelRight={'Some label with size $4'} size={'$4'} />
  </YStack>
)
