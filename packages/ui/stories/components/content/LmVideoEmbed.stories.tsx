import {LmVideoEmbed} from "../../../src";

export default {
    title: 'ui/Content/Video Embed',
    component: LmVideoEmbed
}

const Template = (args) => <LmVideoEmbed {...args}/>

export const Youtube = Template.bind({})
Youtube.args = {
    youtubeId: 'JxS5E-kZc2s'
}