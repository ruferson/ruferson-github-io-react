import type { Meta, StoryObj } from '@storybook/react-vite'
import { LanguageSwitcher } from './LanguageSwitcher'

const meta = {
  title: 'Controls/LanguageSwitcher',
  component: LanguageSwitcher,
  tags: ['autodocs'],
} satisfies Meta<typeof LanguageSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const EnglishActive: Story = {
  parameters: {
    globals: { language: 'en' },
  },
}

export const CustomStyling: Story = {
  args: { className: 'shadow-md ring-2 ring-emerald-500/20' },
}
