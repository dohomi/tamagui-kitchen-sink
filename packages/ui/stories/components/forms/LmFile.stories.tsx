import {LmFile} from "../../../src";

export default {
    title: 'ui/Forms/File',
    component: LmFile
}

const Template = (args) => <LmFile {...args}/>

export const Basic = Template.bind({})
Basic.args = {
    pickerProps: {
        children: 'Pick file'
    },
    uploadButtonProps: {
        children: 'Upload file'
    }
}