import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from './Card'

const meta = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    children: (
      <div>
        <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">Card Title</h4>
        <p className="text-xs text-slate-600 dark:text-slate-400">
          Flexible container card supporting multiple design variants and retro styles.
        </p>
      </div>
    ),
  },
  argTypes: {
    variant: { control: 'select', options: ['surface', 'subtle', 'hero', 'panel'] },
    as: { control: 'inline-radio', options: ['div', 'article', 'section'] },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Surface: Story = {}
export const Subtle: Story = { args: { variant: 'subtle' } }
export const Hero: Story = { args: { variant: 'hero' } }
export const Panel: Story = { args: { variant: 'panel' } }
export const AsArticle: Story = { args: { as: 'article', variant: 'surface' } }
