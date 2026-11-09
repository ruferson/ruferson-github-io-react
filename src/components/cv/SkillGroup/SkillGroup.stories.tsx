import type { Meta, StoryObj } from '@storybook/react-vite'
import { skillGroups } from '@/data/cv'
import { SkillGroup } from './SkillGroup'

const meta = {
  title: 'CV/SkillGroup',
  component: SkillGroup,
  tags: ['autodocs'],
  args: { group: skillGroups[0] },
} satisfies Meta<typeof SkillGroup>

export default meta
type Story = StoryObj<typeof meta>

export const ChipsKind: Story = {}

export const BulletListKind: Story = {
  args: { group: skillGroups[1] },
}

export const ToolsGroup: Story = {
  args: { group: skillGroups[2] },
}

export const EnglishLocale: Story = {
  parameters: {
    globals: { language: 'en' },
  },
}
