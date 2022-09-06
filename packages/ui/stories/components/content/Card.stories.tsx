import {LmCard, LmCardProps} from "../../../src/components/content/LmCard";
import {ComponentMeta, ComponentStory} from '@storybook/react'

export default {
    title: 'ui/content/card',
    component: LmCard
} as ComponentMeta<typeof LmCard>

const Template: ComponentStory<typeof LmCard> = (args: LmCardProps) => <LmCard {...args}/>

export const Basic = Template.bind({})
Basic.args = {
    title: 'Hello World',
    subTitle: 'how are you',
    width: 300,
    height: 500,
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