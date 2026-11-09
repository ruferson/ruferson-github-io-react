import type { Meta, StoryObj } from '@storybook/react-vite'
import { Chip } from './Chip'

const meta = {
  title: 'UI/Chip',
  component: Chip,
  tags: ['autodocs'],
  args: { children: 'React' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['skill', 'tag', 'badge', 'success', 'gold', 'info', 'level', 'outline'],
    },
  },
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Skill: Story = { args: { variant: 'skill', children: 'TypeScript' } }
export const Tag: Story = { args: { variant: 'tag', children: 'v19.0' } }
export const Badge: Story = { args: { variant: 'badge', children: 'Junior Developer' } }
export const SuccessPulse: Story = {
  args: { variant: 'success', pulse: true, children: 'Actively Seeking Employment' },
}
export const GoldHonor: Story = {
  args: { variant: 'gold', icon: 'workspace_premium', children: 'Honors Degree' },
}
export const InfoAchievement: Story = {
  args: { variant: 'info', icon: 'emoji_events', children: '2nd Place Hackathon' },
}
export const Level: Story = { args: { variant: 'level', children: 'Level B2' } }
export const OutlineWithIcon: Story = {
  args: { variant: 'outline', icon: 'location_on', children: 'Cartagena, Spain' },
}
