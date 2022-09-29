import {Alert} from "@tamagui-extras/mdi-icons";
import {YStack} from "tamagui";

export default {
    title: 'ui/Content/MdiIcon',
}
export const Basic = () => (
    <YStack space>
        <Alert/>
        <Alert color={'$blue10'}/>
        <Alert color={'$red10'}/>
    </YStack>
)

export const Sizes = () => (
    <YStack space>
        <Alert/>
        <Alert color={'$blue10'} size={60}/>
        <Alert color={'$red10'} size={80}/>
    </YStack>
)
