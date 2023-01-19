import {
  LmAutocomplete,
  LmAutocompleteRhf,
  LmFormRhfProvider,
  LmSubmitButtonRhf,
} from '../../../src'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { fruitItemsFixtures } from '../../../fixtures/selectItems'
import { useState } from 'react'

export default {
  title: 'ui/Forms/Autocomplete',
  component: LmAutocomplete,
} as ComponentMeta<typeof LmAutocomplete>
const options = fruitItemsFixtures

const Template: ComponentStory<typeof LmAutocomplete> = (args) => <LmAutocomplete {...args} />
export const Single = Template.bind({})
Single.args = {
  options,
  label: 'Autocomplete Label',
}

export const SingleInline = Template.bind({})
SingleInline.args = {
  options,
  labelInline: true,
  label: 'Autocomplete Label',
}

export const Multiple = Template.bind({})
Multiple.args = {
  options,
  multiple: true,
}

export const WithoutSearch = Template.bind({})
WithoutSearch.args = {
  options,
  disableSearch: true,
}

export const SingleRhf = () => (
  <LmFormRhfProvider
    defaultValues={{
      pre: { value: 'Pear' },
      pre_matched: 'Pear',
    }}
  >
    <LmAutocompleteRhf label={'Single'} name={'autocomplete'} options={options} />
    <LmAutocompleteRhf label={'Single Preselected'} name={'pre'} options={options} />
    <LmAutocompleteRhf
      label={'Single Preselected'}
      name={'pre_matched'}
      matchId={true}
      options={options}
    />
  </LmFormRhfProvider>
)

export const MultipleRhf = () => {
  const [form, setForm] = useState<any>({
    pre: [{ value: 'Pear' }],
    pre_matched: ['Pear'],
  })
  return (
    <LmFormRhfProvider
      defaultValues={{
        ...form,
      }}
    >
      <LmAutocompleteRhf label={'Multiple'} name={'autocomplete'} options={options} multiple />
      <LmAutocompleteRhf label={'Multiple Preselected'} name={'pre'} options={options} multiple />
      <LmAutocompleteRhf
        label={'Multiple Match ID'}
        name={'pre_matched'}
        matchId
        options={options}
        multiple
      />
      <LmSubmitButtonRhf
        onSubmit={(data) => {
          setForm(data)
        }}
      >
        Submit
      </LmSubmitButtonRhf>
    </LmFormRhfProvider>
  )
}
