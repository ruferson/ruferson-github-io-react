import type { Meta, StoryObj } from '@storybook/react-vite'
import { RetroModeToggle } from './RetroModeToggle'

const meta = {
  title: 'Controls/RetroModeToggle',
  component: RetroModeToggle,
  tags: ['autodocs'],
  argTypes: { variant: { control: 'inline-radio', options: ['bar', 'icon'] } },
} satisfies Meta<typeof RetroModeToggle>

export default meta
type Story = StoryObj<typeof meta>

export const Bar: Story = { args: { variant: 'bar' } }

export const IconOnly: Story = { args: { variant: 'icon' } }

export const RetroActive: Story = {
  args: { variant: 'bar' },
  parameters: {
    globals: { retroMode: true },
  },
}

export const EnglishLocale: Story = {
  args: { variant: 'bar' },
  parameters: {
    globals: { language: 'en' },
  },
}
