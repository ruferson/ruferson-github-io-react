import type { Meta, StoryObj } from '@storybook/react-vite'
import { BulletList } from './BulletList'

const meta = {
  title: 'UI/BulletList',
  component: BulletList,
  tags: ['autodocs'],
  args: {
    items: [
      'Modular components with **React** and **TypeScript**',
      'Unit and integration tests with **Vitest**',
      'Component catalog and documentation in **Storybook**',
    ],
    className: 'text-xs space-y-1.5 text-slate-600 dark:text-slate-300',
  },
} satisfies Meta<typeof BulletList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Compact: Story = {
  args: {
    className: 'text-[11px] space-y-1 text-slate-500',
  },
}

export const SingleItem: Story = {
  args: {
    items: ['Single item with **bold text** highlights.'],
  },
}
