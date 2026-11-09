import type { Meta, StoryObj } from '@storybook/react-vite'
import { Toast } from './Toast'

const meta = {
  title: 'UI/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: { message: 'Copied to clipboard', visible: true },
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const Visible: Story = {}

export const Hidden: Story = {
  args: { visible: false },
}

export const LongMessage: Story = {
  args: {
    message: '8-Bit Retro Mode activated! Modern styles restored.',
    visible: true,
  },
}
