import type { Meta, StoryObj } from '@storybook/react-vite'
import { Icon } from './Icon'
import { pixelIcons, type IconName } from './pixelIcons'

const meta = {
  title: 'UI/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: { name: 'work', size: 24 },
  argTypes: {
    name: { control: 'select', options: Object.keys(pixelIcons) },
    size: { control: { type: 'range', min: 12, max: 48, step: 2 } },
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const GitHub: Story = {
  args: { name: 'github', size: 28 },
}

export const Large: Story = {
  args: { name: 'sports_esports', size: 40, className: 'text-m3-primary' },
}

export const Catalog: Story = {
  render: (args) => (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 p-4">
      {(Object.keys(pixelIcons) as IconName[]).map((name) => (
        <div
          key={name}
          title={name}
          className="flex flex-col items-center gap-2 p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
        >
          <Icon {...args} name={name} size={24} />
          <span className="text-[10px] font-mono truncate max-w-full">{name}</span>
        </div>
      ))}
    </div>
  ),
}
