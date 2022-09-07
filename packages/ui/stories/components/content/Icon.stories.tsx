import {LmIcon} from "../../../src/components/content/LmIcon";
import {XStack} from "tamagui";

export default {
    title: 'ui/content/icon',
    component: LmIcon
}

const Template = (args) => <LmIcon {...args}/>

export const Basic = Template.bind({})
Basic.args = {
    iconName: 'download'
}

export const Sizes = () => (
    <XStack space={'$4'}>
        <LmIcon iconName={'bug'}/>
        <LmIcon iconName={'bug'} size={'$2'}/>
        <LmIcon iconName={'bug'} size={'$4'}/>
        <LmIcon iconName={'bug'} size={'$6'}/>
        <LmIcon iconName={'bug'} size={'$8'}/>
    </XStack>
)


export const Colors = () => (
    <XStack space={'$4'}>
        <LmIcon iconName={'bug'} color={'$gray3Light'}/>
        <LmIcon iconName={'bug'} size={'$2'} themeColor={'red_alt2'}/>
        <LmIcon iconName={'bug'} size={'$4'}/>
        <LmIcon iconName={'bug'} size={'$6'}/>
        <LmIcon iconName={'bug'} size={'$8'}/>
    </XStack>
)