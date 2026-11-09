import type { Meta, StoryObj } from '@storybook/react-vite'
import { profile } from '@/data/cv'
import { ProfileHero } from './ProfileHero'

// Embedded sample avatar so Storybook does not depend on /public asset loading
const placeholder =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#94a3b8"/><circle cx="50" cy="38" r="18" fill="#f1f5f9"/><rect x="20" y="62" width="60" height="40" rx="20" fill="#f1f5f9"/></svg>',
  )

const meta = {
  title: 'CV/ProfileHero',
  component: ProfileHero,
  tags: ['autodocs'],
  args: { profile: { ...profile, photo: placeholder }, showStatus: true },
} satisfies Meta<typeof ProfileHero>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithoutStatus: Story = {
  args: { showStatus: false },
}

export const EnglishLocale: Story = {
  parameters: {
    globals: { language: 'en' },
  },
}

export const RetroDark: Story = {
  parameters: {
    globals: { darkMode: true, retroMode: true },
  },
}
