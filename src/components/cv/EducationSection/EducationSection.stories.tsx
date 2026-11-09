import type { Meta, StoryObj } from '@storybook/react-vite'
import { education } from '@/data/cv'
import { EducationSection } from './EducationSection'

const meta = {
  title: 'CV/EducationSection',
  component: EducationSection,
  tags: ['autodocs'],
  args: { items: education },
} satisfies Meta<typeof EducationSection>

export default meta
type Story = StoryObj<typeof meta>

export const FullSection: Story = {}

export const SingleDegree: Story = {
  args: { items: education.slice(0, 1) },
}

export const EnglishLocale: Story = {
  parameters: {
    globals: { language: 'en' },
  },
}
