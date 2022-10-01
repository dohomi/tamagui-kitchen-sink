import {LmAutocompleteRhf, LmFormRhfProvider, LmRichTextRhf, SpaceTokens, YStack} from '@tamagui-extras/ui'
import React from 'react'
import {fruitItemsFixtures} from "app/src/lib/fixtures/selectItems";

export function PlaygroundScreen() {

    const defaultSectionProps: {
        space?: SpaceTokens | null
        flexWrap: 'wrap' | 'nowrap' | 'wrap-reverse'
    } = {
        space: '$4',
        flexWrap: 'wrap'
    }


    return (
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
                    <LmRichTextRhf name={'rich-text'}/>
                </YStack>
            </YStack>
        </LmFormRhfProvider>
    )
}
