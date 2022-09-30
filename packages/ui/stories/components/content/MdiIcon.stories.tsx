import {XStack, YStack} from "tamagui";
import {LmMdiIcon} from "../../../src";

export default {
    title: 'ui/Content/Material Design Icons',
    component: LmMdiIcon
}

const Template = (args) => <LmMdiIcon {...args}/>

export const Basic = Template.bind({})
Basic.args = {
    name: 'mdiAbTesting'
}

export const Sizes = () => (
    <YStack space>
        <LmMdiIcon name={'mdiAbTesting'}/>
        <LmMdiIcon name={'mdiAbTesting'} size={'$6'}/>
        <LmMdiIcon name={'mdiAbTesting'} size={'$8'}/>
        <LmMdiIcon name={'mdiAbTesting'} size={'$10'}/>
    </YStack>
)

export const Colors = () => (
    <XStack space>
        <LmMdiIcon name={'mdiAbTesting'} color={'$red10'}/>
        <LmMdiIcon name={'mdiAbTesting'} color={'$green10'}/>
        <LmMdiIcon name={'mdiAbTesting'} color={'$blue10'}/>
        <LmMdiIcon name={'mdiAbTesting'} color={'$yellow10'}/>
    </XStack>
)
