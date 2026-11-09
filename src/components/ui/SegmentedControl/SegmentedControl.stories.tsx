import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { SegmentedControl } from './SegmentedControl'

const options = [
  { value: 'es', label: '🇪🇸 ES', ariaLabel: 'Español' },
  { value: 'en', label: '🇬🇧 EN', ariaLabel: 'Inglés' },
  { value: 'fr', label: '🇫🇷 FR', ariaLabel: 'Francés' },
]

const meta = {
  title: 'UI/SegmentedControl',
  component: SegmentedControl,
  tags: ['autodocs'],
  args: { options, value: 'es', ariaLabel: 'Language', onChange: () => {} },
} satisfies Meta<typeof SegmentedControl>

export default meta
type Story = StoryObj<typeof meta>

function ControlledExample(args: Story['args']) {
  const [value, setValue] = useState(args?.value ?? 'es')
  return (
    <SegmentedControl
      {...args}
      options={args?.options ?? options}
      ariaLabel={args?.ariaLabel ?? 'Language'}
      value={value}
      onChange={setValue}
    />
  )
}

export const Controlled: Story = {
  render: (args) => <ControlledExample {...args} />,
}
export const TwoOptions: Story = { args: { options: options.slice(0, 2) } }
