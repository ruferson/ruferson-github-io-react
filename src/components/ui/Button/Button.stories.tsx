import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Button } from './Button'

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  args: { children: 'Button', onClick: fn() },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'neutral', 'soft', 'outline', 'dark'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'icon'] },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = { args: { variant: 'primary', leadingIcon: 'print', children: 'Print / PDF' } }
export const Neutral: Story = { args: { variant: 'neutral', children: 'Neutral Action' } }
export const Soft: Story = { args: { variant: 'soft', leadingIcon: 'sports_esports', children: '8-Bit Mode' } }
export const Outline: Story = { args: { variant: 'outline', leadingIcon: 'mail', trailingIcon: 'content_copy', children: 'Copy Email' } }
export const Dark: Story = { args: { variant: 'dark', leadingIcon: 'github', children: 'GitHub Profile' } }
export const IconOnly: Story = { args: { size: 'icon', leadingIcon: 'dark_mode', children: undefined, 'aria-label': 'Dark mode' } }
export const Disabled: Story = { args: { disabled: true, children: 'Disabled Button' } }
