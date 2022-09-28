import {LmCard, LmCardProps} from "../../../src";
import {ComponentMeta, ComponentStory} from '@storybook/react'

export default {
    title: 'ui/Content/Card',
    component: LmCard
} as ComponentMeta<typeof LmCard>

const Template: ComponentStory<typeof LmCard> = (args: LmCardProps) => <LmCard {...args}/>

export const Basic = Template.bind({})
Basic.args = {
    title: 'Hello World',
    subTitle: 'how are you',
    width: 300,
    height: 500,
    elevate: true,
    elevation: '$4',
    image: {
        width: 300,
        height: 500,
        src: 'https://placekitten.com/300/500'
    }
} as LmCardProps

export const Bouncy = Template.bind({})
Bouncy.args = {
    title: 'Hello World',
    subTitle: 'how are you',
    bouncy: true
}