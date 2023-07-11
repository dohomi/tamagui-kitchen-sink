import {
  LmAutocompleteRhf,
  LmFormRhfProvider,
  LmInputRhf,
  LmStarRatingRhf,
} from '@tamagui-extras/form'

import React from 'react'
import { LmAppShell } from 'app/src/components/layouts/LmAppShell'
import { YStack, YStackProps } from 'tamagui'
import { LmDatepickerRhf } from '@tamagui-extras/date'
import { fruitItemsFixtures } from '../../lib/fixtures/selectItems'

export function PlaygroundScreen() {
  const defaultSectionProps: Partial<YStackProps> = {
    space: '$4',
    flexWrap: 'wrap',
  }

  return (
    <LmAppShell title={'Playground'}>
      <LmFormRhfProvider>
        <YStack
          flex={1}
          justifyContent="flex-start"
          alignItems="flex-start"
          padding="$4"
          space
          maxWidth={'100%'}
        >
          <YStack {...defaultSectionProps} width={'100%'}>
            <LmAutocompleteRhf
              name={'autocomplete'}
              label={'Autocomplete'}
              options={fruitItemsFixtures}
            />
            {/*<LmAutocompleteRhf*/}
            {/*  name={'autocomplete-multi'}*/}
            {/*  label={'Multi'}*/}
            {/*  multiple*/}
            {/*  options={fruitItemsFixtures}*/}
            {/*/>*/}
            {/*<LmSelectRhf options={fruitItemsFixtures} name={'select'} />*/}
            <LmDatepickerRhf name={'date'} label={'Date'} />
            {/*<LmRichTextRhf name={'richtext'} />*/}
            <LmInputRhf name={'textfield'} label={'Textfield'} />
            <LmStarRatingRhf name={'stars'} />

            {/*<LmYoutubeEmbed youtubeId={'JxS5E-kZc2s'} aspectRatio={4 / 3}/>*/}
            {/*<LmVideoNative source={{uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}/>*/}
          </YStack>
        </YStack>
      </LmFormRhfProvider>
    </LmAppShell>
  )
}
