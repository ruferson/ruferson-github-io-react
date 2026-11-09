import type { Meta, StoryObj } from '@storybook/react-vite'
import { education } from '@/data/cv'
import { EducationCard } from './EducationCard'

const meta = {
  title: 'CV/EducationCard',
  component: EducationCard,
  tags: ['autodocs'],
  args: { item: education[0] },
} satisfies Meta<typeof EducationCard>

export default meta
type Story = StoryObj<typeof meta>

export const Degree: Story = {}

export const Certification: Story = {
  args: { item: education[1] },
}

export const LanguageProficiency: Story = {
  args: { item: education[2] },
}

export const EnglishLocale: Story = {
  parameters: {
    globals: { language: 'en' },
  },
}
