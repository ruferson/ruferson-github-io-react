import type { Meta, StoryObj } from '@storybook/react-vite'
import { PageContainer } from './PageContainer'

const meta = {
  title: 'Layout/PageContainer',
  component: PageContainer,
  tags: ['autodocs'],
  args: {
    children: (
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
          Document Container Preview
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          This container wraps the entire CV sheet with responsive padding, rounded corners, retro-box support, and print optimization.
        </p>
      </div>
    ),
  },
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof PageContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithCustomClass: Story = {
  args: {
    className: 'border-2 border-emerald-500',
  },
}
