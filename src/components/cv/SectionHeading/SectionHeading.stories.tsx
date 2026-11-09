import type { Meta, StoryObj } from '@storybook/react-vite'
import { SectionHeading } from './SectionHeading'

const meta = {
  title: 'CV/SectionHeading',
  component: SectionHeading,
  tags: ['autodocs'],
  args: { id: 'section-heading', title: 'Professional Experience', icon: 'work' },
  argTypes: {
    tone: { control: 'inline-radio', options: ['primary', 'secondary'] },
    variant: { control: 'inline-radio', options: ['default', 'muted'] },
  },
} satisfies Meta<typeof SectionHeading>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Secondary: Story = {
  args: { tone: 'secondary', icon: 'school', title: 'Education & Qualifications' },
}

export const Muted: Story = {
  args: { variant: 'muted', icon: 'volunteer_activism', title: 'Volunteer Experience' },
}

export const SkillsHeading: Story = {
  args: { tone: 'primary', icon: 'psychology', title: 'Skills & Competencies' },
}
