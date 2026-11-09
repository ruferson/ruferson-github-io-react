import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type TimelineVariant = 'default' | 'compact'

interface TimelineProps {
  variant?: TimelineVariant
  children: ReactNode
  className?: string
}

/** Línea vertical con puntos. Se usa junto a <TimelineItem>. */
export function Timeline({ variant = 'default', children, className }: TimelineProps) {
  return (
    <div
      className={cn(
        'relative before:absolute before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800',
        variant === 'default'
          ? 'mt-4 space-y-6 before:bottom-3 before:left-3 before:top-3'
          : 'pl-6 before:bottom-2 before:left-1 before:top-2',
        className,
      )}
    >
      {children}
    </div>
  )
}

interface TimelineItemProps {
  variant?: TimelineVariant
  children: ReactNode
}

export function TimelineItem({ variant = 'default', children }: TimelineItemProps) {
  return (
    <div className={cn('break-inside-avoid relative', variant === 'default' && 'pl-8')}>
      <span
        aria-hidden="true"
        data-testid="timeline-dot"
        className={cn(
          'absolute rounded-full',
          variant === 'default'
            ? 'left-1.5 top-1.5 h-3.5 w-3.5 bg-slate-400 ring-4 ring-white dark:ring-slate-900'
            : '-left-6 top-1.5 h-2.5 w-2.5 bg-slate-300 ring-2 ring-white dark:bg-slate-600 dark:ring-slate-900',
        )}
      />
      {children}
    </div>
  )
}
