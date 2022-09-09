import {ComponentMeta, ComponentStory} from "@storybook/react";
import {XStack, YStack} from "tamagui";
import {LmSelect} from "../../../src";
import {fruitItems} from "../../../fixtures/selectItems";

export default {
    title: 'ui/forms/select',
    component: LmSelect
} as ComponentMeta<typeof LmSelect>;

const options = fruitItems

const Template: ComponentStory<typeof LmSelect> = (args) => <LmSelect {...args} />
export const Primary = Template.bind({})
Primary.args = {
    colorVariant: 'primary',
    options,
    dropDownLabel: 'Fruits',
    width: 300,
    scrollButtonGradient: ['$red10', '$yellow10']
}

export const Theme = Template.bind({})
Theme.args = {
    themeName: 'light_blue',
    options,
    placeholder: "Doesn't show up"
}

export const Sizes = () => (
    <XStack space={'$4'}>
        <LmSelect options={options} colorVariant={'info'} size={'$1'}/>
        <LmSelect options={options} colorVariant={'info'} size={'$2'}/>
        <LmSelect options={options} colorVariant={'info'} size={'$4'}/>
        <LmSelect options={options} colorVariant={'info'} size={'$6'}/>
    </XStack>
)

export const Width = () => (
    <XStack space={'$4'}>
        <LmSelect options={options} colorVariant={'info'} width={150}/>
        <LmSelect options={options} colorVariant={'info'}/> {/* default 200 */}
        <LmSelect options={options} colorVariant={'info'} width={250}/>
        <LmSelect options={options} colorVariant={'info'} width={300}/>
    </XStack>
)

export const Colors = () => (
    <YStack space={'$4'}>
        <XStack space={'$4'}>
            <LmSelect options={options} colorVariant={'primary'}/>
            <LmSelect options={options} colorVariant={'secondary'}/>
            <LmSelect options={options} colorVariant={'success'}/>
        </XStack>
        <XStack space={'$4'}>
            <LmSelect options={options} colorVariant={'info'}/>
            <LmSelect options={options} colorVariant={'warning'}/>
            <LmSelect options={options} colorVariant={'error'}/>
            <LmSelect options={options} themeName={'dark_gray_alt2'}/>
        </XStack>
    </YStack>
)

