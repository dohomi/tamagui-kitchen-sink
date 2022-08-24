import {LmButton} from "../src";

export default {
    title: 'forms/LmButton',
    component: LmButton,
};

export const Primary = () => <LmButton onPress={() => {
    console.log('pressed')
}}>LmButton</LmButton>;