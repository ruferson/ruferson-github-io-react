import type { Meta, StoryObj } from '@storybook/react-vite'
import { MobileControls } from './MobileControls'

const meta = {
  title: 'Controls/MobileControls',
  component: MobileControls,
  tags: ['autodocs'],
  // In Storybook the canvas is wide: force display even though component is sm:hidden
  args: { className: 'sm:flex!' },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
} satisfies Meta<typeof MobileControls>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const EnglishActive: Story = {
  parameters: {
    globals: { language: 'en' },
  },
}

export const DarkMode: Story = {
  parameters: {
    globals: { darkMode: true },
  },
}
