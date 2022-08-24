import {LmButton, LmTamaguiProvider} from "../src";

export default {
    title: 'forms/LmButton',
    component: LmButton
};

export const Primary = () => (
    <LmTamaguiProvider>
        <LmButton onPress={() => {
        }}>LmButton</LmButton>;
    </LmTamaguiProvider>
)
