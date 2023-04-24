import { HomeScreen } from './HomeScreen'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'demo/Home',
  component: HomeScreen,
  parameters: {
    docs: {},
  },
} satisfies Meta<typeof HomeScreen>

export default meta

type Story = StoryObj<typeof meta>
export const Home: Story = {}
