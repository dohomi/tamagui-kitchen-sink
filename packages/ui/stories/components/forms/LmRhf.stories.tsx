import {StorybookRhfDecorator} from "./FormDecorator";
import {Text, XStack, YStack} from "tamagui";
import {LmInputRhf} from "../../../src/components/forms/rhf/LmInputRhf";
import {LmSubmitButtonRhf} from "../../../src/components/forms/rhf/LmSubmitButtonRhf";
import React, {useState} from "react";
import {LmResetButtonRhf} from "../../../src/components/forms/rhf/LmResetButtonRhf";
import {LmCheckboxRhf} from "../../../src/components/forms/rhf/LmCheckboxRhf";
import {LmSelectRhf} from "../../../src/components/forms/rhf/LmSelectRhf";
import {LmMultiSelectRhf} from "../../../src/components/forms/rhf/LmMultiSelectRhf";
import {fruitItemsFixtures} from "../../../fixtures/selectItems";
import {LmSwitchRhf} from "../../../src";
import {LmSliderRhf} from "../../../src/components/forms/rhf/LmSliderRhf";
import {View} from "react-native";

export default {
    title: 'ui/forms/form',
    decorators: [StorybookRhfDecorator]
}

export const Basic = () => {
    const [data, setData] = useState<any>({message: 'not submitted...'})

    return (
        <YStack space>
            <LmInputRhf name={'name'} label={'Name'} placeholder={'Type your name...'} labelInline required/>
            <LmInputRhf name={'description'} label={'Description'} placeholder={'A long description...'} labelInline
                        multiline/>
            <LmSelectRhf name={'fruit'} options={fruitItemsFixtures} label={'Select fruit'} labelInline required/>
            <LmMultiSelectRhf
                name={'multi'}
                options={fruitItemsFixtures}
                label={'Select some fruits'} labelInline required isMulti/>
            <LmCheckboxRhf name={'check_this'} required label={'Do you agree to our T&C?'}/>
            <LmSwitchRhf name={'switch'} labelRight={'Some switch'}/>
            <LmSliderRhf name={'slider'}/>
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
    )
}

