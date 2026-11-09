import type { Meta, StoryObj } from '@storybook/react-vite'
import { DarkModeToggle } from './DarkModeToggle'

const meta = {
  title: 'Controls/DarkModeToggle',
  component: DarkModeToggle,
  tags: ['autodocs'],
  argTypes: { variant: { control: 'inline-radio', options: ['bar', 'icon'] } },
} satisfies Meta<typeof DarkModeToggle>

export default meta
type Story = StoryObj<typeof meta>

export const Bar: Story = { args: { variant: 'bar' } }

export const IconOnly: Story = { args: { variant: 'icon' } }

export const DarkActive: Story = {
  args: { variant: 'bar' },
  parameters: {
    globals: { darkMode: true },
  },
}

export const EnglishLocale: Story = {
  args: { variant: 'bar' },
  parameters: {
    globals: { language: 'en' },
  },
}
