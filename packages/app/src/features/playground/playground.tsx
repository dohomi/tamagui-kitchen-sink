import {
    LmAutocompleteRhf,
    LmDatepickerRhf,
    LmFile,
    LmFormRhfProvider,
    LmVideo,
    LmVideoEmbed,
    SpaceTokens,
    YStack
} from 'tamagui-extras'
import React from 'react'
import {fruitItemsFixtures} from "app/src/lib/fixtures/selectItems";
import {ScrollView} from "tamagui";

export function PlaygroundScreen() {

    const defaultSectionProps: {
        space?: SpaceTokens | null
        flexWrap: 'wrap' | 'nowrap' | 'wrap-reverse'
    } = {
        space: '$4',
        flexWrap: 'wrap'
    }


    return (
        <ScrollView>

            <LmFormRhfProvider>
                <YStack flex={1}
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        padding="$4"
                        space
                        maxWidth={'100%'}>
                    <YStack {...defaultSectionProps} width={'100%'}>
                        <LmAutocompleteRhf name={'autocomplete'} label={'Autocomplete'} options={fruitItemsFixtures}/>
                        <LmAutocompleteRhf name={'autocomplete-multi'} label={'Multi'} multiple
                                           options={fruitItemsFixtures}/>
                        <LmDatepickerRhf start={'date'} label={'Date'}/>
                        <LmFile pickerButtonProps={{label: 'Pick Files'}}
                                onUpload={(files) => {

                                }}
                                cancelButtonProps={{
                                    label: 'Cancel'
                                }}
                                uploadButtonProps={{
                                    label: 'Upload'
                                }}/>


                        <LmVideoEmbed youtubeId={'JxS5E-kZc2s'} aspectRatio={4 / 3}/>
                        <LmVideo source={{uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}/>
                    </YStack>
                </YStack>
            </LmFormRhfProvider>
        </ScrollView>
    )
}
