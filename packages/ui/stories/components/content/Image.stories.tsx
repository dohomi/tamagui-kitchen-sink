import {LmImage} from "../../../src";

export default {
    title: 'ui/content/image',
    component: LmImage
}

const Template = (args) => <LmImage {...args}/>

export const Basic = Template.bind({})
Basic.args = {
    width: 400,
    height: 300,
    src: 'https://placekitten.com/400/300'
}