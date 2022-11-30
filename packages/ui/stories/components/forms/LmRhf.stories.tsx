import {XStack, YStack} from "tamagui";
import {
    LmCard,
    LmCheckboxRhf,
    LmFormRhfProvider,
    LmInputRhf,
    LmResetButtonRhf,
    LmSelectRhf,
    LmSliderRhf,
    LmSubmitButtonRhf,
    LmSwitchRhf
} from "../../../src";
import React from "react";
import {fruitItemsFixtures} from "../../../fixtures/selectItems";
import {action} from '@storybook/addon-actions';

export default {
    title: 'ui/Forms/ReactHookForm',
}

export const ReactHookForm = () => {
    return (
        <XStack padding={'$3'}>
            <LmFormRhfProvider defaultValues={{
                slider_pre: 2
            }}>
                <LmCard>
                    <YStack space padding={'$3'}>

                        <LmInputRhf name={'name'} label={'Name'} placeholder={'Type your name...'} labelInline
                                    required/>
                        <LmInputRhf name={'description'} label={'Description'} placeholder={'A long description...'}
                                    labelInline
                                    multiline/>
                        <LmSelectRhf name={'fruit'} options={fruitItemsFixtures} label={'Select fruit'} labelInline
                                     required/>

                        <LmCheckboxRhf name={'check_this'} required label={'Do you agree to our T&C?'}/>
                        <LmSwitchRhf name={'switch'} labelRight={'Some switch'}/>
                        <LmSliderRhf name={'slider'}/>
                        <LmSliderRhf name={'slider_pre'}/>
                        <XStack space>
                            <LmResetButtonRhf>Reset</LmResetButtonRhf>
                            <LmSubmitButtonRhf onSubmit={action('submit')}>Submit</LmSubmitButtonRhf>
                        </XStack>
                    </YStack>
                </LmCard>
            </LmFormRhfProvider>
        </XStack>
    )
}

