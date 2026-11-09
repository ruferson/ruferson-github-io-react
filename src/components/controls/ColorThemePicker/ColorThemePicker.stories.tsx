import type { Meta, StoryObj } from '@storybook/react-vite'
import { ColorThemePicker } from './ColorThemePicker'

const meta = {
  title: 'Controls/ColorThemePicker',
  component: ColorThemePicker,
  tags: ['autodocs'],
  argTypes: { variant: { control: 'inline-radio', options: ['bar', 'floating'] } },
} satisfies Meta<typeof ColorThemePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Bar: Story = { args: { variant: 'bar' } }

export const Floating: Story = { args: { variant: 'floating' } }

export const IndigoSelected: Story = {
  args: { variant: 'bar' },
  parameters: {
    globals: { colorTheme: 'indigo' },
  },
}

export const EnglishLocale: Story = {
  args: { variant: 'bar' },
  parameters: {
    globals: { language: 'en' },
  },
}
