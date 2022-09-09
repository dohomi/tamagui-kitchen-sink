import {ComponentMeta, ComponentStory} from "@storybook/react";
import {XStack, YStack} from "tamagui";
import {LmSelect} from "../../../src";
import {fruitItems} from "../../../fixtures/selectItems";

export default {
    title: 'ui/forms/select',
    component: LmSelect
} as ComponentMeta<typeof LmSelect>;

const items = fruitItems

const Template: ComponentStory<typeof LmSelect> = (args) => <LmSelect {...args} />
export const Primary = Template.bind({})
Primary.args = {
    colorVariant: 'primary',
    items: items,
    dropDownLabel: 'Fruits',
    width: 300,
    scrollButtonGradient: ['$red10', '$yellow10']
}

export const Theme = Template.bind({})
Theme.args = {
    themeName: 'light_blue',
    items,
    placeholder: "Doesn't show up"
}

export const Sizes = () => (
    <XStack space={'$4'}>
        <LmSelect items={items} colorVariant={'info'} size={'$1'}/>
        <LmSelect items={items} colorVariant={'info'} size={'$2'}/>
        <LmSelect items={items} colorVariant={'info'} size={'$4'}/>
        <LmSelect items={items} colorVariant={'info'} size={'$6'}/>
    </XStack>
)

export const Width = () => (
    <XStack space={'$4'}>
        <LmSelect items={items} colorVariant={'info'} width={150}/>
        <LmSelect items={items} colorVariant={'info'} /> {/* default 200 */}
        <LmSelect items={items} colorVariant={'info'} width={250}/>
        <LmSelect items={items} colorVariant={'info'} width={300}/>
    </XStack>
)

export const Colors = () => (
    <YStack space={'$4'}>
        <XStack space={'$4'}>
            <LmSelect items={items} colorVariant={'primary'}/>
            <LmSelect items={items} colorVariant={'secondary'}/>
            <LmSelect items={items} colorVariant={'success'}/>
        </XStack>
        <XStack space={'$4'}>
            <LmSelect items={items} colorVariant={'info'}/>
            <LmSelect items={items} colorVariant={'warning'}/>
            <LmSelect items={items} colorVariant={'error'}/>
            <LmSelect items={items} themeName={'dark_gray_alt2'}/>
        </XStack>
    </YStack>
)

