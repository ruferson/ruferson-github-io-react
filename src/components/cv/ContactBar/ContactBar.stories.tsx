import type { Meta, StoryObj } from '@storybook/react-vite'
import { profile } from '@/data/cv'
import { ContactBar } from './ContactBar'

const meta = {
  title: 'CV/ContactBar',
  component: ContactBar,
  tags: ['autodocs'],
  args: { profile },
} satisfies Meta<typeof ContactBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const EnglishLocale: Story = {
  parameters: {
    globals: { language: 'en' },
  },
}

export const CustomContactData: Story = {
  args: {
    profile: {
      ...profile,
      location: 'London, United Kingdom',
      phone: '+447000000000',
      phoneDisplay: '+44 7000 000 000',
      email: 'alex@example.dev',
    },
  },
}
