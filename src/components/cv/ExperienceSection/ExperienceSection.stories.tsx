import type { Meta, StoryObj } from '@storybook/react-vite'
import { experience } from '@/data/cv'
import { ExperienceSection } from './ExperienceSection'

const meta = {
  title: 'CV/ExperienceSection',
  component: ExperienceSection,
  tags: ['autodocs'],
  args: { items: experience },
} satisfies Meta<typeof ExperienceSection>

export default meta
type Story = StoryObj<typeof meta>

export const FullSection: Story = {}

export const SingleExperience: Story = {
  args: { items: experience.slice(0, 1) },
}

export const CustomTitle: Story = {
  args: { title: 'Career History' },
}

export const EnglishLocale: Story = {
  parameters: {
    globals: { language: 'en' },
  },
}
