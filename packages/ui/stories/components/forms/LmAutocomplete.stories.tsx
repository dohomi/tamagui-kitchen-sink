import { LmAutocomplete } from '../../../src/components/forms/LmAutocomplete'
import { LmAutocompleteRhf } from '../../../src/components/forms/rhf/LmAutocompleteRhf'
import { LmFormRhfProvider } from '../../../src/components/forms/rhf/LmFormRhfProvider'
import { LmSubmitButtonRhf } from '../../../src/components/forms/rhf/LmSubmitButtonRhf'
import { Meta } from '@storybook/react'
import { fruitItemsFixtures } from '../../../fixtures/selectItems'
import { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { YStack } from 'tamagui'

export default {
  title: 'ui/Forms/Autocomplete',
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

export const SingleRhf = () => (
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
)

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
