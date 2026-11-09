import type { Meta, StoryObj } from '@storybook/react-vite'
import { TwoColumnLayout } from './TwoColumnLayout'

const box = (text: string) => (
  <div className="rounded-2xl border border-dashed border-slate-400 p-6 text-sm text-slate-700 dark:text-slate-300">
    {text}
  </div>
)

const meta = {
  title: 'Layout/TwoColumnLayout',
  component: TwoColumnLayout,
  tags: ['autodocs'],
  args: {
    main: box('Main column content (7/12 width on large screens)'),
    aside: box('Sidebar column content (5/12 width on large screens)'),
  },
} satisfies Meta<typeof TwoColumnLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const MultipleSections: Story = {
  args: {
    main: (
      <div className="space-y-4">
        {box('Experience Section')}
        {box('Volunteer Experience Section')}
      </div>
    ),
    aside: (
      <div className="space-y-4">
        {box('Education Section')}
        {box('Skills & Competencies')}
      </div>
    ),
  },
}
