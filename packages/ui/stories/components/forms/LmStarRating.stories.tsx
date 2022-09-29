import {LmStarRating} from "../../../src/components/forms/LmStarRating";

export default {
    title: 'ui/Forms/StarRating',
    component: LmStarRating
}

const Template = (args) => <LmStarRating {...args}/>

export const Basic = Template.bind({})
Basic.args = {}