import {LmVideo} from "../../../src";

export default {
    title: 'ui/Content/Video',
    component: LmVideo
}

const Template = (args) => <LmVideo {...args}/>

export const Basic = Template.bind({})
const uri = 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';
Basic.args = {
    source: {
        uri,
    }
}