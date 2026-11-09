import { cn } from '@/lib/cn'
import { Icon } from '../../ui/Icon/Icon'
import type { IconName } from '../../ui/Icon/pixelIcons'

interface SectionHeadingProps {
  id: string
  title: string
  icon: IconName
  /** Icon container background tone (applies to `default` variant). */
  tone?: 'primary' | 'secondary'
  /** `default`: prominent heading with container badge. `muted`: discrete uppercase heading. */
  variant?: 'default' | 'muted'
}

export function SectionHeading({ id, title, icon, tone = 'primary', variant = 'default' }: SectionHeadingProps) {
  if (variant === 'muted') {
    return (
      <div className="mb-4 flex items-center gap-2">
        <Icon name={icon} size={18} className="text-slate-500 dark:text-slate-400" />
        <h2 id={id} className="text-sm font-bold uppercase tracking-tight text-slate-700 dark:text-slate-300">
          {title}
        </h2>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2 border-b border-slate-200 pb-2.5 dark:border-slate-800">
      <span
        className={cn(
          'flex h-8 w-8 items-center justify-center rounded-xl',
          tone === 'primary'
            ? 'bg-m3-primary-container text-m3-on-primary-container'
            : 'bg-m3-secondary-container text-m3-on-secondary-container',
        )}
      >
        <Icon name={icon} size={20} />
      </span>
      <h2 id={id} className="font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
    </div>
  )
}
