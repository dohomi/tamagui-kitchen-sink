import {LmIcon} from "../../../src/components/content/LmIcon";
import {XStack} from "tamagui";
import {faSquareCheck} from "@fortawesome/free-regular-svg-icons/faSquareCheck";

export default {
    title: 'ui/content/icon',
    component: LmIcon
}

const Template = (args) => <LmIcon {...args}/>

export const Basic = Template.bind({})
Basic.args = {
    iconName: faSquareCheck,
    size: '$4'
}

export const Sizes = () => (
    <XStack space={'$4'}>
        <LmIcon iconName={faSquareCheck}/>
        <LmIcon iconName={faSquareCheck} size={'$2'}/>
        <LmIcon iconName={faSquareCheck} size={'$4'}/>
        <LmIcon iconName={faSquareCheck} size={'$6'}/>
        <LmIcon iconName={faSquareCheck} size={'$8'}/>
    </XStack>
)

export const Colors = () => (
    <XStack space={'$4'}>
        <LmIcon iconName={faSquareCheck}/>
        <LmIcon iconName={faSquareCheck} size={'$2'} themeColor={'red'}/>
        <LmIcon iconName={faSquareCheck} size={'$4'} themeColor={'light_pink_alt1'}/>
        <LmIcon iconName={faSquareCheck} size={'$6'} color={'red'}/>
        <LmIcon iconName={faSquareCheck} size={'$8'} color={'blue'}/>
    </XStack>
)