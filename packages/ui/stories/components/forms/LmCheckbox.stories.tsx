import {LmCheckbox} from "../../../src/components/forms/LmCheckbox";
import {YStack} from "tamagui";

export default {
    title: 'ui/forms/Checkbox',
    component: LmCheckbox
}

const Template = (args) => <LmCheckbox {...args}/>

export const Basic = Template.bind({})
Basic.args = {
    label: 'Please check this out'
}

export const Blue = Template.bind({})
Blue.args = {
    label: 'Orange theme',
    theme: 'orange_alt2'
}

export const Sizes = () => (
    <YStack space>
        <LmCheckbox label={'size default'}/>
        <LmCheckbox label={'size $4'} size={'$4'}/>
        <LmCheckbox label={'size $6'} size={'$6'}/>
    </YStack>
)