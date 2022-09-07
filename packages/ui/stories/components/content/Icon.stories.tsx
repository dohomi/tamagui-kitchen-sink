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
    iconName: faSquareCheck
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
        <LmIcon iconName={faSquareCheck} color={'$gray3Light'}/>
        <LmIcon iconName={faSquareCheck} size={'$2'} themeColor={'red_alt2'}/>
        <LmIcon iconName={faSquareCheck} size={'$4'}/>
        <LmIcon iconName={faSquareCheck} size={'$6'}/>
        <LmIcon iconName={faSquareCheck} size={'$8'}/>
    </XStack>
)