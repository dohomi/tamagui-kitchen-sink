import {Text, XStack, YStack} from "tamagui";
import {
    LmCheckboxRhf,
    LmFormRhfProvider,
    LmInputRhf,
    LmResetButtonRhf,
    LmSelectRhf,
    LmSliderRhf,
    LmSubmitButtonRhf,
    LmSwitchRhf
} from "../../../src";
import React, {useState} from "react";
import {fruitItemsFixtures} from "../../../fixtures/selectItems";

export default {
    title: 'ui/Forms/ReactHookForm',
}

export const ReactHookForm = () => {
    const [data, setData] = useState<any>({message: 'not submitted...'})

    return (
        <LmFormRhfProvider defaultValues={{
            slider_pre: 2
        }}>
            <YStack space>
                <LmInputRhf name={'name'} label={'Name'} placeholder={'Type your name...'} labelInline required/>
                <LmInputRhf name={'description'} label={'Description'} placeholder={'A long description...'} labelInline
                            multiline/>
                <LmSelectRhf name={'fruit'} options={fruitItemsFixtures} label={'Select fruit'} labelInline required/>

                <LmCheckboxRhf name={'check_this'} required label={'Do you agree to our T&C?'}/>
                <LmSwitchRhf name={'switch'} labelRight={'Some switch'}/>
                <LmSliderRhf name={'slider'}/>
                <LmSliderRhf name={'slider_pre'}/>
                <XStack space>
                    <LmResetButtonRhf onPress={() => setData({})}>Reset</LmResetButtonRhf>
                    <LmSubmitButtonRhf onSubmit={(data) => {
                        setData(data)
                    }}>Submit</LmSubmitButtonRhf>
                </XStack>

                <YStack marginTop={'$3'}>
                    <Text>
                        {JSON.stringify(data)}
                    </Text>
                </YStack>
            </YStack>
        </LmFormRhfProvider>
    )
}

