import type { Meta, StoryObj } from '@storybook/react-vite'
import { ControlBar } from './ControlBar'

const meta = {
  title: 'Controls/ControlBar',
  component: ControlBar,
  tags: ['autodocs'],
  args: { brand: 'Rubén Fernández • CV' },
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof ControlBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CustomBrand: Story = {
  args: { brand: 'Developer Portfolio' },
}

export const EnglishMode: Story = {
  parameters: {
    globals: { language: 'en' },
  },
}

export const DarkRetroMode: Story = {
  parameters: {
    globals: { darkMode: true, retroMode: true },
  },
}
