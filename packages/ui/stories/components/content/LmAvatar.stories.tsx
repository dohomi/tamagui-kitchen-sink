import {LmAvatar} from "../../../src/components/content/LmAvatar";

export default {
    title: 'ui/content/avatar',
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