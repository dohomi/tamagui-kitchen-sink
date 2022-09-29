import {MdiAlert} from "@tamagui-extras/mdi-icons/src";
import {YStack} from "tamagui";

export default {
    title: 'ui/Content/MdiIcon',
}
export const Basic = () => (
    <YStack space>
        <MdiAlert size={'$2'}/>
        <MdiAlert size={'$2'} color={'$blue10'}/>
        <MdiAlert size={'$2'} color={'$red10'}/>
    </YStack>
)

export const Sizes = () => (
    <YStack space>
        <MdiAlert size={'$2'}/>
        <MdiAlert color={'$blue10'} size={60}/>
        <MdiAlert color={'$red10'} size={80}/>
        <MdiAlert size={'$10'}/>
    </YStack>
)
