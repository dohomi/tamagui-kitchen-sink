import {LmAutocompleteRhf, LmFormRhfProvider, SpaceTokens, YStack} from '@tamagui-extras/ui'
import React, {useState} from 'react'
import {fruitItemsFixtures} from "@tamagui-extras/ui/fixtures/selectItems";

export function PlaygroundScreen() {

    const [val, setVal] = useState('apple')
    const [val2, setVal2] = useState('pear')

    const defaultSectionProps: {
        space?: SpaceTokens | null
        flexWrap: 'wrap' | 'nowrap' | 'wrap-reverse'
    } = {
        space: '$4',
        flexWrap: 'wrap'
    }

    const options = [
        {value: '1', label: 'Chocolate'},
        {value: '2', label: 'Strawberry'},
        {value: '3', label: 'Vanilla'},
    ]

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
                    <LmAutocompleteRhf name={'autocomplete'} label={'Multi'} multiple options={fruitItemsFixtures}/>
                </YStack>
            </YStack>
        </LmFormRhfProvider>
    )
}
