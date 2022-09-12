import {LmThemeToggle} from "./LmThemeToggle";

export default {
    title: 'various/ThemeToggle',
}

const Template = (args) => <LmThemeToggle {...args}/>

export const ThemeToggle = Template.bind({})
ThemeToggle.args = {
    children: 'Toggle Theme'
}