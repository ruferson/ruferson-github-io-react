import type { Meta, StoryObj } from '@storybook/react-vite'
import { skillGroups } from '@/data/cv'
import { SkillsSection } from './SkillsSection'

const meta = {
  title: 'CV/SkillsSection',
  component: SkillsSection,
  tags: ['autodocs'],
  args: { groups: skillGroups },
} satisfies Meta<typeof SkillsSection>

export default meta
type Story = StoryObj<typeof meta>

export const Completa: Story = {}
export const SoloTecnicas: Story = { args: { groups: skillGroups.slice(0, 1) } }
