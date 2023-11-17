import { Meta, StoryObj } from '@storybook/react'
import { XStack, YStack } from 'tamagui'
import { LmSelect } from '../../../../form/src'
import { fruitItemsFixtures } from 'app/src/fixtures/selectItems'

const meta = {
  title: 'form/Select',
  component: LmSelect,
} satisfies Meta<typeof LmSelect>

export default meta

type Story = StoryObj<typeof meta>
const options = fruitItemsFixtures

export const Basic: Story = {
  args: {
    colorVariant: 'primary',
    options,
    label: 'Select Fruits',
    dropDownLabel: 'Fruits',
    width: 300,
  },
}

export const Inline: Story = {
  args: {
    colorVariant: 'primary',
    options,
    label: 'Select Fruits',
    placeholder: 'fruits...',
    labelInline: true,
    dropDownLabel: 'Fruits',
    width: 300,
  },
}

export const LightBlue: Story = {
  args: {
    themeName: 'light_blue',
    options,
    label: 'Select Fruits',
    placeholder: 'Placeholder',
  },
}

// export const PreSelect: Story = {
//   args: {
//     options,
//     defaultValue: options[2]?.value,
//     placeholder: 'Multiple',
//     multiple: true,
//   },
// }

export const FullWidth: Story = {
  args: {
    options,
    placeholder: 'Full Width',
    fullWidth: true,
  },
}

export const Sizes = () => (
  <YStack space={'$4'}>
    <LmSelect options={options} colorVariant={'info'} size={'$2'} label={'Size $2'} />
    <LmSelect options={options} colorVariant={'info'} size={'$3'} label={'Size $3'} />
    <LmSelect options={options} colorVariant={'info'} size={'$4'} label={'Size $4'} />
    <LmSelect options={options} colorVariant={'info'} size={'$6'} label={'Size $6'} />
  </YStack>
)

export const Width = () => (
  <XStack space={'$4'}>
    <LmSelect options={options} colorVariant={'info'} width={150} />
    <LmSelect options={options} colorVariant={'info'} />
    <LmSelect options={options} colorVariant={'info'} width={250} />
    <LmSelect options={options} colorVariant={'info'} width={300} />
  </XStack>
)

export const Colors = () => (
  <YStack space={'$4'}>
    <YStack space={'$4'}>
      <LmSelect options={options} colorVariant={'info'} label={'Color info'} />
      <LmSelect options={options} colorVariant={'primary'} label={'Color primary'} />
      <LmSelect options={options} colorVariant={'secondary'} label={'Color secondary'} />
      <LmSelect options={options} colorVariant={'success'} label={'Color success'} />
      <LmSelect options={options} colorVariant={'warning'} label={'Color warning'} />
    </YStack>
  </YStack>
)
