import {LmAvatar} from "../../../src";
import {XStack} from "tamagui";

export default {
    title: 'ui/Content/Avatar',
    component: LmAvatar
}

const Template = (args) => <LmAvatar {...args}/>

export const Basic = Template.bind({})
Basic.args = {
    src: 'https://placekitten.com/400/300'
}

export const Letter = Template.bind({})
Letter.args = {
    letter: 'DM'
}

export const Square = Template.bind({})
Square.args = {
    letter: 'DM',
    circular: false
}

export const Sizes = () => (
    <XStack space={'$2'}>
        <LmAvatar size={'$2'} src={'https://placekitten.com/400/300'}/>
        <LmAvatar size={'$4'} src={'https://placekitten.com/400/300'}/>
        <LmAvatar size={'$6'} src={'https://placekitten.com/400/300'}/>
        <LmAvatar size={'$8'} src={'https://placekitten.com/400/300'}/>
    </XStack>
)
