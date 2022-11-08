import React from "react";
import {LmVideo} from "../../../src";

export default {
    title: 'ui/Content/Video',
    // component: LmVideoNative // can not parse ...
}

const Template = (args) => <LmVideo {...args}/>

export const Basic = Template.bind({})
const uri = 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';
Basic.args = {
    src: uri
}

export const Width200 = Template.bind({})
Width200.args = {
    src: uri,
    width: 200
}

export const Height200 = Template.bind({})
Height200.args = {
    src: uri,
    height: 200
}