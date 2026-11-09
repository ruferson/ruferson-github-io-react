import type { Meta, StoryObj } from '@storybook/react-vite'
import { volunteer } from '@/data/cv'
import { VolunteerSection } from './VolunteerSection'

const meta = {
  title: 'CV/VolunteerSection',
  component: VolunteerSection,
  tags: ['autodocs'],
  args: { items: volunteer },
} satisfies Meta<typeof VolunteerSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const TituloPersonalizado: Story = { args: { title: 'Colaboraciones' } }
