import {Text} from "tamagui";
import {MyComponent} from "../src";
import {ComponentStory, ComponentMeta} from '@storybook/react';

export default {
    title: 'ui/MyComponent',
    component: MyComponent,
} as ComponentMeta<typeof MyComponent>;


const Template: ComponentStory<typeof MyComponent> = (args) => <MyComponent {...args} />;

export const Base = Template.bind({})
Base.args={
    children: (
        <Text>My Component</Text>
    )
}