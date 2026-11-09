import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { PrintButton } from './PrintButton'

const meta = {
  title: 'Controls/PrintButton',
  component: PrintButton,
  tags: ['autodocs'],
  args: { onPrint: fn() },
} satisfies Meta<typeof PrintButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const EnglishLocale: Story = {
  parameters: {
    globals: { language: 'en' },
  },
}
