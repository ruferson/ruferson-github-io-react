import type { Meta, StoryObj } from '@storybook/react-vite'
import { experience } from '@/data/cv'
import { ExperienceCard } from './ExperienceCard'

const meta = {
  title: 'CV/ExperienceCard',
  component: ExperienceCard,
  tags: ['autodocs'],
  args: { item: experience[0] },
} satisfies Meta<typeof ExperienceCard>

export default meta
type Story = StoryObj<typeof meta>

export const Frontend: Story = {}

export const Mobile: Story = {
  args: { item: experience[1] },
}

export const WithoutTechnologies: Story = {
  args: { item: { ...experience[2], technologies: undefined } },
}

export const EnglishLocale: Story = {
  parameters: {
    globals: { language: 'en' },
  },
}
