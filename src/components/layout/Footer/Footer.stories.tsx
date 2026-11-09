import type { Meta, StoryObj } from '@storybook/react-vite'
import { profile } from '@/data/cv'
import { Footer } from './Footer'

const meta = {
  title: 'Layout/Footer',
  component: Footer,
  tags: ['autodocs'],
  args: { location: profile.location, status: profile.footerStatus },
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CustomUpdateText: Story = {
  args: { updated: 'Version 2.0 • Build 2026' },
}

export const EnglishLocale: Story = {
  parameters: {
    globals: { language: 'en' },
  },
}
