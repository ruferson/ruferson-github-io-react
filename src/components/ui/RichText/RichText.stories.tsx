import type { Meta, StoryObj } from '@storybook/react-vite'
import { RichText } from './RichText'

const meta = {
  title: 'UI/RichText',
  component: RichText,
  tags: ['autodocs'],
  args: { children: 'Engineered with **React**, **TypeScript**, and **Storybook**.' },
} satisfies Meta<typeof RichText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const MultipleBolds: Story = {
  args: {
    children:
      'Versatile skillset across **frontend**, **backend APIs**, and **cloud microservices**.',
  },
}

export const PlainTextWithoutFormatting: Story = {
  args: { children: 'Plain text without any bold markup.' },
}
