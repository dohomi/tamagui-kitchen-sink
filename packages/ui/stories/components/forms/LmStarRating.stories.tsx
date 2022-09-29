import {LmStarRating, LmStarRatingRhf} from "../../../src";
import {LmFormRhfProvider} from "@tamagui-extras/ui";
import {YStack} from "tamagui";

export default {
    title: 'ui/Forms/StarRating',
    component: LmStarRating
}

const Template = (args) => <LmStarRating {...args}/>

export const Basic = Template.bind({})
Basic.args = {}

export const Label = Template.bind({})
Label.args = {
    label: 'Label'
}

export const LabelInline = Template.bind({})
LabelInline.args = {
    label: 'Label',
    labelInline: true
}

export const Rating10 = Template.bind({})
Rating10.args = {
    count: 10
}

export const Color = Template.bind({})
Color.args = {
    color: '$blue10'
}

export const Size = Template.bind({})
Size.args = {
    size: '$6'
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
    value: 3,
    disabled: true
}

export const ReactHookForm = () => (
    <LmFormRhfProvider defaultValues={{star_rating_pre: 3}}>
        <YStack space>
            <LmStarRatingRhf name={'star_rating'} label={'Standard'}/>
            <LmStarRatingRhf name={'star_rating_pre'} label={'With Default'}/>
        </YStack>
    </LmFormRhfProvider>
)