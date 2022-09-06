import {LmCard} from "../../src/components/layout/Card";

export default {
    title: 'ui/layout/card',
    component: LmCard
}

const Template = (args) => <LmCard {...args}/>

export const Basic = Template.bind({})
Basic.args = {
    title: 'Hello World',
    subTitle: 'how are you',
}

export const Bouncy = Template.bind({})
Bouncy.args = {
    title: 'Hello World',
    subTitle: 'how are you',
    bouncy: true
}