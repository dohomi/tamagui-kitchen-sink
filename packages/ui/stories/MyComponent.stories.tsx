import {Text} from "tamagui";
import {MyComponent} from "../src";

export default {
    title: 'ui/MyComponent',
    component: MyComponent,
};

export const Primary = () => <MyComponent><Text>My Component</Text></MyComponent>;