import type { Meta, StoryObj } from '@storybook/react-vite'
import { Timeline, TimelineItem } from './Timeline'

const meta = {
  title: 'CV/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  argTypes: { variant: { control: 'inline-radio', options: ['default', 'compact'] } },
  args: {
    children: (
      <>
        <TimelineItem>Primer hito</TimelineItem>
        <TimelineItem>Segundo hito</TimelineItem>
        <TimelineItem>Tercer hito</TimelineItem>
      </>
    ),
  },
} satisfies Meta<typeof Timeline>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Compact: Story = {
  args: {
    variant: 'compact',
    children: (
      <>
        <TimelineItem variant="compact">Primer hito</TimelineItem>
        <TimelineItem variant="compact">Segundo hito</TimelineItem>
      </>
    ),
  },
}
