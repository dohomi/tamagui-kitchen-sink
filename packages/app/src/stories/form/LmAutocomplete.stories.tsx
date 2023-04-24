import {
  LmAutocomplete,
  LmAutocompleteRhf,
  LmFormRhfProvider,
  LmSubmitButtonRhf,
} from '../../../../form/src'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { YStack } from 'tamagui'
import { fruitItemsFixtures } from 'app/src/fixtures/selectItems'

export default {
  title: 'form/Autocomplete',
  component: LmAutocomplete,
} as Meta<typeof LmAutocomplete>
const options = fruitItemsFixtures

export const Single = {
  args: {
    options,
    label: 'Autocomplete Label',
  },
}

export const SingleInline = {
  args: {
    options,
    labelInline: true,
    label: 'Autocomplete Label',
  },
}

export const Multiple = {
  args: {
    options,
    multiple: true,
  },
}

export const WithoutSearch = {
  args: {
    options,
    disableSearch: true,
  },
}

export const AllowNew = {
  args: {
    options,
    allowNew: true,
  },
}

export const SingleRhf: StoryObj = {
  parameters: {
    docs: {
      source: {},
    },
  },
  render: () => (
    <LmFormRhfProvider
      defaultValues={{
        pre: { value: 'Pear', label: 'Pear' },
        pre_matched: 'Pear',
      }}
    >
      <YStack space>
        <LmAutocompleteRhf label={'Single'} name={'autocomplete'} options={options} />
        <LmAutocompleteRhf label={'Single Preselected'} name={'pre'} options={options} />
        <LmAutocompleteRhf
          label={'Single Preselected - Match ID'}
          name={'pre_matched'}
          matchId={true}
          options={options}
        />
        <LmAutocompleteRhf
          label={'With Allow New Hook'}
          name={'with-hook'}
          options={options.map((i) => ({ ...i, otherVal: i.value }))}
          allowNew
          allowNewHook={(newValue) => ({
            label: newValue,
            value: (Math.random() + 1).toString(36).substring(7),
          })}
        />
        <LmSubmitButtonRhf onSubmit={action('formData')}>Submit</LmSubmitButtonRhf>
      </YStack>
    </LmFormRhfProvider>
  ),
}
export const MultipleRhf = () => {
  const [form, setForm] = useState<any>({
    pre: [{ value: 'Pear', label: 'Pear' }],
    pre_matched: ['Pear'],
  })
  return (
    <LmFormRhfProvider
      defaultValues={{
        ...form,
      }}
    >
      <div>
        <LmAutocompleteRhf label={'Multiple'} name={'autocomplete'} options={options} multiple />
        <LmAutocompleteRhf label={'Multiple Preselected'} name={'pre'} options={options} multiple />
        <LmAutocompleteRhf
          label={'Multiple - Match ID'}
          name={'pre_matched'}
          matchId
          options={options}
          multiple
        />
        <LmSubmitButtonRhf onSubmit={action('formData')}>Submit</LmSubmitButtonRhf>
      </div>
    </LmFormRhfProvider>
  )
}
